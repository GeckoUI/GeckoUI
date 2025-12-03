"use client";

import {
  Button,
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator
} from "@geckoui/geckoui";
import { ChevronDown, Copy, Download, Edit, Settings, Share, Trash } from "lucide-react";

export function BasicMenuExample() {
  return (
    <Menu>
      <MenuButton as={Button}>Options</MenuButton>
      <MenuItems anchor="bottom start" className="w-48">
        <MenuItem onClick={() => console.log("Edit")}>Edit</MenuItem>
        <MenuItem onClick={() => console.log("Duplicate")}>Duplicate</MenuItem>
        <MenuItem onClick={() => console.log("Delete")}>Delete</MenuItem>
      </MenuItems>
    </Menu>
  );
}

export function WithIconsExample() {
  return (
    <Menu>
      <MenuButton as={Button}>
        Actions
        <ChevronDown className="size-4" />
      </MenuButton>
      <MenuItems anchor="bottom start" className="w-48">
        <MenuItem onClick={() => console.log("Edit")}>
          <div className="flex items-center gap-3">
            <Edit className="size-4" />
            <span>Edit</span>
          </div>
        </MenuItem>
        <MenuItem onClick={() => console.log("Duplicate")}>
          <div className="flex items-center gap-3">
            <Copy className="size-4" />
            <span>Duplicate</span>
          </div>
        </MenuItem>
        <MenuItem onClick={() => console.log("Delete")}>
          <div className="flex items-center gap-3">
            <Trash className="size-4 text-red-600" />
            <span className="text-red-600">Delete</span>
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export function WithSectionsExample() {
  return (
    <Menu>
      <MenuButton as={Button}>More Actions</MenuButton>
      <MenuItems anchor="bottom start" className="w-56">
        <MenuSection>
          <MenuHeading className="text-xs font-semibold text-gray-500 uppercase">
            File Actions
          </MenuHeading>
          <MenuItem onClick={() => console.log("Download")}>
            <div className="flex items-center gap-3">
              <Download className="size-4" />
              <span>Download</span>
            </div>
          </MenuItem>
          <MenuItem onClick={() => console.log("Share")}>
            <div className="flex items-center gap-3">
              <Share className="size-4" />
              <span>Share</span>
            </div>
          </MenuItem>
        </MenuSection>

        <MenuSeparator className="my-2 border-t" />

        <MenuSection>
          <MenuHeading className="text-xs font-semibold text-gray-500 uppercase">
            Manage
          </MenuHeading>
          <MenuItem onClick={() => console.log("Settings")}>
            <div className="flex items-center gap-3">
              <Settings className="size-4" />
              <span>Settings</span>
            </div>
          </MenuItem>
          <MenuItem onClick={() => console.log("Delete")}>
            <div className="flex items-center gap-3">
              <Trash className="size-4 text-red-600" />
              <span className="text-red-600">Delete</span>
            </div>
          </MenuItem>
        </MenuSection>
      </MenuItems>
    </Menu>
  );
}

export function DisabledItemsExample() {
  return (
    <Menu>
      <MenuButton as={Button}>Actions</MenuButton>
      <MenuItems anchor="bottom start" className="w-48">
        <MenuItem onClick={() => console.log("Available")}>Available Action</MenuItem>
        <MenuItem disabled>
          {({ disabled }) => <span className={disabled ? "opacity-50" : ""}>Disabled Action</span>}
        </MenuItem>
        <MenuItem onClick={() => console.log("Another")}>Another Action</MenuItem>
      </MenuItems>
    </Menu>
  );
}

export function CustomButtonExample() {
  return (
    <Menu>
      <MenuButton as={Button} variant="filled">
        User Menu
      </MenuButton>
      <MenuItems anchor="bottom end" className="w-48 mt-2">
        <MenuItem onClick={() => console.log("Profile")}>Profile</MenuItem>
        <MenuItem onClick={() => console.log("Settings")}>Settings</MenuItem>
        <MenuSeparator className="my-1 border-t" />
        <MenuItem onClick={() => console.log("Logout")}>
          <span className="text-red-600">Logout</span>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export function AnchorPositionExample() {
  return (
    <div className="flex gap-4">
      <Menu>
        <MenuButton as={Button}>Top Start</MenuButton>
        <MenuItems anchor="top start" className="w-40 mb-2">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuItems>
      </Menu>

      <Menu>
        <MenuButton as={Button}>Bottom End</MenuButton>
        <MenuItems anchor="bottom end" className="w-40 mt-2">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
