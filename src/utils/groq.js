import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default groq;
