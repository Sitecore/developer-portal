import { Message, Messages } from '@/src/components/messages/Messages';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, HStack, Heading, Input, InputGroup, InputRightElement, Stack, useBoolean } from '@chakra-ui/react';
import { mdiCreation } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useBoolean(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessage] = useState<Message[]>([
      {
        from: 'clippy',
        text: 'Hello! I\'m Clippy, your friendly Sitecore helper. How can I help you today?'
      }]
  );

  const requestBody = {
    question: question
  };

  const askQuestion = function() {
    setIsLoading.on();
    setMessage((old) => [...old, { from: 'user', text: question }]);
    fetch('/chat', {
      method: 'POST',
      body: JSON.stringify(requestBody)
    })
    .then((res) => res.json())
    .then((data:string) => {
      setIsLoading.off();
      setMessage((old) => [...old, {from: 'clippy', text: data}]);
    })
  }
  
  return (
    
    <Box maxW={'md'} m={10}>
      
      <Card>
        <CardHeader>
          <Heading as='h2'>Welcome to Sitecore Clippy</Heading>
          <Heading variant='section'>your friendly Sitecore helper!</Heading>
        </CardHeader>
        <CardBody height={'200px'}>
          <Messages messages={...messages} isLoading={isLoading} />
        </CardBody>
        
        <CardFooter gap={4}>
          <FormControl>
            <Input variant='outline' type='text' placeholder='What would you like to know?' value={question} id='question' onChange={(e) => setQuestion(e.target.value)} />
          </FormControl>
          <Button onClick={askQuestion} variant="ai" leftIcon={<Icon path={mdiCreation} size={1} />} marginTop={'auto'}>
            Ask
          </Button>
        </CardFooter>
      </Card>
      </Box>
  )
}