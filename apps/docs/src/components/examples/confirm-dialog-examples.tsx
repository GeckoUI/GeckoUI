"use client";

import { Button, ConfirmDialog } from "@geckoui/geckoui";

export function BasicConfirmDialogExample() {
  const handleClick = () => {
    ConfirmDialog.show({
      title: "Confirm Action",
      content: "Are you sure you want to proceed?",
      onConfirm: () => {
        console.log("Confirmed");
      }
    });
  };

  return <Button onClick={handleClick}>Open Confirm Dialog</Button>;
}

export function DeleteConfirmDialogExample() {
  const handleDelete = () => {
    ConfirmDialog.show({
      title: "Delete Item",
      content: "Are you sure you want to delete this item? This action cannot be undone.",
      confirmButtonLabel: "Delete",
      cancelButtonLabel: "Cancel",
      onConfirm: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Item deleted");
      },
      onCancel: () => {
        console.log("Deletion cancelled");
      }
    });
  };

  return <Button onClick={handleDelete}>Delete Item</Button>;
}

export function RichContentConfirmDialogExample() {
  const handleClick = () => {
    ConfirmDialog.show({
      title: "Transfer Ownership",
      content: ({ dismiss }) => (
        <div className="space-y-4">
          <p>Transfer project ownership to another user?</p>
          <p className="text-sm text-muted-foreground">
            This will give them full control over this project.
          </p>
          <button onClick={dismiss} className="text-sm text-primary hover:underline">
            Cancel transfer
          </button>
        </div>
      ),
      confirmButtonLabel: "Transfer Now",
      cancelButtonLabel: "Go Back",
      titleClassName: "text-warning",
      contentClassName: "min-h-[100px]",
      onConfirm: () => {
        console.log("Transfer initiated");
      }
    });
  };

  return <Button onClick={handleClick}>Transfer Ownership</Button>;
}

export function CustomStylingConfirmDialogExample() {
  const handleClick = () => {
    ConfirmDialog.show({
      title: "Premium Feature",
      content: "This feature requires a premium subscription. Would you like to upgrade?",
      confirmButtonLabel: "Upgrade Now",
      cancelButtonLabel: "Maybe Later",
      className: "max-w-lg",
      titleClassName: "text-2xl font-bold text-purple-600",
      contentClassName: "text-gray-600 text-center py-6",
      onConfirm: () => {
        console.log("Redirecting to upgrade page");
      }
    });
  };

  return <Button onClick={handleClick}>Show Premium Dialog</Button>;
}
