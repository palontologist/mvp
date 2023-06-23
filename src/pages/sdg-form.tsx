import React, { useState } from 'react';
import axios from 'axios';

const SDGForm = () => {
  const [education, setEducation] = useState('');
  const [passions, setPassions] = useState('');
  const [skills, setSkills] = useState('');
  const [sdgs, setSDGs] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `What are the SDGs one can impact most through their education: ${education}, passions: ${passions}, and skills: ${skills}?`,
      max_tokens: 60,
      n: 1,
      stop: ['\n']
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    setSDGs(response.data.choices[0].text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Education:
        <input type="text" value={education} onChange={(event) => setEducation(event.target.value)} />
      </label>
      <br />
      <label>
        Passions:
        <input type="text" value={passions} onChange={(event) => setPassions(event.target.value)} />
      </label>
      <br />
      <label>
        Skills:
        <input type="text" value={skills} onChange={(event) => setSkills(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <br />
      <label>
        SDGs:
        <textarea value={sdgs} readOnly />
      </label>
    </form>
  );
};

export default SDGForm;
