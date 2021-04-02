module.exports = {
  name: "clear",
  code: `
$title[**$username** Has Cleared $message Messages]
$deletecommand
$color[$getVar[embedc]]
$deleteIn[3s]
$clear[$message]
$onlyPerms[managemessages;You require Manage Messages permission for this to work.]
$onlyIf[$isNumber[$message]==true;Thats not a number!]`
};
