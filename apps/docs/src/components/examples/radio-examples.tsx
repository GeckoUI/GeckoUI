"use client";

import { Radio } from "@geckoui/geckoui";
import { useState } from "react";

export function RadioBasicExample() {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="flex flex-col gap-2">
      {["option1", "option2", "option3"].map((option, index) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <Radio
            name="basic"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          Option {index + 1}
        </label>
      ))}
    </div>
  );
}

export function RadioWithDescriptionsExample() {
  const [selected, setSelected] = useState("free");

  const options = [
    { value: "free", title: "Free Plan", desc: "Perfect for trying out" },
    { value: "pro", title: "Pro Plan", desc: "$9/month - Most popular" },
    { value: "enterprise", title: "Enterprise", desc: "Contact us for pricing" }
  ];

  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
          <Radio
            name="plan"
            className="mt-2"
            value={option.value}
            checked={selected === option.value}
            onChange={(e) => setSelected(e.target.value)}
          />
          <div>
            <div className="flex items-center font-medium">
              <span>{option.title}</span>
            </div>
            <div className="text-sm text-gray-500">{option.desc}</div>
          </div>
        </label>
      ))}
    </div>
  );
}

export function RadioHorizontalExample() {
  const [size, setSize] = useState("M");
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="flex gap-4">
      {sizes.map((s) => (
        <label key={s} className="flex items-center gap-2 cursor-pointer">
          <Radio
            name="size"
            value={s}
            checked={size === s}
            onChange={(e) => setSize(e.target.value)}
          />
          <span>{s}</span>
        </label>
      ))}
    </div>
  );
}

export function RadioDisabledExample() {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2">
        <Radio name="status" value="enabled" defaultChecked />
        <span>Enabled</span>
      </label>
      <label className="flex items-center gap-2 opacity-50">
        <Radio name="status" value="disabled" disabled />
        <span>Disabled</span>
      </label>
    </div>
  );
}
