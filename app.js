const readline = require('readline')
const { generateMeta, generateImage } = require('./controllers/openaiController')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


// rl.question('YouTube Video Title: \n', generateMeta)
rl.question('Describe your image: \n', generateImage)