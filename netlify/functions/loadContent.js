const { content } = require('./content.js')

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);
  if (!data.token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "failed", message: "Please enter a code at least 4 digits long!"})
    }
  }

  const loadedContent = loadContent(data.token)
  if (loadedContent != null) {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success", message: "Content Found!", content: loadedContent})
    }
  }
  return {
    statusCode: 401,
    body: JSON.stringify({ status: "failed", message: "That code does not match any token in my records, please enter a correct code! Capitals do NOT matter!"})
  }
}

function loadContent(token) {
  for (let i = 0; i < content.length; i++) {
    const currentItem = content[i]
    if (currentItem.token == token) {
      return currentItem
    }
  }
  return null
}