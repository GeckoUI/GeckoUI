"use client";

import { Select, SelectOption } from "@geckoui/geckoui";
import { useState } from "react";

export function GroupedOptionsExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue} placeholder="Select a framework...">
      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">Frontend</div>
      <SelectOption value="react" label="React" />
      <SelectOption value="vue" label="Vue" />
      <SelectOption value="angular" label="Angular" />
      <SelectOption value="svelte" label="Svelte" />

      <hr className="my-1 border-gray-200" />

      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">Backend</div>
      <SelectOption value="node" label="Node.js" />
      <SelectOption value="django" label="Django" />
      <SelectOption value="rails" label="Rails" />
      <SelectOption value="laravel" label="Laravel" />
    </Select>
  );
}

export function GroupedWithFilterableExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      filterable="inline"
      value={value}
      onChange={setValue}
      placeholder="Search frameworks...">
      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase bg-gray-50 dark:bg-neutral-800">
        Frontend Frameworks
      </div>
      <SelectOption value="react" label="React" />
      <SelectOption value="vue" label="Vue" />
      <SelectOption value="angular" label="Angular" />

      <hr className="my-1 border-gray-200" />

      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase bg-gray-50 dark:bg-neutral-800">
        Backend Frameworks
      </div>
      <SelectOption value="express" label="Express" />
      <SelectOption value="fastify" label="Fastify" />
      <SelectOption value="nest" label="NestJS" />
    </Select>
  );
}

export function WithHeaderAndFooterExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue} placeholder="Select a color...">
      <div className="px-3 py-2 border-b bg-gray-50 dark:bg-neutral-800">
        <p className="text-sm font-medium">Choose your favorite color</p>
        <p className="text-xs text-gray-500">This will be used as your theme</p>
      </div>

      <SelectOption value="blue" label="Blue" />
      <SelectOption value="green" label="Green" />
      <SelectOption value="purple" label="Purple" />
      <SelectOption value="red" label="Red" />

      <div className="px-3 py-2 border-t bg-gray-50 dark:bg-neutral-800">
        <a href="#" className="text-xs text-blue-600 hover:underline">
          Customize colors →
        </a>
      </div>
    </Select>
  );
}

export function ComplexGroupingExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue} placeholder="Select a programming language...">
      <div className="px-3 py-2 bg-blue-50">
        <p className="text-xs font-semibold text-blue-700">⚡ Popular</p>
      </div>
      <SelectOption value="javascript" label="JavaScript" />
      <SelectOption value="python" label="Python" />
      <SelectOption value="typescript" label="TypeScript" />

      <div className="px-3 py-2 bg-green-50 mt-1">
        <p className="text-xs font-semibold text-green-700">🚀 Trending</p>
      </div>
      <SelectOption value="rust" label="Rust" />
      <SelectOption value="go" label="Go" />
      <SelectOption value="kotlin" label="Kotlin" />

      <hr className="my-1 border-gray-200" />

      <div className="px-3 py-2">
        <p className="text-xs font-semibold text-gray-500">Others</p>
      </div>
      <SelectOption value="java" label="Java" />
      <SelectOption value="csharp" label="C#" />
      <SelectOption value="php" label="PHP" />
    </Select>
  );
}

export function StaticNoteExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue} placeholder="Select a plan...">
      <SelectOption value="free" label="Free Plan" />
      <SelectOption value="pro" label="Pro Plan - $29/mo" />
      <SelectOption value="enterprise" label="Enterprise Plan - $99/mo" />

      <div className="px-3 py-2 mt-2 bg-yellow-50 border border-yellow-200 rounded mx-2 mb-2">
        <p className="text-xs text-yellow-800">
          💡 <strong>Tip:</strong> Annual billing saves 20%
        </p>
      </div>
    </Select>
  );
}
