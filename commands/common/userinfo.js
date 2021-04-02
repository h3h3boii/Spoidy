module.exports = {
  name: "userinfo",
  aliases: ["whois", "ui", "userinfo"],
  code: `
$title[User Info Of **$username[$findUser[$message]]**]

$thumbnail[$userAvatar[$findUser[$message]]]

$addField[**Creation Date**:; $creationDate[$findUser[$message]]]

$addField[**Key Perms:**;$userPerms[$findUser[$message];,]]

$addField[**Roles:**;$replaceText[$replaceText[$checkCondition[$userRoles[$findUser[$message];mentions]==];true;None];false;$userRoles[$findUser[$message];mentions]]]

$addField[**User ID**:; $findUser[$message]]

$addField[**Tag**:;<@$findUser[$message]>]

$color[$getVar[embedc]]`
};
