import { Message, Type } from 'ui/components/common/Message';

type ChangelogDraftProps = {
  enabled: boolean;
};

const ChangelogDraft = ({ enabled }: ChangelogDraftProps): JSX.Element | null => {
  if (enabled) {
    return (
      <Message type={Type.Alert}>
        <p>Please note that you are in preview mode and could be viewing unpublished content</p>
      </Message>
    );
  }
  return null;
};
export default ChangelogDraft;
