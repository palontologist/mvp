import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";

const SDGForm = () => {
  const [formData, setFormData] = useState({ education: '', skills: '', passions: '' });
  const [suggestedSDGs, setSuggestedSDGs] = useState([]);

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setSuggestedSDGs(data.choices[0].text);
  };

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
          {suggestedSDGs.map((sdg: string) => (
            <li key={sdg}>{sdg}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default SDGForm;
