import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const App = () => {
  const [education, setEducation] = useState("");
  const [passion, setPassion] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async () => {
    const chatCompletion = await openai.createChatCompletion(
      {
        model: "gpt-3.5-turbo",
        messages: [{role:"user",content:"Suggest SDGs that I can impact most based on my education, passion, and skills"}],
      },
      {
        timeout: 1000,
        headers: {
          "climate": "change",
        },
      }
      
    );

    const sdgs = Response.data.choices[0].message;

    // Display the suggested SDGs
    alert(sdgs);
  
  
  };

  return (
    <div>
      <h1>frontforumfocus</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Passion"
          value={passion}
          onChange={(e) => setPassion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
