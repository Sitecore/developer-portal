type KapaAssistantProps = {
  defaultQuestions?: string[]
}

const _defaultQuestions = [
  'How does a developer get started in SitecoreAI?',
  'How do I create a hierarchy of page elements in SitecoreAI?',
  'How do I start using the Sitecore Content SDK?',
  'How do I use AI-assisted visual search in Content Hub?',
]

export default function KapaAssistant({
  defaultQuestions = _defaultQuestions,
}: KapaAssistantProps): React.ReactNode {
  const defaultQuestionsString = defaultQuestions.join(',')

  return (
    <script
      async
      src="https://widget.kapa.ai/kapa-widget.bundle.js"
      data-website-id="f7e0c439-bda8-495c-9f2d-f162d845cf56"
      data-project-name="Sitecore Documentation"
      data-project-color="#6306B6"
      data-project-logo="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-sitecore"
      data-modal-disclaimer="This assistant uses AI to generate responses based on [Sitecore documentation](https://doc.sitecore.com). While it has access to official sources, answers may be incomplete or inaccurate and should not be considered official advice or support."
      data-modal-example-questions={defaultQuestionsString}
      data-user-analytics-fingerprint-enabled="true"
      data-button-hide="true"
      data-modal-title="Documentation Assistant"
      data-modal-border-radius="0px"
      data-modal-close-button-hide="false"
      data-modal-override-open-selector="button[data-action='openai']"
      data-modal-x-offset="0"
      data-modal-y-offset="7rem"
      data-modal-with-overlay="false"
      data-modal-full-screen-on-mobile="true"
      data-modal-inner-flex-direction="column"
      data-modal-inner-justify-content="end"
      data-modal-inner-max-width="500px"
      data-modal-inner-position-left="auto"
      data-modal-inner-position-right="0"
      data-modal-inner-position-bottom="0"
      data-modal-size="100vh"
      data-modal-lock-scroll="false"
      data-modal-header-bg-color="#fff"
      data-modal-z-index="99999"
      data-search-mode-enabled="false"
      data-font-family="var(--font-sans)"
      data-mcp-enabled="true"
      data-mcp-server-url="https://sitecore.mcp.kapa.ai"
      data-button-animation-enabled="false"
      data-button-box-shadow="none"
    ></script>
  )
}
