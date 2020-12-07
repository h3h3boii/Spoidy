module.exports = {
  name: "checkwarns",
  code: `
$onlyIf[$mentioned[1]!=;You must mention someone.]

$onlyPerms[manageroles;You cannot use this command]$argsCheck[>1;Please Mention Someone]

$title[Warnings For $username[$mentioned[1]]]

$color[b200ff]

$description[$username[$mentioned[1]] Has $getUserVar[warn;$mentioned[1]] Warnings!]`
};
