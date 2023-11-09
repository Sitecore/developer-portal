import { usePreview } from '@/src/context/PreviewContext';
import { Switch } from '@chakra-ui/react';

export const PreviewModeSwitch = () => {
  const { isPreviewEnabled, isPreview, togglePreview } = usePreview();

  const handleChange = async () => {
    togglePreview();
  };

  if (!isPreviewEnabled) {
    return null;
  }

  return <Switch m={1.5} onChange={handleChange} title="Preview mode" defaultChecked={isPreview} />;
};
