import { Message, MessageType } from '@/src/types/Message';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, CloseButton, FormControl, Heading, IconButton, Input, Progress, Stack, Text, Tooltip, Wrap, useBoolean } from '@chakra-ui/react';
import { mdiCreation, mdiDeleteSweep } from '@mdi/js';
import Icon from '@mdi/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useEngageTracker } from 'ui/components/integrations';
import { Messages } from './Messages';

type ChatBotProps = {
  onClose?: () => void;
  isOpen?: boolean;
};

export const ChatBot = ({ onClose, isOpen }: ChatBotProps) => {
  const router = useRouter();
  const tracker = useEngageTracker();
  const [isLoading, setIsLoading] = useBoolean(false);
  const [question, setQuestion] = useState('');
  const [personaContext, setPersonaContext] = useState<IExperienceResult | undefined>();
  const [messages, setMessage] = useState<Message[]>([
    {
      type: MessageType.Assistant,
      text: "Hello! I'm Clippy, your friendly Sitecore helper. How can I help you today?",
    },
  ]);

  const isBlank = question === '';

  const requestBody = {
    question: question,
    history: messages,
  };

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Will only run when the page route changes
  const initPersonalization = useCallback(async () => {
    if (tracker.context.isTrackerEnabled) {
      const result: IExperienceResult = await tracker.RunPersonalizationFlow('developer_portal_scai_experience');

      if (result) {
        setPersonaContext(result);
      }
    }
  }, [router.asPath]);

  useEffect(() => {
    initPersonalization();
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, initPersonalization]);

  const askQuestion = function () {
    if (isBlank) return;
    setIsLoading.on();
    setMessage((old) => [...old, { type: MessageType.User, text: question }]);
    fetch('/chat', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data: string) => {
        setIsLoading.off();
        setMessage((old) => [...old, { type: MessageType.Assistant, text: data }]);
        setQuestion('');
      });
  };

  const resetSession = function () {
    setMessage(() => [
      {
        type: MessageType.Assistant,
        text: "Hello! I'm Clippy, your friendly Sitecore helper. How can I help you today?",
      },
    ]);
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
              your friendly Sitecore helper!
            </Text>
          </Stack>
          <CloseButton onClick={onClose} />
        </Stack>
      </CardHeader>
      <CardBody height={'200px'} background={'chakra-body-bg'}>
        <Box overflowY="auto" maxHeight={['200px', '400px', '600px']}>
          <Messages messages={...messages} />
          {isLoading && <Progress mx={5} mt={4} variant="ai" isIndeterminate />}
          <div ref={messagesEndRef} />
        </Box>
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
          <Button isDisabled={isLoading} _hover={{}} onClick={askQuestion} variant="ai" leftIcon={<Icon path={mdiCreation} size={1} />} marginTop={'auto'}>
            Ask
          </Button>
        </Wrap>
      </CardFooter>
    </Card>
  );
};
