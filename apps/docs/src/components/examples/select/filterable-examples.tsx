"use client";

import { Select, SelectEmpty, SelectOption } from "@geckoui/geckoui";
import { useState } from "react";

export function InlineFilterExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select filterable="inline" value={value} onChange={setValue} placeholder="Type to filter...">
      <SelectOption value="afghanistan" label="Afghanistan" />
      <SelectOption value="albania" label="Albania" />
      <SelectOption value="algeria" label="Algeria" />
      <SelectOption value="argentina" label="Argentina" />
      <SelectOption value="australia" label="Australia" />
      <SelectOption value="austria" label="Austria" />
      <SelectOption value="bangladesh" label="Bangladesh" />
      <SelectOption value="belgium" label="Belgium" />
      <SelectOption value="brazil" label="Brazil" />
      <SelectOption value="canada" label="Canada" />
      <SelectOption value="china" label="China" />
      <SelectOption value="denmark" label="Denmark" />
      <SelectOption value="egypt" label="Egypt" />
      <SelectOption value="france" label="France" />
      <SelectOption value="germany" label="Germany" />
      <SelectOption value="india" label="India" />
      <SelectOption value="japan" label="Japan" />
      <SelectOption value="mexico" label="Mexico" />
      <SelectOption value="netherlands" label="Netherlands" />
      <SelectOption value="spain" label="Spain" />
      <SelectOption value="usa" label="United States" />
      <SelectOption value="uk" label="United Kingdom" />
    </Select>
  );
}

export function DropdownFilterExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      filterable="dropdown"
      value={value}
      onChange={setValue}
      placeholder="Select a framework...">
      <SelectOption value="react" label="React" />
      <SelectOption value="vue" label="Vue" />
      <SelectOption value="angular" label="Angular" />
      <SelectOption value="svelte" label="Svelte" />
      <SelectOption value="solid" label="Solid" />
      <SelectOption value="preact" label="Preact" />
      <SelectOption value="lit" label="Lit" />
      <SelectOption value="alpine" label="Alpine.js" />
      <SelectOption value="ember" label="Ember" />
      <SelectOption value="backbone" label="Backbone" />
    </Select>
  );
}

export function FilterableMultipleExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Select
      multiple
      filterable="inline"
      value={values}
      onChange={setValues}
      placeholder="Select skills..."
      closeMenuOnSelect={false}>
      <SelectOption value="typescript" label="TypeScript" />
      <SelectOption value="javascript" label="JavaScript" />
      <SelectOption value="python" label="Python" />
      <SelectOption value="java" label="Java" />
      <SelectOption value="csharp" label="C#" />
      <SelectOption value="go" label="Go" />
      <SelectOption value="rust" label="Rust" />
      <SelectOption value="php" label="PHP" />
      <SelectOption value="ruby" label="Ruby" />
      <SelectOption value="swift" label="Swift" />
      <SelectOption value="kotlin" label="Kotlin" />
    </Select>
  );
}

export function FilterWithEmptyStateExample() {
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
      <SelectOption value="watch" label="Watch" />
      <SelectOption value="headphones" label="Headphones" />
      <SelectEmpty>
        <div className="text-center py-4 text-gray-500">
          <p>No products found</p>
          <p className="text-sm mt-1">Try a different search term</p>
        </div>
      </SelectEmpty>
    </Select>
  );
}

export function DropdownFilterLargeListExample() {
  const [value, setValue] = useState<string | null>(null);

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Gray",
    "Cyan",
    "Magenta",
    "Lime",
    "Indigo",
    "Violet",
    "Turquoise",
    "Gold",
    "Silver",
    "Coral",
    "Salmon",
    "Peach",
    "Lavender",
    "Maroon",
    "Navy",
    "Teal",
    "Olive",
    "Aqua",
    "Fuchsia",
    "Crimson"
  ];

  return (
    <Select filterable="dropdown" value={value} onChange={setValue} placeholder="Pick a color...">
      {colors.map((color) => (
        <SelectOption key={color} value={color.toLowerCase()} label={color} />
      ))}
      <SelectEmpty>No colors match your search</SelectEmpty>
    </Select>
  );
}

export function CustomFilterContentExample() {
  const [value, setValue] = useState<string | null>(null);

  const users = [
    { id: "user1", name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: "user2", name: "Jane Smith", email: "jane@example.com", role: "Developer" },
    { id: "user3", name: "Bob Johnson", email: "bob@example.com", role: "Designer" },
    { id: "user4", name: "Alice Williams", email: "alice@example.com", role: "Manager" },
    { id: "user5", name: "Charlie Brown", email: "charlie@example.com", role: "Developer" }
  ];

  return (
    <Select filterable="dropdown" value={value} onChange={setValue} placeholder="Select a user...">
      {users.map((user) => (
        <SelectOption key={user.id} value={user.id} label={`${user.name} ${user.email}`}>
          {({ selected, focused }) => (
            <div className={`flex items-center justify-between ${focused ? "font-semibold" : ""}`}>
              <div>
                <div>{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">{user.role}</span>
            </div>
          )}
        </SelectOption>
      ))}
      <SelectEmpty>No users found</SelectEmpty>
    </Select>
  );
}
