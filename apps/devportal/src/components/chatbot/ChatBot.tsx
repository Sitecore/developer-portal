/* eslint-disable no-constant-condition */
import { ChatBotType } from '@/data/data-chatbots';
import { FredPersona, SallyPersona } from '@/data/data-personas';
import { Message, MessageType } from '@/src/types/Message';
import { Button, Card, CardBody, CardFooter, CardHeader, CardProps, CloseButton, FormControl, Heading, IconButton, Input, Progress, Stack, Text, Tooltip, Wrap, useBoolean } from '@chakra-ui/react';
import { mdiCreation, mdiDeleteSweep } from '@mdi/js';
import Icon from '@mdi/react';
import { useEngageTracker } from '@scdp/ui/components';
import { CDP, Personalize, Search, Send, XMCloud } from '@scdp/ui/data';
import { Product } from '@scdp/ui/lib';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IExperienceResult, IPersonalizedExperience } from './IExperienceResult';
import { Messages } from './Messages';
import { PersonalizeBar } from './PersonalizeBar';

type ChatBotProps = CardProps & {
  onClose?: () => void;
  isOpen?: boolean;
  chatBot: ChatBotType;
};


export const ChatBot = ({ onClose, isOpen, chatBot, ...rest }: ChatBotProps) => {
  const tracker = useEngageTracker();
  const [isLoading, setIsLoading] = useBoolean(false);
  const [question, setQuestion] = useState('');
  const [personaContext, setPersonaContext] = useState<IPersonalizedExperience | undefined>();
  const initialMessage = [
    {
      type: MessageType.Assistant,
      text: `Hello! I'm ${chatBot.name}, your friendly Sitecore helper. How can I help you today?`,
    }
  ];
  const [messages, setMessage] = useState<Message[]>(initialMessage);
  const [searchData, setSearchData] = useState<string[]>([]);
  const isBlank = question === '';

  const requestBody = {
    query: question,
    history: messages,
    context: personaContext,
    searchData: [] as string[]
  };

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePersonalizeContext = useCallback(async () => {
    if (tracker.context.isTrackerEnabled) {
      const result = await tracker.RunPersonalizationFlow<IExperienceResult>('developer_portal_scai_experience*');

      if (result) {
        // Update model to have correct information
        const personalizedResult: IPersonalizedExperience = ConvertToPersonalizeResult(result);

        setPersonaContext(personalizedResult);
      }
    }
  }, []);

  const ConvertToPersonalizeResult = (result: IExperienceResult): IPersonalizedExperience => {
    const experience: IPersonalizedExperience = {
      recent_searches_summary: result.recent_searches_summary,
      relevant_tags: result.relevant_tags,
    };

    // TODO: Clean this up
    if (result.persona == 'fredPersona') {
      experience.persona = FredPersona;
    } else if (result.persona == 'sallyPersona') {
      experience.persona = SallyPersona;
    } else {
      experience.persona = undefined;
    }

    // switch over products and set the product
    if (result.product_details !== undefined) {
      switch (result.product_details) {
        case 'xm-cloud':
          experience.productInfo = XMCloud;
          experience.product = Product.XMCloud;
          break;
        case 'Sitecore CDP':
          experience.productInfo = CDP;
          experience.product = Product.CDP;
          break;
        case 'Sitecore Send':
          experience.productInfo = Send;
          experience.product = Product.Send;
          break;
        case 'Sitecore Personalize':
          experience.productInfo = Personalize;
          experience.product = Product.Personalize;
          break;
        case 'Sitecore Search':
          experience.productInfo = Search;
          experience.product = Product.Search;
          break;
        default:
          experience.productInfo = undefined;
          experience.product = undefined;
          break;
      }
    }

    console.log(experience);

    return experience;
  };

  useEffect(() => {
    handlePersonalizeContext();
  }, [handlePersonalizeContext]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages]);

  const storeQuestionPersonalize = async (question: string) => {
    if (tracker.context.isTrackerEnabled) {
      await tracker.TrackEvent('ChatBotSearch', {
        question: question,
      });
    }
  };

  const askQuestion = async () => {
    if (isBlank) return;
    setMessage((old) => [...old, { type: MessageType.User, text: question }]);
    
    setIsLoading.on();

    await storeQuestionPersonalize(question);

    const searchResponse: Response = await fetch('/searchAPI', {
      method: 'POST',
      body: JSON.stringify({ query: question }),
    });
    const searchResult = await searchResponse.json();

    const updatedAnswers = searchData.concat(searchResult.answers);
    setSearchData(updatedAnswers);
    requestBody.searchData = updatedAnswers;

    // TODO: Move this to a lib/service
    const chatResult: Response = await fetch('/chat', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });

    if (!chatResult.ok) throw new Error(chatResult.statusText);
    if (chatResult.body == null) throw new Error('No body in Chat response');

    const reader = chatResult.body.getReader();
    const decoder = new TextDecoder();

    // Set variable to fill using the streaming data
    let completeResponse = '';

    while (true) {
      const { value, done: doneReading } = await reader.read();
      if (doneReading) {
        break;
      }

      // Get every chunk of data and add it to the complete response
      const chunkValue = decoder.decode(value);
      completeResponse += chunkValue;

      // Starting to write to the browser so turn of reloading
      setIsLoading.off();

      // if the last message was from the assistant, it's the same message, so update it
      setMessage((old) => {
        const lastMessage = old[old.length - 1];
        if (lastMessage.type === MessageType.Assistant) {
          const updatedMessage = { ...lastMessage, text: completeResponse };
          return [...old.slice(0, -1), updatedMessage];
        } else {
          return [...old, { type: MessageType.Assistant, text: completeResponse }];
        }
      });
    }

    setQuestion('');
  };

  const resetSession = function () {
    setMessage(() => initialMessage);
    setSearchData([]);
    setQuestion('');
  };

  return (
    <Card variant={'elevated'} size={['sm', 'md', 'lg']} maxW={'lg'} background={'transparent'} {...rest}>
      {/* <CardHeader background="primary-fg" color="chakra-inverse-text" borderTopRadius="2xl"> */}
      <CardHeader bgGradient="linear(to-tr, primary.500, teal.500)" color="chakra-inverse-text" borderTopRadius="2xl">
        <Stack direction="row" spacing={4} align="top" justify="space-between">
          <Stack>
            <Heading as="h2">Ask {chatBot.name}!</Heading>
            <Text variant="subtle" color="chakra-inverse-text">
              Your friendly Sitecore helper!
            </Text>
          </Stack>
          <CloseButton onClick={onClose} />
        </Stack>
      </CardHeader>
      <CardBody height={'200px'} maxHeight={['200px', '400px', '600px']} background={'chakra-body-bg'} overflowY={'auto'} p={3}>
        <PersonalizeBar context={personaContext} />
        <Messages messages={messages} chatBot={chatBot} />
        {isLoading && <Progress mx={5} mt={4} variant="ai" isIndeterminate />}
        <div ref={messagesEndRef} />
      </CardBody>

      <CardFooter gap={4} background={'chakra-body-bg'} borderBottomRadius={'xl'}>
        <Tooltip label="Reset">
          <IconButton onClick={resetSession} variant="outline" icon={<Icon path={mdiDeleteSweep} size={1} />} marginTop={'auto'} aria-label="Reset">
            Reset
          </IconButton>
        </Tooltip>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            askQuestion();
          }}
          style={{ width: '100%' }}
        >
          <FormControl>
            <Input variant="outline" type="text" placeholder="What would you like to know?" value={question} id="question" onChange={(e) => setQuestion(e.target.value)} focusBorderColor="primary-subtle-bg" />
          </FormControl>
        </form>
        <Wrap align="center">
          <Button
            isDisabled={isLoading}
            _hover={{}}
            onClick={(e) => {
              e.preventDefault();
              askQuestion();
            }}
            variant="ai"
            leftIcon={<Icon path={mdiCreation} size={1} />}
            marginTop={'auto'}
          >
            Ask
          </Button>
        </Wrap>
      </CardFooter>
    </Card>
  );
};
