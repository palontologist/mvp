import { useState } from 'react';
import { suggestions } from "~/pages/api/trpc/suggest-sdgs";
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

  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await response(formData);
    if (!data || data.length === 0) {
      console.error('No suggestions found');
      return;
    }
    setSuggestions(data);
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
      {suggestions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Suggested SDGs:</h2>
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
