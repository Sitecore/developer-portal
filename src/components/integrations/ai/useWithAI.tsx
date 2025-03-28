import { Button, ButtonGroup, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Stack, Tooltip, useClipboard, useToast } from '@chakra-ui/react';
import { PageInfo } from '@lib/interfaces/page-info';
import { mdiCheck, mdiContentCopy, mdiDownload, mdiLanguageMarkdownOutline } from '@mdi/js';
import SvgLogo from '../../ui/logos/SvgLogo';

export type useWithAIProps = {
  pageInfo: PageInfo;
  productFile?: string;
};

export const useWithAI = ({ pageInfo, productFile }: useWithAIProps) => {
  const editUrl = 'https://github.com/sitecore/developer-portal/edit';
  const rawUrl = 'https://raw.githubusercontent.com/Sitecore/developer-portal/refs/heads';
  const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';
  const urltoParse = pageInfo.fileName.replace(editUrl, rawUrl);

  const getChatGPTURL = (overrideUrl?: string) => {
    const urlToUse = overrideUrl || urltoParse;

    if (urlToUse.includes('https://')) {
      return `https://chatgpt.com/?hints=search&q=Read+${encodeURIComponent(urlToUse)}+so+I+can+ask+questions+about+it`;
    }

    return `https://chatgpt.com/?hints=search&q=Read+${encodeURIComponent(publicUrl + urlToUse)}+so+I+can+ask+questions+about+it`;
  };

  const { onCopy, hasCopied } = useClipboard(pageInfo.content || '');
  const toast = useToast();

  return (
    <Stack gap={4}>
      <Heading variant={'section'} size={'sm'} mb={{ base: 0, md: 2 }}>
        Use with AI
      </Heading>
      <ButtonGroup variant="toggle" size="sm" layerStyle="toggleGroup" isAttached shadow={'sm'}>
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
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={
                <Icon layerStyle="menuButtonIcon">
                  <path d={mdiLanguageMarkdownOutline} />
                </Icon>
              }
            >
              Markdown
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => window.open(urltoParse, '_blank')} gap={4}>
                <Icon boxSize={4}>
                  <path d={mdiDownload} />
                </Icon>
                This file
              </MenuItem>
              <MenuItem gap={4}>
                <Icon boxSize={4}>
                  <path d={mdiDownload} />
                </Icon>
                <a href={`${publicUrl}/dataset-${productFile}.md`} download>
                  Complete cookbook
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Button
            leftIcon={
              <Icon boxSize={4}>
                <path d={mdiLanguageMarkdownOutline} />
              </Icon>
            }
            onClick={() => window.open(urltoParse, '_blank')}
          >
            Markdown
          </Button> */}
        </Tooltip>
        <Tooltip label="Ask questions about this page">
          {/* <Button leftIcon={<SvgLogo logo={'chatgpt'} height={20} />} as={Button} onClick={() => window.open(chatGPTURL, '_blank')}>
            ChatGPT
          </Button> */}
          <Menu>
            <MenuButton as={Button} leftIcon={<SvgLogo logo={'chatgpt'} height={20} />}>
              ChatGPT
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => window.open(getChatGPTURL(), '_blank')} gap={4}>
                <SvgLogo logo={'chatgpt'} height={20} />
                This recipe
              </MenuItem>
              <MenuItem gap={4}>
                <SvgLogo logo={'chatgpt'} height={20} />
                <a href={getChatGPTURL(`/dataset-${productFile}.md`)} download>
                  Complete cookbook
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Tooltip>
      </ButtonGroup>

      {/* <ButtonGroup isAttached>
        <Button
          leftIcon={<SvgLogo logo={'chatgpt'} height={20} />}
          onClick={() => {
            onCopy(), toast({ title: 'Link copied to clipboard', status: 'info', duration: 2000 });
          }}
        >
          Markdown
        </Button>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <Icon layerStyle="menuButtonIcon">
                <path d={mdiChevronDown} />
              </Icon>
            }
          >
            Markdown
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => window.open(urltoParse, '_blank')} gap={4}>
              <Icon boxSize={4}>
                <path d={mdiDownload} />
              </Icon>
              This file
            </MenuItem>
            <MenuItem gap={4}>
              <Icon boxSize={4}>
                <path d={mdiDownload} />
              </Icon>
              <a href={`/dataset-${productFile}.md`} download>
                Complete cookbook
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </ButtonGroup> */}
    </Stack>
  );
};

export default useWithAI;
