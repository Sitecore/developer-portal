import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import { Message, Type } from 'ui/components/common/Message';

type PreviewNotificationProps = {
  enabled: boolean;
  page: string;
};

const PreviewNotification = ({ enabled, page }: PreviewNotificationProps): JSX.Element | null => {
  if (enabled) {
    return (
      <div className="fixed bottom-0 z-50 flex w-full bg-orange-100 text-left dark:bg-teal-700 ">
        <div className="mx-auto md:my-4 md:w-1/2">
          <Message type={Type.Alert} message="You are viewing the developer portal in preview mode">
            <SmallLinkButton text={'Exit preview'} href={`/api/preview?clear&redirect=${page}`} icon={'close'} className="small float-right" />
          </Message>
        </div>
      </div>
    );
  }
  return null;
};
export default PreviewNotification;
