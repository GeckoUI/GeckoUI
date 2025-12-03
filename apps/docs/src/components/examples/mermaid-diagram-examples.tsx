"use client";

import { Alert, Button, MermaidDiagram, Spinner } from "@geckoui/geckoui";
import { useState } from "react";

export function FlowchartExample() {
  const diagram = `
flowchart LR
    Start[User Login] --> Auth{Authenticated?}
    Auth -->|Yes| Dashboard[Show Dashboard]
    Auth -->|No| Login[Login Page]
    Login --> Auth
  `;

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={<Spinner />}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function SequenceDiagramExample() {
  const diagram = `
sequenceDiagram
    participant Client
    participant API
    participant Database
    Client->>API: Request Data
    API->>Database: Query
    Database-->>API: Results
    API-->>Client: Response
  `;

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={<Spinner />}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function ClassDiagramExample() {
  const diagram = `
classDiagram
    class User {
        +String email
        +String name
        +login()
        +logout()
    }
    class Admin {
        +String role
        +manageUsers()
        +viewAnalytics()
    }
    class Customer {
        +String membership
        +makePurchase()
    }
    User <|-- Admin
    User <|-- Customer
  `;

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={<Spinner />}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function StateDiagramExample() {
  const diagram = `
stateDiagram-v2
    [*] --> Idle
    Idle --> Loading: Start Request
    Loading --> Success: Data Received
    Loading --> Error: Request Failed
    Success --> Idle: Reset
    Error --> Idle: Retry
    Success --> [*]
  `;

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={<Spinner />}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function GanttChartExample() {
  const diagram = `
gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    section Design
        Wireframes       :done, des1, 2024-01-01, 2024-01-10
        UI Design        :done, des2, 2024-01-08, 2024-01-20
    section Development
        Backend API      :active, dev1, 2024-01-15, 2024-02-15
        Frontend         :dev2, 2024-01-25, 2024-03-01
    section Testing
        QA Testing       :test1, 2024-02-20, 2024-03-10
        User Testing     :test2, 2024-03-05, 2024-03-15
  `;

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={<Spinner />}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function PieChartExample() {
  const diagram = `
pie title Technology Stack Usage
    "React" : 45
    "Vue" : 25
    "Angular" : 15
    "Svelte" : 10
    "Other" : 5
  `;

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={<Spinner />}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function GitGraphExample() {
  const diagram = `
gitGraph
    commit id: "Initial commit"
    branch develop
    checkout develop
    commit id: "Add feature A"
    commit id: "Add feature B"
    checkout main
    merge develop
    commit id: "Release v1.0"
    branch hotfix
    checkout hotfix
    commit id: "Fix critical bug"
    checkout main
    merge hotfix
  `;

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={<Spinner />}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function ERDiagramExample() {
  const diagram = `
erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : "ordered in"
    USER {
        int id PK
        string name
        string email
    }
    ORDER {
        int id PK
        int user_id FK
        date created_at
    }
    ORDER_ITEM {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
    }
    PRODUCT {
        int id PK
        string name
        decimal price
    }
  `;

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={<Spinner />}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function WithLoadingExample() {
  const diagram = `
flowchart TB
    A[Start] --> B{Decision}
    B -->|Option 1| C[Process C]
    B -->|Option 2| D[Process D]
    C --> E[End]
    D --> E
  `;

  const customLoader = (
    <div className="flex items-center justify-center p-8">
      <Spinner />
      <span className="ml-2 text-gray-600">Loading diagram...</span>
    </div>
  );

  return (
    <div className="border rounded-md p-4">
      <MermaidDiagram placeholder={customLoader}>{diagram}</MermaidDiagram>
    </div>
  );
}

export function WithErrorHandlingExample() {
  const [showError, setShowError] = useState(false);

  const validDiagram = `
flowchart LR
    A[Valid] --> B[Diagram]
  `;

  const invalidDiagram = `
flowchart LR
    A[Invalid --> B[Missing bracket
  `;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setShowError(false)}
          className="px-3 py-1 text-sm border rounded-md bg-gray-50 hover:bg-gray-100">
          Valid Diagram
        </button>
        <button
          onClick={() => setShowError(true)}
          className="px-3 py-1 text-sm border rounded-md bg-gray-50 hover:bg-gray-100">
          Invalid Diagram
        </button>
      </div>
      <div className="border rounded-md p-4">
        <MermaidDiagram
          placeholder={<Spinner />}
          renderError={({ message }) => <Alert title={message} variant="error" />}>
          {showError ? invalidDiagram : validDiagram}
        </MermaidDiagram>
      </div>
    </div>
  );
}

export function InteractiveDiagramExample() {
  const diagrams = {
    flowchart: `
flowchart LR
    A[Input] --> B[Process]
    B --> C[Output]
    `,
    sequence: `
sequenceDiagram
    Alice->>Bob: Hello!
    Bob->>Alice: Hi there!
    `,
    pie: `
pie title Sales by Region
    "North" : 30
    "South" : 25
    "East" : 25
    "West" : 20
    `
  };

  const [selected, setSelected] = useState<keyof typeof diagrams>("flowchart");

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          onClick={() => setSelected("flowchart")}
          variant={selected === "flowchart" ? "filled" : "outlined"}>
          Flowchart
        </Button>
        <Button
          onClick={() => setSelected("sequence")}
          variant={selected === "sequence" ? "filled" : "outlined"}>
          Sequence
        </Button>
        <Button
          onClick={() => setSelected("pie")}
          variant={selected === "pie" ? "filled" : "outlined"}>
          Pie Chart
        </Button>
      </div>
      <div className="border rounded-md p-4">
        <MermaidDiagram placeholder={<Spinner />}>{diagrams[selected]}</MermaidDiagram>
      </div>
    </div>
  );
}
