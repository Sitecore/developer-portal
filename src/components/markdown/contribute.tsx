import { PageInfo } from '@/src/lib/interfaces/page-info';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
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
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FieldValues, useForm } from 'react-hook-form';

type GithubContributionNoticeProps = {
  pageInfo: PageInfo;
};

const GithubContributionNotice = ({ pageInfo }: GithubContributionNoticeProps) => {
  const { asPath } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const URL = `https://developers.sitecore.com${asPath.split('#')[0]}`;
  const fileName = pageInfo.fileName.replace('https://github.com/sitecore/developer-portal/edit/main/data/', '');
  const issueLink = `https://github.com/sitecore/developer-portal/issues/new?title=&body=%0A%0A%5BEnter%20feedback%20here%5D%0A%0A%0A---%0A%23%23%23%23%20Document%20Details%0A%0A%E2%9A%A0%20*Do%20not%20edit%20this%20section.%20It%20is%20required%20for%20developer.sitecore.com%20%E2%9E%9F%20GitHub%20issue%20linking.*%0A%0A*%20Page%3A%20%5B${pageInfo.title}%5D(${URL})%0A*%20Source%3A%20%5B${fileName}%5D(${pageInfo.fileName})`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFeedback = async (data: FieldValues): Promise<void> => {
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          summary: data.feedbackSummary,
          description: data.feedbackDescription,
          name: data.name,
          email: data.email,
          //pathname: asPath,
          url: window.location.href,
        }),
      });
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  };

  // Only show this notice on pages that are in the Accelerate area
  if (!pageInfo?.area?.includes('accelerate')) {
    return (
      <Stack direction={'row'} justifyContent={'flex-end'}>
        <Link href={pageInfo.fileName}>
          <Text fontWeight={'medium'} fontSize={'xs'} color={'chakra-subtle-text'}>
            Edit this page on GitHub
          </Text>
        </Link>
        <Tooltip label="Report an issue or provide feedback">
          <Link href={issueLink}>
            <Text fontWeight={'medium'} fontSize={'xs'} color={'chakra-subtle-text'}>
              Feedback
            </Text>
          </Link>
        </Tooltip>
      </Stack>
    );
  }

  return (
    <>
      <Alert>
        <AlertIcon />
        <Stack align={'flex-start'}>
          <AlertTitle>Have a recipe suggestion?</AlertTitle>
          <AlertDescription>
            If you have a recipe suggestion to share, please <Link href="/contribute">create a pull request</Link> on the Github repository. If you have a question or feedback, please submit an issue.
          </AlertDescription>
          <Button onClick={onOpen}>Feedback</Button>
        </Stack>
      </Alert>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feedback or suggestions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Your comments, suggestions, and feedback help us improve the accelerate recipes.
            </Text>
            <Stack spacing="8">
              <FormControl isRequired id="name">
                <FormLabel>Name</FormLabel>
                <Input {...register('name', { required: true, min: 3 })} />
              </FormControl>
              <FormControl isRequired id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register('email', { required: true })} />
              </FormControl>
              <FormControl isRequired id="summary">
                <FormLabel>Summary</FormLabel>
                <Textarea placeholder="Please provide an abstract of the feedback" {...register('feedbackSummary', { required: true, min: 3 })} />
              </FormControl>
              <FormControl isRequired id="details">
                <FormLabel>More details</FormLabel>
                <Textarea placeholder="More details that you would like to share" {...register('feedbackDescription', { required: true, min: 3 })} />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit((data) => submitFeedback(data))}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GithubContributionNotice;
