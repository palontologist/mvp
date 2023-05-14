import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type SuggestSDGsResponse = {
  choices: {
    text: string;
    index: number;
    logprobs: null;
    finish_reason: string;
  }[];
};

const suggestSDGsHandler = async (req: NextApiRequest, res: NextApiResponse<SuggestSDGsResponse>) => {
  const { education, skills, passions } = req.body;
  const prompt = `Based on your education in ${education}, skills in ${skills}, and passions in ${passions}, suggest SDGs that you can impact the most.`;

  try {
    const response = await axios.post<SuggestSDGsResponse>('https://api.openai.com/v1/completions', {
      prompt,
      max_tokens: 50,
      n: 1,
      stop: '\n',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

export default suggestSDGsHandler;
