module.exports = {
  name: "clear",
  code: `$onlyPerms[managemessages;You require Manage Messages permission for this to work.]
$title[**$username** Has Cleared $message Messages]
$deleteCommand
$color[ffffff]
$deleteIn[3s]
$clear[$message]
$onlyIf[$isNumber[$message]==true;Thats not a number!]`
};
