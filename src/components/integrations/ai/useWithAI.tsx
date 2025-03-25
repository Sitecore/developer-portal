import { Button, ButtonGroup, Heading, Icon, Stack, Tooltip, useClipboard, useToast } from '@chakra-ui/react';
import { PageInfo } from '@lib/interfaces/page-info';
import { mdiCheck, mdiContentCopy, mdiLanguageMarkdownOutline } from '@mdi/js';
import SvgLogo from '../../ui/logos/SvgLogo';

export type useWithAIProps = {
  pageInfo: PageInfo;
};

export const useWithAI = ({ pageInfo }: useWithAIProps) => {
  const editUrl = 'https://github.com/sitecore/developer-portal/edit';
  const rawUrl = 'https://raw.githubusercontent.com/Sitecore/developer-portal/refs/heads';

  const urltoParse = pageInfo.fileName.replace(editUrl, rawUrl);
  const chatGPTURL = `https://chatgpt.com/?hints=search&q=Read+${encodeURIComponent(urltoParse)}+so+I+can+ask+questions+about+it`;

  const { onCopy, hasCopied } = useClipboard(pageInfo.content || '');
  // const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();

  return (
    <Stack gap={4}>
      <Heading variant={'section'} size={'sm'} mb={{ base: 0, md: 2 }}>
        Use with AI
      </Heading>
      <ButtonGroup variant={'toggle'} isAttached>
        <Tooltip label="Ask questions about this page">
          <Button leftIcon={<SvgLogo logo={'chatgpt'} height={20} />} as={Button} onClick={() => window.open(chatGPTURL, '_blank')}>
            ChatGPT
          </Button>
        </Tooltip>
        <Tooltip label="Copy page as markdown for LLMs">
          <Button
            leftIcon={
              hasCopied ? (
                <Icon boxSize={4}>
                  <path d={mdiCheck} />
                </Icon>
              ) : (
                <Icon boxSize={4}>
                  <path d={mdiContentCopy} />
                </Icon>
              )
            }
            onClick={() => {
              onCopy(), toast({ title: 'Link copied to clipboard', status: 'info', duration: 2000 });
            }}
          >
            Copy page
          </Button>
        </Tooltip>
        <Tooltip label="View as Markdown">
          <Button
            leftIcon={
              <Icon boxSize={4}>
                <path d={mdiLanguageMarkdownOutline} />
              </Icon>
            }
            onClick={() => window.open(urltoParse, '_blank')}
          >
            Markdown
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Stack>
  );
};

export default useWithAI;
