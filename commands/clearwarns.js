module.exports = {
  name: "clearwarns",
  code: `$color[b200ff]

$onlyPerms[manageroles;You cannot use this command]$argsCheck[>1;Please Mention Someone!]

$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];-1];$mentioned[1]]

$title[**$username[$mentioned[1]]**'s Has been removed by $username]`
}
