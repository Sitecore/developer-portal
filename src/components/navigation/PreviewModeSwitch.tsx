'use client';

import { useState } from 'react';
import { Switch } from '@components/ui/switch';
import { usePreview } from '@/src/context/PreviewContext';

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

  return (
    <div className="m-1.5">
      <Switch checked={switchValue} onCheckedChange={handleChange} title="Preview mode" />
    </div>
  );
};
