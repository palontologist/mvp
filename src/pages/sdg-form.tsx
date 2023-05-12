import { useState } from 'react';

type FormData = {
  education: string;
  skills: string;
  passions: string;
};

export default function SDGForm() {
  const [formData, setFormData] = useState<FormData>({
    education: '',
    skills: '',
    passions: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Call OpenAI API to get SDG suggestions
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY', // Replace with your OpenAI API key
      },
      body: JSON.stringify({
        prompt: `Suggest SDGs based on the following inputs: Education: ${formData.education}, Skills: ${formData.skills}, Passions: ${formData.passions}`,
        max_tokens: 5, // Number of SDGs to suggest
        temperature: 0.5, // Controls the creativity of the response (0.0 to 1.0)
      }),
    });

    const data = await response.json();
    const suggestions = data.choices[0].text.trim().split('\n');

    // Handle SDG suggestions here
    console.log(suggestions);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">SDG Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="education" className="block font-medium mb-2">
            Education
          </label>
          <input
            type="text"
            id="education"
            name="education"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="skills" className="block font-medium mb-2">
            Skills
          </label>
          <textarea
            id="skills"
            name="skills"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="passions" className="block font-medium mb-2">
            Passions
          </label>
          <textarea
            id="passions"
            name="passions"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.passions}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
