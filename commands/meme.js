module.exports = {
  name: "meme",
  code: `$title[$jsonRequest[https://meme-api.herokuapp.com/gimme;title]]
$color[ffffff]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]`
}