// In this, we are going to try calling GPT API https://rollbar.com/blog/chatgpt-api-with-javascript/
// This site may describe better how to do this thorughly https://javascript.plainenglish.io/beginners-guide-to-openai-s-gpt-3-5-turbo-model-45bdce194d19

async function runCompletion () {

    // import Config and OpenAI modules from .env package
    const { Configuration, OpenAIApi } = require("openai");
    require('dotenv').config()
    
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
    //model: "gpt-3.5-turbo",
    model: "text-davinci-003",
    prompt: "How are you today?",
    // role: "user", 
    // content: "Hello world",
    max_tokens:40
    });

    const generatedText = completion.data.choices[0].text;

    // Attention: this works on terminal:
    // console.log(generatedText);

    // Trying to turn into string for an alert
    //alert("some words") // this line works by itself, but NOT when above code exists
    //const data = `${completion.data.choices[0].text}`
    // const completionData = completion.data.choices[0].text;
    // const jsonString = JSON.stringify(completionData);
    alert(generatedText);

}



runCompletion();


// // import Config and OpenAI modules from .env package
// const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config()

// const configuration = new Configuration({
// apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);


// async function runCompletion () {

//     const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "How are you today?",
//     max_tokens:40
//     });
//     console.log(completion.data.choices[0].text);
// }

// runCompletion();