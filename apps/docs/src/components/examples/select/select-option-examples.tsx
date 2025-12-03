"use client";

import { Select, SelectOption } from "@geckoui/geckoui";
import { useState } from "react";

export function BasicOptionExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue}>
      <SelectOption value="react" label="React" />
      <SelectOption value="vue" label="Vue" />
      <SelectOption value="angular" label="Angular" />
    </Select>
  );
}

export function CustomContentExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue} placeholder="Select a user...">
      <SelectOption value="user1" label="John Doe">
        {({ selected, focused }) => (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className={focused ? "font-semibold" : ""}>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-gray-500">john@example.com</div>
            </div>
            {selected && <span className="ml-auto text-blue-500">✓</span>}
          </div>
        )}
      </SelectOption>
      <SelectOption value="user2" label="Jane Smith">
        {({ selected, focused }) => (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
              JS
            </div>
            <div className={focused ? "font-semibold" : ""}>
              <div className="font-medium">Jane Smith</div>
              <div className="text-sm text-gray-500">jane@example.com</div>
            </div>
            {selected && <span className="ml-auto text-green-500">✓</span>}
          </div>
        )}
      </SelectOption>
      <SelectOption value="user3" label="Bob Johnson">
        {({ selected, focused }) => (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
              BJ
            </div>
            <div className={focused ? "font-semibold" : ""}>
              <div className="font-medium">Bob Johnson</div>
              <div className="text-sm text-gray-500">bob@example.com</div>
            </div>
            {selected && <span className="ml-auto text-purple-500">✓</span>}
          </div>
        )}
      </SelectOption>
    </Select>
  );
}

export function HideCheckIconExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue} placeholder="Select an option...">
      <SelectOption value="opt1" label="Option 1" hideCheckIcon />
      <SelectOption value="opt2" label="Option 2" hideCheckIcon />
      <SelectOption value="opt3" label="Option 3" hideCheckIcon />
    </Select>
  );
}

export function DisabledOptionExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue}>
      <SelectOption value="free" label="Free Plan" />
      <SelectOption value="pro" label="Pro Plan" disabled />
      <SelectOption value="enterprise" label="Enterprise Plan" disabled />
    </Select>
  );
}

export function CustomClickExample() {
  const [value, setValue] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="space-y-2">
      <Select value={value} onChange={setValue} placeholder="Try the custom action...">
        <SelectOption value="normal" label="Normal Option" />
        <SelectOption
          value="custom"
          label="Custom Action (click me)"
          onClick={({ selectCurrentOption, closeMenu }) => {
            setClickCount((prev) => prev + 1);
            console.log("Custom action triggered!");
            selectCurrentOption();
            closeMenu();
          }}
        />
        <SelectOption value="another" label="Another Normal Option" />
      </Select>
      {clickCount > 0 && (
        <p className="text-sm text-gray-600">Custom action clicked {clickCount} times</p>
      )}
    </div>
  );
}

export function PreventDefaultExample() {
  const [value, setValue] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="space-y-2">
      <Select value={value} onChange={setValue} placeholder="Select an action...">
        <SelectOption value="view" label="View Item" />
        <SelectOption value="edit" label="Edit Item" />
        <SelectOption
          value="delete"
          label="Delete Item"
          onClick={({ preventDefault, selectCurrentOption, closeMenu }) => {
            preventDefault();

            if (window.confirm("Are you sure you want to delete this item?")) {
              setConfirmed(true);
              selectCurrentOption();
              closeMenu();
            }
          }}
        />
      </Select>
      {confirmed && value === "delete" && (
        <p className="text-sm text-red-600">Item deletion confirmed!</p>
      )}
    </div>
  );
}

export function VisibilityControlExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select value={value} onChange={setValue} placeholder="Select a status...">
      <SelectOption value="draft" label="Draft" visibility="default" />
      <SelectOption value="published" label="Published" visibility="default" />
      <SelectOption value="archived" label="Archived" visibility="default" />
      <hr />
      <SelectOption value="admin-only" label="Admin Only Status" visibility="always" />
    </Select>
  );
}

export function ComplexContentExample() {
  const [value, setValue] = useState<string | null>(null);

  const frameworks = [
    {
      id: "react",
      name: "React",
      description: "A JavaScript library for building user interfaces",
      popularity: "Very High",
      color: "bg-blue-500"
    },
    {
      id: "vue",
      name: "Vue",
      description: "The Progressive JavaScript Framework",
      popularity: "High",
      color: "bg-green-500"
    },
    {
      id: "angular",
      name: "Angular",
      description: "Platform for building mobile and desktop web applications",
      popularity: "Medium",
      color: "bg-red-500"
    },
    {
      id: "svelte",
      name: "Svelte",
      description: "Cybernetically enhanced web apps",
      popularity: "Growing",
      color: "bg-orange-500"
    }
  ];

  return (
    <Select value={value} onChange={setValue} placeholder="Choose a framework...">
      {frameworks.map((framework) => (
        <SelectOption key={framework.id} value={framework.id} label={framework.name}>
          {({ focused }) => (
            <div className="py-1">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${framework.color}`} />
                <span className={focused ? "font-semibold" : "font-medium"}>{framework.name}</span>
                <span className="ml-auto text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {framework.popularity}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 ml-5">{framework.description}</p>
            </div>
          )}
        </SelectOption>
      ))}
    </Select>
  );
}
