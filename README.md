# AI-Powered Product Search

An intelligent product search application that uses AI to recommend products based on user needs. The application provides a modern, responsive interface with real-time product recommendations.

<a href="https://github.com/user-attachments/assets/9707a203-3eb5-4aae-827a-c1448f652589">
  <img src="https://github.com/user-attachments/assets/9707a203-3eb5-4aae-827a-c1448f652589" width="500" height="245" />
</a>

<a href="https://github.com/user-attachments/assets/15462015-7e67-4ef8-8fc9-88d1617c5888">
  <img src="https://github.com/user-attachments/assets/15462015-7e67-4ef8-8fc9-88d1617c5888" width="500" height="245" />
</a>

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **UI Components**: Custom components with Tailwind CSS
- **AI Integration**: OpenAI-compatible API support (Groq, DeepSeek, etc.)
- **State Management**: React Hooks
- **Form Handling**: React Forms
- **Styling**: 
  - Tailwind CSS
  - Custom UI components
  - Responsive design

## Structure and Architecture

```
src/
├── app/                # Next.js app router
│   ├── api/            # API routes
│   │   └── products/   # Product search endpoint
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/         # Reusable components
│   └── ui/             # Base UI components
├── constants/          # Constants and configuration
│   └── env.ts          # Environment variables
├── hoc/                # Higher-order components
├── lib/                # Utility functions
│   ├── ai.ts           # AI model configuration
│   └── utils.ts        # Helper functions
├── schemas/            # TypeScript schemas
├── services/           # Business logic
├── __mocks__/          # Mock files
└── __tests__/          # Test files

```

The application follows a modern, component-based architecture:

1. **Presentation Layer**
  - Layout and page for home
  - UI and custom components
  - Higher-order components
  - Responsive design using TailwindCSS

2. **Business Logic Layer**
  - Services for AI interactions
  - Data transformation and validation
  - Error handling

3. **Data Layer**
  - TypeScript schemas for type safety
  - API integration
  - Environment configuration

## AI Prompt Engineering

The application uses a carefully crafted system prompt for product recommendations:

```typescript
const system = `
You are a helpful assistant that recommends products based on the user's needs.
Rules:
- Must respond in the same language as the user's needs.
- The products must be related to the user's needs.
- If the user's needs are not related to products, you should return an empty array.
- Must return between ${length} and ${Math.min(length * 2, 10)} products.
- Do not repeat information between the products.
- Omit the words that are not related to the products.
- All the fields are required.
- Return id in UUID format.
- The name of the product must include the brand and model.
- The description of the product must be highlighting the features, benefits, and unique selling points.
- The description represents marketing material of the product.
- The price of the product must be in USD.
- The characteristics of the product must be more than 5.
- Each product can have different characteristics between them.
- The characteristics must be a list of features, specifications, benefits, or unique selling points.
- Each characteristic contains a emoji, key and a value.
  - The emoji must be consistent and coherent between products. If one product has a emoji for a characteristic, all the products must have this emoji for the same characteristic. And each characteristic has different emoji between them.
  - The key must be contained in one or two words.
  - The value must be a description of the characteristic.
`;
```

## Features

- **Real-time Product Search**: Instant AI-powered product recommendations
- **Responsive Design**: Works on all device sizes
- **Streaming Responses**: Real-time updates as products are generated
- **Error Handling**: Graceful error states and retry functionality
- **Modern UI**: Clean, intuitive interface with loading states
- **Type Safety**: Full TypeScript support with strict typing

## Getting Started

1. Clone the repository
2. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  # or
  pnpm install
  ```

3. Create a `.env` file with your API credentials(following `.env.example`):
  ```
  OPENAI_BASE_URL="your-api-base-url"
  OPENAI_API_KEY="your-api-key"
  MODEL="your-model-name"
  ```

4. Run the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser
