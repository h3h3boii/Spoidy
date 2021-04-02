module.exports = {
  name: "clearwarns",
  aliases: ["clearwarns", "removewarns"],
  code: `$color[$getVar[embedc]]

$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];-1];$mentioned[1]]

$title[**$username[$mentioned[1]]**'s Warnings Has been removed by $username]

$onlyPerms[manageroles;You cannot use this command]$argsCheck[>1;Please Mention Someone!]

$suppressErrors[You Must Mention Someone!]`
}