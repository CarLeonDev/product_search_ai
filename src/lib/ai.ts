import { createOpenAI } from "@ai-sdk/openai";

type OpenAIConfig = {
  /**
   * The base URL of the OpenAI API.
   */
  baseURL: string;
  /**
   * The API key for the OpenAI API.
   */
  apiKey: string;
  /**
   * The model to use for the OpenAI API.
   */
  model: string;
};

/**
 * Generates a model for the given base URL and API key.
 */
export const generateModel = ({baseURL, apiKey, model}: OpenAIConfig) => {
  const openai = createOpenAI({
    baseURL,
    apiKey,
  });

  return openai(model);
};