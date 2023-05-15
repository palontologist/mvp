import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";

const SDGForm = () => {
  const [formData, setFormData] = useState({ education: '', skills: '', passions: '' });
  const [suggestedSDGs, setSuggestedSDGs] = useState([]);

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const data = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Suggest SDGs based on education: ${formData.education}, skills: ${formData.skills}, passions: ${formData.passions}`,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6
      });
      if (data.choices && data.choices.length > 0) {
        setSuggestedSDGs(data.choices[0].text);
      } else {
        console.error('Unexpected API response:', data);
        setSuggestedSDGs([]);
      }
    } catch (error) {
      console.error('API request failed:', error);
      setSuggestedSDGs([]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Education:
        <input type="text" name="education" value={formData.education} onChange={handleChange} />
      </label>
      <label>
        Skills:
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </label>
      <label>
        Passions:
        <input type="text" name="passions" value={formData.passions} onChange={handleChange} />
      </label>
      <button type="submit">Suggest SDGs</button>
      <div>
        <h2>Suggested SDGs:</h2>
        <ul>
          {suggestedSDGs.map((sdg) => (
            <li key={sdg}>{sdg}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default SDGForm;
