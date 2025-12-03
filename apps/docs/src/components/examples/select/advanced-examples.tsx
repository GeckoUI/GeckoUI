"use client";

import { Button, Select, SelectConsumer, SelectOption } from "@geckoui/geckoui";
import { useState } from "react";

export function SelectConsumerExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <Select value={value} filterable onChange={setValue} placeholder="Select a framework...">
        <SelectConsumer
          render={({ open, keyword, options }) => (
            <div className="p-3 border rounded-md bg-gray-50 dark:bg-neutral-800 text-sm mb-2">
              <p>
                <strong>Status:</strong> {open ? "Open" : "Closed"}
              </p>
              <p>
                <strong>Filter:</strong> {keyword || "(none)"}
              </p>
              <p>
                <strong>Total Options:</strong> {options.length}
              </p>
            </div>
          )}
        />
        <SelectOption value="react" label="React" />
        <SelectOption value="vue" label="Vue" />
        <SelectOption value="angular" label="Angular" />
        <SelectOption value="svelte" label="Svelte" />
      </Select>
    </div>
  );
}

export function ProgrammaticControlExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <Select value={value} onChange={setValue} placeholder="Select a language...">
        <SelectConsumer
          render={({ openMenu, closeMenu, open }) => (
            <div className="flex gap-2 mb-2">
              <Button size="sm" variant="outlined" onClick={openMenu} disabled={open}>
                Open Menu
              </Button>
              <Button size="sm" variant="outlined" onClick={closeMenu} disabled={!open}>
                Close Menu
              </Button>
              <Button
                size="sm"
                variant="outlined"
                onClick={() => {
                  setValue("python");
                  closeMenu();
                }}>
                Select Python
              </Button>
            </div>
          )}
        />
        <SelectOption value="typescript" label="TypeScript" />
        <SelectOption value="javascript" label="JavaScript" />
        <SelectOption value="python" label="Python" />
        <SelectOption value="go" label="Go" />
      </Select>
    </div>
  );
}

export function ConditionalRenderingExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div className="space-y-4">
      <Select multiple value={values} onChange={setValues} placeholder="Select tags...">
        <SelectConsumer
          render={({ keyword, options, isSelected }) => {
            const selectedCount = options.filter((opt) => isSelected(opt.value)).length;
            const filteredCount = keyword
              ? options.filter((opt) => opt.label.toLowerCase().includes(keyword.toLowerCase()))
                  .length
              : options.length;

            return (
              <div className="p-2 border-b mb-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Selected: {selectedCount}</span>
                  {keyword && <span>Matching: {filteredCount}</span>}
                </div>
              </div>
            );
          }}
        />
        <SelectOption value="bug" label="Bug" />
        <SelectOption value="feature" label="Feature" />
        <SelectOption value="docs" label="Documentation" />
        <SelectOption value="design" label="Design" />
        <SelectOption value="refactor" label="Refactor" />
      </Select>
    </div>
  );
}

export function CustomActionsExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <Select value={value} onChange={setValue} placeholder="Select a status...">
        <SelectConsumer<string>
          render={({ handleChange, closeMenu, value: currentValue }) => (
            <div className="p-2 border-t mt-2 flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  handleChange("active" as never);
                  closeMenu();
                }}>
                Quick: Active
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  handleChange("inactive" as never);
                  closeMenu();
                }}>
                Quick: Inactive
              </Button>
              {currentValue && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setValue(null);
                    closeMenu();
                  }}>
                  Clear
                </Button>
              )}
            </div>
          )}
        />
        <SelectOption value="active" label="Active" />
        <SelectOption value="inactive" label="Inactive" />
        <SelectOption value="pending" label="Pending" />
        <SelectOption value="archived" label="Archived" />
      </Select>
    </div>
  );
}

export function DebugViewExample() {
  const [values, setValues] = useState<string[]>(["opt1"]);

  return (
    <div className="space-y-4">
      <Select multiple value={values} onChange={setValues} closeMenuOnSelect={false}>
        <SelectOption value="opt1" label="Option 1" />
        <SelectOption value="opt2" label="Option 2" />
        <SelectOption value="opt3" label="Option 3" />
      </Select>

      <div className="p-4 border rounded-md bg-gray-50 dark:bg-neutral-800">
        <h4 className="font-semibold mb-2 text-sm">Debug Info:</h4>
        <Select multiple value={values} onChange={setValues}>
          <SelectConsumer
            render={({ open, keyword, value, multiple, options, focusedOption }) => (
              <pre className="text-xs bg-white p-3 rounded border overflow-auto">
                {JSON.stringify(
                  {
                    open,
                    keyword,
                    value,
                    multiple,
                    totalOptions: options.length,
                    focusedOption: focusedOption?.label || null
                  },
                  null,
                  2
                )}
              </pre>
            )}
          />
        </Select>
      </div>
    </div>
  );
}
