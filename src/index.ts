import { OpenAI } from "@langchain/openai";

require("dotenv").config();

export const run = async () => {
  const model = new OpenAI();
  const res = await model.call(
    "阪神タイガースの現監督を教えてください。"
  );
  console.log(res);
};

run();