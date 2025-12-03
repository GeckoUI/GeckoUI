"use client";

import { Select, SelectEmpty, SelectOption } from "@geckoui/geckoui";
import { useState } from "react";

export function BasicEmptyExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select filterable="dropdown" value={value} onChange={setValue} placeholder="Search...">
      <SelectOption value="apple" label="Apple" />
      <SelectOption value="banana" label="Banana" />
      <SelectOption value="cherry" label="Cherry" />
      <SelectEmpty />
    </Select>
  );
}

export function CustomMessageExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      filterable="dropdown"
      value={value}
      onChange={setValue}
      placeholder="Search products...">
      <SelectOption value="laptop" label="Laptop" />
      <SelectOption value="phone" label="Phone" />
      <SelectOption value="tablet" label="Tablet" />
      <SelectEmpty>No products found. Try a different search term.</SelectEmpty>
    </Select>
  );
}

export function StyledEmptyExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      filterable="dropdown"
      value={value}
      onChange={setValue}
      placeholder="Search frameworks...">
      <SelectOption value="react" label="React" />
      <SelectOption value="vue" label="Vue" />
      <SelectOption value="angular" label="Angular" />
      <SelectEmpty className="text-center py-8 text-gray-500">
        <div className="text-4xl mb-2">🔍</div>
        <p className="font-medium">No frameworks found</p>
        <p className="text-sm mt-1">Try searching for something else</p>
      </SelectEmpty>
    </Select>
  );
}

export function EmptyWithActionExample() {
  const [value, setValue] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-4">
      <Select filterable="dropdown" value={value} onChange={setValue} placeholder="Select a tag...">
        <SelectOption value="bug" label="Bug" />
        <SelectOption value="feature" label="Feature" />
        <SelectOption value="docs" label="Documentation" />
        <SelectEmpty>
          <div className="text-center py-6">
            <p className="text-gray-600 mb-3">No matching tags found</p>
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              + Create new tag
            </button>
          </div>
        </SelectEmpty>
      </Select>

      {showForm && (
        <div className="p-4 border rounded-md bg-gray-50 dark:bg-neutral-800">
          <p className="text-sm text-gray-600">Tag creation form would appear here...</p>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="text-sm text-gray-500 mt-2">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export function MultipleEmptyStatesExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      filterable="dropdown"
      value={value}
      onChange={setValue}
      placeholder="Search countries...">
      {/* Popular countries */}
      <SelectOption value="us" label="United States" />
      <SelectOption value="uk" label="United Kingdom" />
      <SelectOption value="ca" label="Canada" />

      {/* Always visible divider */}
      <hr />

      {/* Help text shown when empty */}
      <SelectEmpty>
        <div className="px-4 py-3 text-sm text-gray-600">
          <p className="font-medium mb-1">Can't find your country?</p>
          <p>Try searching with different spelling or abbreviation</p>
        </div>
      </SelectEmpty>
    </Select>
  );
}

export function EmptyWithImageExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select filterable="dropdown" value={value} onChange={setValue} placeholder="Search users...">
      <SelectOption value="user1" label="John Doe" />
      <SelectOption value="user2" label="Jane Smith" />
      <SelectEmpty>
        <div className="flex flex-col items-center justify-center py-8 px-4">
          <div className="w-16 h-16 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-3">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-gray-700 font-medium">No users found</p>
          <p className="text-gray-500 text-sm mt-1">Try adjusting your search</p>
        </div>
      </SelectEmpty>
    </Select>
  );
}
