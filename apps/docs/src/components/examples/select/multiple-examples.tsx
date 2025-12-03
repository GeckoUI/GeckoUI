"use client";

import { Button, Select, SelectOption } from "@geckoui/geckoui";
import { useState } from "react";

export function BasicMultipleExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Select multiple value={values} onChange={setValues}>
      <SelectOption value="typescript" label="TypeScript" />
      <SelectOption value="javascript" label="JavaScript" />
      <SelectOption value="python" label="Python" />
      <SelectOption value="rust" label="Rust" />
      <SelectOption value="go" label="Go" />
    </Select>
  );
}

export function MultipleWithPlaceholderExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Select
      multiple
      value={values}
      onChange={setValues}
      placeholder="Select programming languages...">
      <SelectOption value="typescript" label="TypeScript" />
      <SelectOption value="javascript" label="JavaScript" />
      <SelectOption value="python" label="Python" />
      <SelectOption value="rust" label="Rust" />
      <SelectOption value="go" label="Go" />
      <SelectOption value="java" label="Java" />
    </Select>
  );
}

export function MultipleWithDefaultValuesExample() {
  const [values, setValues] = useState<string[]>(["typescript", "python"]);

  return (
    <Select multiple value={values} onChange={setValues}>
      <SelectOption value="typescript" label="TypeScript" />
      <SelectOption value="javascript" label="JavaScript" />
      <SelectOption value="python" label="Python" />
      <SelectOption value="rust" label="Rust" />
      <SelectOption value="go" label="Go" />
    </Select>
  );
}

export function MultipleCloseMenuOnSelectExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Select
      multiple
      value={values}
      onChange={setValues}
      closeMenuOnSelect
      placeholder="Menu stays open...">
      <SelectOption value="reading" label="Reading" />
      <SelectOption value="writing" label="Writing" />
      <SelectOption value="coding" label="Coding" />
      <SelectOption value="gaming" label="Gaming" />
      <SelectOption value="sports" label="Sports" />
    </Select>
  );
}

export function MultipleWithClearExample() {
  const [values, setValues] = useState<string[]>(["react", "vue"]);

  return (
    <div className="space-y-2">
      <Select multiple value={values} onChange={setValues}>
        <SelectOption value="react" label="React" />
        <SelectOption value="vue" label="Vue" />
        <SelectOption value="angular" label="Angular" />
        <SelectOption value="svelte" label="Svelte" />
      </Select>
      <Button
        variant="outlined"
        size="sm"
        onClick={() => setValues([])}
        disabled={values.length === 0}>
        Clear Selection ({values.length})
      </Button>
    </div>
  );
}

export function MultipleCustomContentExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Select multiple value={values} onChange={setValues} placeholder="Select team members...">
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
      <SelectOption value="user3" label="Bob Johnson">
        {({ selected, focused }) => (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm">
              BJ
            </div>
            <div className={focused ? "font-semibold" : ""}>
              <div>Bob Johnson</div>
              <div className="text-xs text-gray-500">bob@example.com</div>
            </div>
          </div>
        )}
      </SelectOption>
    </Select>
  );
}
