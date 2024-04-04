const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

const generateMeta = async (title) => {
  const description = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Come up with a description for a YouTube video called ${title}`
      }
    ],
    max_tokens: 100,
    model: "gpt-3.5-turbo",
  });


  console.log(description.choices[0].message)


  const tags = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      role: 'user',
      content: `come up with 10 keywords for a YouTube video called ${title}`
    }],
    max_tokens: 100
  })

  console.log(tags.choices[0].message)

}

module.exports = { generateMeta }

const generateImage = async (desc) => {
  const image = await openai.images.generate({
    prompt: desc,
    size: "512x512",
    n: 1,
  });


  console.log(image.data)
}

module.exports = { generateImage }