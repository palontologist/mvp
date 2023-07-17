/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export const getChatResponse = async (message: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const response = await openai.engine.createCompletion(
    {
      prompt: message,
      temperature: 0.7,
      maxTokens: 100,
    },
  );

  return response.choices[0].text;
};