// In this, we are going to try calling GPT API
OPENAI_API_KEY='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'
    // import Config and OpenAI modules from .env package
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function runCompletion () {

    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "How are you today?",
    max_tokens:40
    });
    console.log(completion.data.choices[0].text);
}

runCompletion();

// async function runCompletion () {

//     // import Config and OpenAI modules from .env package
//     const { Configuration, OpenAIApi } = require("openai");
//     require('dotenv').config()

//     const configuration = new Configuration({
//     apiKey: process.env.ZulFi6L1FH8RhpmPXcQOT3BlbkFJQOVVoj1tkZAEEUiJtrLX,
//     });
//     const openai = new OpenAIApi(configuration);

//     const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "How are you today?",
//     max_tokens:40
//     });
//     alert(completion.data.choices[0].text);
// }

// runCompletion();