import { usePreview } from '@/src/context/PreviewContext';
import { Switch, Tooltip } from '@chakra-ui/react';

export const PreviewModeSwitch = () => {
  const { isPreviewEnabled, isPreview, togglePreview } = usePreview();

  if (!isPreviewEnabled) {
    return null;
  }

  return (
    <Tooltip label="Preview mode" aria-label="Preview mode">
      <Switch m={1.5} onChange={togglePreview} title="Preview mode" defaultChecked={isPreview} />
    </Tooltip>
  );
};
