import { usePreview } from '@/src/context/PreviewContext';
import { Switch } from '@chakra-ui/react';
import { useState } from 'react';

export const PreviewModeSwitch = () => {
  const { isPreviewModeEnabled, isPreview, togglePreview } = usePreview();
  const [switchValue, setSwitchValue] = useState<boolean>(isPreview);

  const handleChange = async () => {
    setSwitchValue(!switchValue);
    togglePreview();
  };

  if (!isPreviewModeEnabled) {
    return null;
  }

  return <Switch m={1.5} colorScheme="orange" onChange={handleChange} title="Preview mode" defaultChecked={switchValue} />;
};
