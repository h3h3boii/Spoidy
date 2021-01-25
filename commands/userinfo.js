module.exports = {
  name: "userinfo",
  aliases: ["whois", "ui", "userinfo"],
  code: `
$title[User Info Of **$username[$mentioned[1]]**]

$thumbnail[$userAvatar[$mentioned[1]]]

$addField[**Creation Date**:; $creationDate[$mentioned[1]]]

$addField[**Status**:; $status[$mentioned[1]]]

$addField[**Roles:**;$replaceText[$replaceText[$checkCondition[$userRoles[$findMember[$message];mentions]==];true;None];false;$userRoles[$findMember[$message];mentions]]]
$addField[**User ID**:; $mentioned[1]]

$addField[**Tag**:;<@$mentioned[1]>]

$argsCheck[>1;You Must Mention Someone To Get Their Info!]

$color[ffffff]`
};
