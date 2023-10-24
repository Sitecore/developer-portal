/* eslint-disable no-constant-condition */
import { FredPersona, SallyPersona } from '@/data/data-personas';
import { CDP, Personalize, Search, Send, XMCloud } from '@/data/data-products';
import { Message, MessageType } from '@/src/types/Message';
import { Button, Card, CardBody, CardFooter, CardHeader, CloseButton, FormControl, Heading, IconButton, Input, Progress, Stack, Text, Tooltip, Wrap, useBoolean } from '@chakra-ui/react';
import { mdiCreation, mdiDeleteSweep } from '@mdi/js';
import Icon from '@mdi/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useEngageTracker } from 'ui/components/integrations';
import { Product } from 'ui/lib/assets';
import { IExperienceResult, IPersonalizedExperience } from './IExperienceResult';
import { Messages } from './Messages';
import { PersonalizeBar } from './PersonalizeBar';

type ChatBotProps = {
  onClose?: () => void;
  isOpen?: boolean;
};

const initialMessage = [
  {
    type: MessageType.Assistant,
    text: "Hello! I'm Clippy, your friendly Sitecore helper. How can I help you today?",
  },
];

export const ChatBot = ({ onClose, isOpen }: ChatBotProps) => {
  const tracker = useEngageTracker();
  const [isLoading, setIsLoading] = useBoolean(false);
  const [question, setQuestion] = useState('');
  const [personaContext, setPersonaContext] = useState<IPersonalizedExperience | undefined>();
  const [messages, setMessage] = useState<Message[]>(initialMessage);
  const isBlank = question === '';

  const requestBody = {
    query: question,
    history: messages,
    context: personaContext,
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
      await tracker.TrackEvent('ClippySearch', {
        question: question,
      });
    }
  };

  const askQuestion = async () => {
    if (isBlank) return;
    setMessage((old) => [...old, { type: MessageType.User, text: question }]);

    setIsLoading.on();

    await storeQuestionPersonalize(question);

    // TODO: Move this to a lib/service
    const result: Response = await fetch('/chat', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });

    if (!result.ok) throw new Error(result.statusText);
    if (result.body == null) throw new Error('No body in response');

    const reader = result.body.getReader();
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
    setQuestion('');
  };

  return (
    <Card variant={'elevated'} size={['sm', 'md', 'lg']} maxW={'lg'} background={'transparent'}>
      {/* <CardHeader background="primary-fg" color="chakra-inverse-text" borderTopRadius="2xl"> */}
      <CardHeader bgGradient="linear(to-tr, primary.500, teal.500)" color="chakra-inverse-text" borderTopRadius="2xl">
        <Stack direction="row" spacing={4} align="top" justify="space-between">
          <Stack>
            <Heading as="h2">Sitecore Clippy</Heading>
            <Text variant="subtle" color="chakra-inverse-text">
              Your friendly Sitecore helper!
            </Text>
          </Stack>
          <CloseButton onClick={onClose} />
        </Stack>
      </CardHeader>
      <CardBody height={'200px'} maxHeight={['200px', '400px', '600px']} background={'chakra-body-bg'} overflowY={'auto'} p={3}>
        <PersonalizeBar context={personaContext} />
        <Messages messages={messages} />
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
