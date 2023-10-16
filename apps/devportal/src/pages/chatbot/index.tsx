'use client';

import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, Heading, Input, useBoolean } from '@chakra-ui/react';
import { mdiCreation, mdiDeleteSweep } from '@mdi/js';
import Icon from '@mdi/react';
import { useEffect, useRef, useState } from 'react';
import { Messages } from '../../components/messages/Messages';
import { Message, MessageType } from '../../types/Message';

export default function Home() {
  const [isLoading, setIsLoading] = useBoolean(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessage] = useState<Message[]>([
    {
      type: MessageType.Assistant,
      text: "Hello! I'm Clippy, your friendly Sitecore helper. How can I help you today?",
    },
  ]);

  const requestBody = {
    question: question,
    history: messages,
  };

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const askQuestion = function () {
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
    <Box maxW={'md'} m={10}>
      <Card>
        <CardHeader>
          <Heading as="h2">Welcome to Sitecore Clippy</Heading>
          <Heading variant="section">your friendly Sitecore helper!</Heading>
        </CardHeader>
        <CardBody height={'200px'}>
          <Box overflowY="auto" maxHeight="600px">
            <Messages messages={...messages} isLoading={isLoading} />
            <div ref={messagesEndRef} />
          </Box>
        </CardBody>

        <CardFooter gap={4}>
          <Button onClick={resetSession} variant="ai" leftIcon={<Icon path={mdiDeleteSweep} size={1} />} marginTop={'auto'}>
            Reset
          </Button>
          <FormControl>
            <Input variant="outline" type="text" placeholder="What would you like to know?" value={question} id="question" onChange={(e) => setQuestion(e.target.value)} />
          </FormControl>
          <Button onClick={askQuestion} variant="ai" leftIcon={<Icon path={mdiCreation} size={1} />} marginTop={'auto'}>
            Ask
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
