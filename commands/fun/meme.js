module.exports = {
  name: "meme",
  code: `$title[$jsonRequest[https://meme-api.herokuapp.com/gimme;title]]
$color[00FCFF]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]`
}