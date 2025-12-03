"use client";

import { Select, SelectOption } from "@geckoui/geckoui";
import { useState } from "react";

export function BasicSelectExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue}>
      <SelectOption value="react" label="React" />
      <SelectOption value="vue" label="Vue" />
      <SelectOption value="angular" label="Angular" />
    </Select>
  );
}

export function MultipleSelectExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Select multiple value={values} onChange={setValues}>
      <SelectOption value="typescript" label="TypeScript" />
      <SelectOption value="javascript" label="JavaScript" />
      <SelectOption value="python" label="Python" />
      <SelectOption value="rust" label="Rust" />
    </Select>
  );
}

export function WithPlaceholderExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue} placeholder="Choose a framework...">
      <SelectOption value="next" label="Next.js" />
      <SelectOption value="remix" label="Remix" />
      <SelectOption value="gatsby" label="Gatsby" />
    </Select>
  );
}

export function CustomOptionContentExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue}>
      <SelectOption value="user1" label="John Doe">
        {({ selected, focused }) => (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
              JD
            </div>
            <div className={focused ? "font-semibold" : ""}>
              <div>John Doe</div>
              <div className="text-xs text-gray-500">john@example.com</div>
            </div>
          </div>
        )}
      </SelectOption>
      <SelectOption value="user2" label="Jane Smith">
        {({ selected, focused }) => (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
              JS
            </div>
            <div className={focused ? "font-semibold" : ""}>
              <div>Jane Smith</div>
              <div className="text-xs text-gray-500">jane@example.com</div>
            </div>
          </div>
        )}
      </SelectOption>
    </Select>
  );
}

export function DisabledOptionsExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue}>
      <SelectOption value="available" label="Available Option" />
      <SelectOption value="disabled" label="Disabled Option" disabled />
      <SelectOption value="another" label="Another Available" />
    </Select>
  );
}

export function HideCheckIconExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue}>
      <SelectOption value="opt1" label="Option 1" hideCheckIcon />
      <SelectOption value="opt2" label="Option 2" hideCheckIcon />
      <SelectOption value="opt3" label="Option 3" hideCheckIcon />
    </Select>
  );
}

export function DisabledSelectExample() {
  return (
    <Select value="selected" onChange={() => {}} disabled>
      <SelectOption value="selected" label="Selected Option" />
      <SelectOption value="other" label="Other Option" />
    </Select>
  );
}

export function CustomClickBehaviorExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue}>
      <SelectOption value="normal" label="Normal Option" />
      <SelectOption
        value="custom"
        label="Custom Action"
        onClick={({ selectCurrentOption, closeMenu }) => {
          console.log("Custom action triggered");
          selectCurrentOption();
          closeMenu();
        }}
      />
    </Select>
  );
}

export function PlacementOptionsExample() {
  const [value1, setValue1] = useState<string | null>(null);
  const [value2, setValue2] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <Select value={value1} onChange={setValue1} placement="top-start">
        <SelectOption value="1" label="Opens upward" />
        <SelectOption value="2" label="Option 2" />
      </Select>

      <Select value={value2} onChange={setValue2} placement="bottom-end">
        <SelectOption value="1" label="Aligns to right" />
        <SelectOption value="2" label="Option 2" />
      </Select>
    </div>
  );
}
