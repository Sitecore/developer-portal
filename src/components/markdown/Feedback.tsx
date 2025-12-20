import {
  Alert,
  AlertIcon,
  Button,
  ButtonProps,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FeedbackProps = ButtonProps & {
  text?: string;
  projectId: string;
  issueTypeId: string;
  product?: string[];
};

type formData = {
  name: string;
  email: string;
  summary: string;
  description: string;
};

const Feedback = ({ text = 'Feedback', projectId, issueTypeId, product, ...rest }: FeedbackProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submitError, setSubmitError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<formData>();

  const closeModal: () => void = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<formData> = async (values) => {
    if (isSubmitting) return;

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          summary: values.summary,
          description: values.description,
          name: values.name,
          email: values.email,
          product: product,
          url: window.location.href,
          projectId: projectId,
          issueTypeId: issueTypeId,
        }),
      });

      if (!response.ok) {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  };

  return (
    <>
      <Button {...rest} onClick={onOpen} variant="link">
        {text}
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'2xl'} motionPreset="scale">
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Feedback or suggestions</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing="8" hidden={isSubmitSuccessful && !submitError}>
                <Text fontWeight="bold" mb="1rem">
                  Your comments, suggestions, and feedback help us improve the accelerate recipes.
                </Text>
                {submitError && (
                  <Alert status="error" mb={4}>
                    <AlertIcon />
                    Apologies, we encountered an issue with submitting the feedback. Please try again later.
                  </Alert>
                )}
                <FormControl isRequired id="name" isInvalid={!!errors.name}>
                  <FormLabel>Name</FormLabel>
                  <Input {...register('name', { required: true, min: 3 })} disabled={isSubmitting} placeholder="Your name" />
                  <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired id="email" isInvalid={!!errors.email}>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    placeholder="Your email address"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address',
                      },
                    })}
                    disabled={isSubmitting}
                  />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired id="summary" isInvalid={!!errors.summary}>
                  <FormLabel>Summary / Title</FormLabel>
                  <Input placeholder="Please provide an abstract of the feedback" {...register('summary', { required: 'Please provide a summary', min: 3 })} disabled={isSubmitting} />
                  <FormErrorMessage>{errors.summary && errors.summary.message}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired id="details" isInvalid={!!errors.description}>
                  <FormLabel>More details</FormLabel>
                  <Textarea rows={8} placeholder="More details that you would like to share" {...register('description', { required: true, min: 3 })} disabled={isSubmitting} />
                  <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
                </FormControl>

                <HStack alignContent={'center'} justifyContent={'flex-end'}></HStack>
              </Stack>

              <Center layerStyle="section.main" h="full" hidden={!isSubmitSuccessful || submitError}>
                <Stack align="center" textAlign="center" spacing="6" maxW="sm">
                  <Text fontWeight="bold">Thank you for your feedback!</Text>
                  <Text>Your feedback has been submitted successfully.</Text>
                  <Button
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Close
                  </Button>
                </Stack>
              </Center>
            </ModalBody>
            <ModalFooter hidden={isSubmitSuccessful && !submitError}>
              <Button onClick={onClose} variant="outline">
                Close
              </Button>
              <Button isLoading={isSubmitting} type="submit" hidden={submitError}>
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Feedback;
