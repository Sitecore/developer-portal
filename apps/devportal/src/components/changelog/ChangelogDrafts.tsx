import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import { Message, Type } from 'ui/components/common/Message';

type ChangelogDraftProps = {
  enabled: boolean;
};

const ChangelogDraft = ({ enabled }: ChangelogDraftProps): JSX.Element | null => {
  if (enabled) {
    return (
      <Message type={Type.Alert} message="Please note that you are in preview mode and could be viewing unpublished content">
        <SmallLinkButton text={'Exit preview'} href={`/api/preview?clear&redirect=/changelog`} icon={'close'} className="small float-right" />
      </Message>
    );
  }
  return null;
};
export default ChangelogDraft;
