"use client";

import { Button, Input, Select, SelectOption, SelectTrigger } from "@geckoui/geckoui";
import { X } from "lucide-react";
import { useState } from "react";

export function BasicTriggerExample() {
  const [values, setValues] = useState<number[]>([]);

  return (
    <Select multiple value={values} onChange={setValues}>
      <SelectTrigger<number> multiple>
        {({ keyword, selectedOptions, handleInputChange, handleKeyboardInteraction, openMenu }) => (
          <div>
            <Input
              placeholder="Search months..."
              value={keyword}
              onChange={handleInputChange}
              onKeyDown={handleKeyboardInteraction}
              onFocus={openMenu}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
            {selectedOptions.length > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {selectedOptions.map((option) => (
                  <span
                    key={option.value}
                    className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {option.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </SelectTrigger>
      {Array.from({ length: 12 }, (_, i) => (
        <SelectOption
          key={i}
          value={i}
          label={new Date(0, i).toLocaleString("default", { month: "long" })}
        />
      ))}
    </Select>
  );
}

export function ChipsWithRemoveExample() {
  const [values, setValues] = useState<string[]>(["react", "vue"]);

  return (
    <Select multiple value={values} onChange={setValues}>
      <SelectTrigger<number> multiple>
        {({
          keyword,
          selectedOptions,
          handleChange,
          handleInputChange,
          handleKeyboardInteraction,
          openMenu
        }) => (
          <div>
            <Input
              placeholder="Type to search..."
              value={keyword}
              onChange={handleInputChange}
              onKeyDown={handleKeyboardInteraction}
              onFocus={openMenu}
              autoComplete="off"
            />
            {selectedOptions.length > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {selectedOptions.map((option) => (
                  <span
                    key={option.value}
                    className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    {option.label}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(option.value);
                      }}
                      className="hover:bg-purple-200 rounded-full p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </SelectTrigger>
      <SelectOption value="react" label="React" />
      <SelectOption value="vue" label="Vue" />
      <SelectOption value="angular" label="Angular" />
      <SelectOption value="svelte" label="Svelte" />
      <SelectOption value="solid" label="Solid" />
    </Select>
  );
}

export function SingleSelectTriggerExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue}>
      <SelectTrigger>
        {({ keyword, selectedOptions, handleInputChange, handleKeyboardInteraction, openMenu }) => (
          <div className="space-y-2">
            <Input
              placeholder="Search frameworks..."
              value={keyword}
              onChange={handleInputChange}
              onKeyDown={handleKeyboardInteraction}
              onFocus={openMenu}
              autoComplete="off"
            />
            {selectedOptions && (
              <div className="p-2 bg-green-50 border border-green-200 rounded">
                <span className="text-sm text-green-800">
                  Selected: <strong>{selectedOptions.label}</strong>
                </span>
              </div>
            )}
          </div>
        )}
      </SelectTrigger>
      <SelectOption value="next" label="Next.js" />
      <SelectOption value="remix" label="Remix" />
      <SelectOption value="gatsby" label="Gatsby" />
      <SelectOption value="astro" label="Astro" />
    </Select>
  );
}

export function CustomStyledChipsExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Select multiple value={values} onChange={setValues}>
      <SelectTrigger<number> multiple>
        {({
          keyword,
          selectedOptions,
          handleChange,
          handleInputChange,
          handleKeyboardInteraction,
          openMenu
        }) => (
          <div className="space-y-3">
            <Input
              placeholder="Select programming languages..."
              value={keyword}
              onChange={handleInputChange}
              onKeyDown={handleKeyboardInteraction}
              onFocus={openMenu}
              autoComplete="off"
            />
            {selectedOptions.length > 0 && (
              <div>
                <div className="text-xs text-gray-500 mb-2">{selectedOptions.length} selected</div>
                <div className="flex flex-wrap gap-2">
                  {selectedOptions.map((option) => (
                    <Button
                      key={option.value}
                      type="button"
                      variant="outlined"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(option.value);
                      }}
                      className="gap-2">
                      <span>{option.label}</span>
                      <X className="w-3 h-3" />
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </SelectTrigger>
      <SelectOption value="typescript" label="TypeScript" />
      <SelectOption value="javascript" label="JavaScript" />
      <SelectOption value="python" label="Python" />
      <SelectOption value="java" label="Java" />
      <SelectOption value="go" label="Go" />
      <SelectOption value="rust" label="Rust" />
    </Select>
  );
}
