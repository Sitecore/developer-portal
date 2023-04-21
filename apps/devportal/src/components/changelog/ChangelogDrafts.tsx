import SmallLinkButton from '@/../../packages/ui/components/buttons/SmallLinkButton';
import { useRouter } from 'next/router';
import { Message, Type } from 'ui/components/common/Message';

type ChangelogDraftProps = {
  enabled: boolean;
};

function exitPreviewMode() {
  alert('logout');
}

const ChangelogDraft = ({ enabled }: ChangelogDraftProps): JSX.Element | null => {
  const router = useRouter();
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
