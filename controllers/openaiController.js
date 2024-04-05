const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

// Example implementation of generateMeta
const generateMeta = async (req, res) => {
  const { title } = req.body;
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

  const tags = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      role: 'user',
      content: `come up with 10 keywords for a YouTube video called ${title}`
    }],
    max_tokens: 100
  })

  res.json({
    description: description.choices[0].message,
    tags: tags.choices[0].message
  });
}

// Example implementation of generateImage
const generateImage = async (req, res) => {
  const image = await openai.images.generate({
    prompt: req.body.prompt,
    size: "512x512",
    n: 1,
  });
  res.json({
    url: image.data[0].url
  })
}

module.exports = { generateMeta, generateImage };
