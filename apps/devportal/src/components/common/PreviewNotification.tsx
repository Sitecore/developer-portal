import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import { Message, Type } from 'ui/components/common/Message';

type PreviewNotificationProps = {
  enabled: boolean;
  page: string;
};

const PreviewNotification = ({ enabled, page }: PreviewNotificationProps): JSX.Element | null => {
  if (enabled) {
    return (
      <div className="fixed bottom-0 z-50 flex w-full text-center ">
        <Message type={Type.Alert} message="You are viewing the developer portal in preview mode">
          <SmallLinkButton text={'Exit preview'} href={`/api/preview?clear&redirect=${page}`} icon={'close'} className="small float-right" />
        </Message>
      </div>
    );
  }
  return null;
};
export default PreviewNotification;
