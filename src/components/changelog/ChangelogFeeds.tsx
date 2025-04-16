import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
  useClipboard,
} from '@chakra-ui/react';
import { mdiCogOutline, mdiOpenInNew, mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { LinkButton } from '../links';

type ChangelogFeedsProps = {
  url: string;
};

export const ChangelogFeeds = ({ url }: ChangelogFeedsProps) => {
  const [feedType, setFeedType] = React.useState('1');
  const [titleFilter, setTitleFilter] = React.useState('');
  const { onCopy, value, setValue, hasCopied } = useClipboard('');

  const generateFeedUrl = React.useCallback(() => {
    const feed = feedType === '1' ? 'rss' : 'atom';
    const params = new URLSearchParams();

    if (titleFilter) {
      params.append('search', titleFilter);
    }

    setValue(`${url}/${feed}.xml${params.toString() ? `?${params.toString()}` : ''}`);
  }, [url, feedType, titleFilter, setValue]);

  React.useEffect(() => {
    generateFeedUrl();
  }, [feedType, titleFilter, generateFeedUrl]);

  return (
    <HStack>
      <LinkButton text={'RSS'} href={`${url}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
      <LinkButton text={'ATOM'} href={`${url}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />

      <Popover>
        <PopoverTrigger>
          <IconButton icon={<Icon path={mdiCogOutline} size={1} />} size="sm" aria-label={'Customize feed'} title="Customize feed" variant={'ghost'} />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="0" pt={4}>
            <Heading size={'sm'} fontWeight={'semibold'}>
              Customize feed
            </Heading>
          </PopoverHeader>
          <PopoverBody>
            <Stack spacing={4} direction="column">
              <Stack spacing={4} direction="row">
                <FormControl>
                  <FormLabel>Feed type</FormLabel>
                  <RadioGroup onChange={setFeedType} value={feedType}>
                    <Stack direction="row">
                      <Radio size={'md'} value="1">
                        RSS
                      </Radio>
                      <Radio size={'md'} value="2">
                        Atom
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Stack>
              <FormControl>
                <FormLabel>Title filter (optional)</FormLabel>
                <Input
                  size="sm"
                  value={titleFilter}
                  onChange={(e) => {
                    setTitleFilter(e.target.value);
                  }}
                  placeholder="Title must contain"
                />
              </FormControl>
            </Stack>
          </PopoverBody>
          <PopoverFooter border="0" display="flex" alignItems="center" justifyContent="space-between" pb={4}>
            <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
            <LinkButton text={'Preview'} href={value} target="_blank" variant={'ghost'} rightIcon={<Icon path={mdiOpenInNew} size={0.5} />} leftIcon={undefined} />
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </HStack>
  );
};
