"use client";

import { Switch } from "@geckoui/geckoui";
import { useState } from "react";

export function SwitchBasicExample() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center gap-3">
      <Switch checked={enabled} onChange={setEnabled} />
      <span>Enable notifications</span>
    </div>
  );
}

export function SwitchSizesExample() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch size="sm" checked={enabled} onChange={setEnabled} />
        <span>Small</span>
      </div>
      <div className="flex items-center gap-3">
        <Switch size="md" checked={enabled} onChange={setEnabled} />
        <span>Medium (default)</span>
      </div>
    </div>
  );
}

export function SwitchSettingsPanelExample() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    analytics: true
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Email Notifications</div>
          <div className="text-sm text-gray-500">Receive email updates</div>
        </div>
        <Switch
          checked={settings.notifications}
          onChange={(checked) => setSettings({ ...settings, notifications: checked })}
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Dark Mode</div>
          <div className="text-sm text-gray-500">Use dark theme</div>
        </div>
        <Switch
          checked={settings.darkMode}
          onChange={(checked) => setSettings({ ...settings, darkMode: checked })}
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Analytics</div>
          <div className="text-sm text-gray-500">Share anonymous usage data</div>
        </div>
        <Switch
          checked={settings.analytics}
          onChange={(checked) => setSettings({ ...settings, analytics: checked })}
        />
      </div>
    </div>
  );
}

export function SwitchDisabledExample() {
  return (
    <div className="flex gap-4">
      <Switch checked disabled />
      <Switch disabled />
    </div>
  );
}
