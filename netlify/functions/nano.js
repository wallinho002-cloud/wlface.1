exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      imageUrl: "https://via.placeholder.com/500"
    })
  }
}
