module.exports = {
  name: "checkwarns",
  aliases: ["warnings", "checkwarns"],
  code: `
$onlyIf[$mentioned[1]!=;You must mention someone.]

$onlyPerms[manageroles;You cannot use this command]

$argsCheck[>1;Please Mention Someone]

$title[Warnings For $username[$mentioned[1]]]

$color[ff00ff]

$description[**$username[$mentioned[1]]** Has $getUserVar[warn;$mentioned[1]] Warnings!]

$suppressErrors[You Must Mention Someone!]`
};
