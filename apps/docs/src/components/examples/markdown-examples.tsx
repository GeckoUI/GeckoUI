"use client";

import { Alert, Button, Markdown, Spinner } from "@geckoui/geckoui";
import { useEffect, useState } from "react";

export function BasicMarkdownExample() {
  const content = `
## Welcome to Markdown

This is a **bold** statement and this is *italic*.

### Features

- GitHub Flavored Markdown (GFM)
- Tables, task lists, strikethrough
- Code syntax highlighting
- Math expressions

### Code Example

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
\`\`\`
  `;

  return (
    <div className="border rounded-md p-4">
      <Markdown className="prose prose-sm max-w-none">{content}</Markdown>
    </div>
  );
}

export function WithTableExample() {
  const content = `
## Product Comparison

| Feature | Basic | Pro | Enterprise |
|---------|-------|-----|------------|
| Users | 5 | 50 | Unlimited |
| Storage | 10GB | 100GB | 1TB |
| Support | Email | Priority | 24/7 Phone |
| Price | $9/mo | $49/mo | Custom |

### Notes

- All plans include SSL certificates
- **Pro** and **Enterprise** plans include API access
  `;

  return (
    <div className="border rounded-md p-4">
      <Markdown className="prose prose-sm max-w-none">{content}</Markdown>
    </div>
  );
}

export function WithTaskListExample() {
  const content = `
## Project Checklist

### Phase 1: Design
- [x] Wireframes
- [x] Design system
- [x] User flows

### Phase 2: Development
- [x] Backend API
- [x] Frontend components
- [ ] Integration tests
- [ ] E2E tests

### Phase 3: Launch
- [ ] Beta release
- [ ] Marketing campaign
- [ ] Production deployment
  `;

  return (
    <div className="border rounded-md p-4">
      <Markdown className="prose prose-sm max-w-none">{content}</Markdown>
    </div>
  );
}

export function AsyncRenderingExample() {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Simulate fetching markdown from API
    setTimeout(() => {
      const fetchedContent = `
## Server Response

This content was loaded asynchronously from a simulated API.

### Key Points

1. **Async rendering** prevents blocking
2. **Loading state** shows spinner
3. **Error handling** catches failures

> This is a blockquote demonstrating async content rendering.
      `;
      setContent(fetchedContent);
    }, 1500);
  }, []);

  return (
    <div className="border rounded-md p-4">
      <Markdown async renderPlaceholder={<Spinner />} className="prose prose-sm max-w-none">
        {content}
      </Markdown>
    </div>
  );
}

export function WithErrorHandlingExample() {
  const [showError, setShowError] = useState(false);

  const validContent = `
## Valid Content

This is **properly formatted** markdown.

- List item 1
- List item 2
  `;

  // Invalid markdown that might cause processing errors
  const invalidContent = "<<<INVALID MARKDOWN>>>";

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={() => setShowError(false)}>Valid Content</Button>
        <Button onClick={() => setShowError(true)}>Invalid Content</Button>
      </div>
      <div className="border rounded-md p-4">
        <Markdown
          renderError={({ message }) => <Alert variant="error" title={message} />}
          className="prose prose-sm max-w-none">
          {showError ? invalidContent : validContent}
        </Markdown>
      </div>
    </div>
  );
}

export function SanitizedContentExample() {
  const userContent = `
## User Generated Content

This content includes potentially dangerous HTML:

<script>alert('XSS')</script>

<img src="x" onerror="alert('XSS')" />

### Safe Content

This **markdown** is safe and will render correctly.

- Item 1
- Item 2
  `;

  return (
    <div className="space-y-4">
      <div className="border rounded-md p-4">
        <h4 className="text-sm font-semibold mb-2">Without Sanitization (Dangerous)</h4>
        <Markdown className="prose prose-sm max-w-none">{userContent}</Markdown>
      </div>
      <div className="border rounded-md p-4">
        <h4 className="text-sm font-semibold mb-2">With Sanitization (Safe)</h4>
        <Markdown sanitize className="prose prose-sm max-w-none">
          {userContent}
        </Markdown>
      </div>
    </div>
  );
}

export function CustomElementExample() {
  const content = `
## Article Content

This is rendered as an **article** element instead of a div.

### Benefits

- Better semantic HTML
- Improved accessibility
- SEO advantages

> Use the \`as\` prop to customize the wrapper element.
  `;

  return (
    <div className="border rounded-md p-4">
      <Markdown as="div" className="prose prose-sm max-w-none">
        {content}
      </Markdown>
    </div>
  );
}

export function RichContentExample() {
  const content = `
## Complete Feature Demo

### Typography

This is a paragraph with **bold text**, *italic text*, ~~strikethrough~~, and \`inline code\`.

### Lists

**Ordered:**
1. First item
2. Second item
   1. Nested item
   2. Another nested item
3. Third item

**Unordered:**
- Apple
- Orange
  - Mandarin
  - Tangerine
- Banana

### Blockquote

> "The best way to predict the future is to invent it."
> — Alan Kay

### Code Block

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  return users.find(u => u.id === id);
}
\`\`\`

### Links

Visit [Gecko UI](https://gecko.productionbug.com) for more information.

### Horizontal Rule

---

### Task List

- [x] Complete design
- [x] Implement features
- [ ] Write tests
- [ ] Deploy to production
  `;

  return (
    <div className="border rounded-md p-4">
      <Markdown className="prose prose-sm max-w-none">{content}</Markdown>
    </div>
  );
}
