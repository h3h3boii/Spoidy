module.exports = ({
name: "riddle",
code: `
$title[$jsonRequest[https://no-api-key.com/api/v1/riddle;question]]
$description[Answer: ||**$jsonRequest[https://no-api-key.com/api/v1/riddle;answer]**||]
$color[ffffff]`
})