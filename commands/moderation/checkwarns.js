module.exports = {
  name: "checkwarns",
  aliases: ["warnings", "checkwarns"],
  code: `
$title[Warnings For $username[$mentioned[1]]]

$color[$getVar[embedc]]

$description[**$username[$mentioned[1]]** Has $getUserVar[warn;$mentioned[1]] Warnings!]

$onlyIf[$mentioned[1]!=;You must mention someone.]

$onlyPerms[manageroles;You cannot use this command]

$argsCheck[>1;Please Mention Someone]

$suppressErrors[You Must Mention Someone!]`
};
