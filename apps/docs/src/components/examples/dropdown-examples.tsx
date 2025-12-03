"use client";

import { Button, Dropdown } from "@geckoui/geckoui";

export function BasicDropdownExample() {
  const items = [
    { label: "Edit", onClick: () => console.log("Edit clicked") },
    { label: "Duplicate", onClick: () => console.log("Duplicate clicked") },
    { label: "Delete", onClick: () => console.log("Delete clicked") }
  ];

  return <Dropdown items={items}>Actions</Dropdown>;
}

export function CustomButtonExample() {
  const items = [
    { label: "Profile", onClick: () => console.log("Profile") },
    { label: "Settings", onClick: () => console.log("Settings") },
    { label: "Logout", onClick: () => console.log("Logout") }
  ];

  return (
    <Dropdown
      items={items}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
      My Account
    </Dropdown>
  );
}

export function NoArrowIconExample() {
  const items = [
    { label: "Dashboard", onClick: () => console.log("Dashboard") },
    { label: "Analytics", onClick: () => console.log("Analytics") },
    { label: "Reports", onClick: () => console.log("Reports") }
  ];

  return (
    <Dropdown items={items} hideArrowIcon>
      Menu
    </Dropdown>
  );
}

export function CustomMenuStyleExample() {
  const items = [
    { label: "New File", onClick: () => console.log("New File") },
    { label: "New Folder", onClick: () => console.log("New Folder") },
    { label: "New Project", onClick: () => console.log("New Project") }
  ];

  return (
    <Dropdown items={items} menuClassName="min-w-[200px] shadow-lg border">
      Create New
    </Dropdown>
  );
}

export function CustomItemStyleExample() {
  const items = [
    {
      label: "Save",
      onClick: () => console.log("Save"),
      className: "text-green-600 font-medium"
    },
    {
      label: "Cancel",
      onClick: () => console.log("Cancel"),
      className: "text-gray-600"
    },
    {
      label: "Delete",
      onClick: () => console.log("Delete"),
      className: "text-red-600 font-medium"
    }
  ];

  return <Dropdown items={items}>Options</Dropdown>;
}

export function AnchorPositionExample() {
  const items = [
    { label: "Top Start", onClick: () => {} },
    { label: "Top", onClick: () => {} },
    { label: "Top End", onClick: () => {} }
  ];

  return (
    <div className="flex gap-4">
      <Dropdown items={items} anchor="top start">
        Top Start
      </Dropdown>
      <Dropdown items={items} anchor="bottom end">
        Bottom End
      </Dropdown>
    </div>
  );
}
