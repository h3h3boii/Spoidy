module.exports = {
  name: "tempmute",
  code: `$channelSendMessage[$channelID;<@$mentioned[1]> you are now unmuted!]
$takeRoles[$mentioned[1];$roleID[Muted]]
$wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]]
$channelSendMessage[$channelID;{title:**$username[$mentioned[1]]#$discriminator[$mentioned[1]]** has been sucesfully muted for $replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;undefined time];false;$noMentionMessage[1]]}{color:$getVar[embedc]}]
$giveRoles[$mentioned[1];$roleID[Muted]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$onlyIf[$mentioned[1]!=$authorID;You can't mute yourself]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[managemessages;{title:Missing Permissions}{color:$getVar[embedc]}{description:You don't have \`MANAGE_MESSAGES\` permissions to use this command}]
`
};
