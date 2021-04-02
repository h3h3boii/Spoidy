module.exports = ({
name: "unmute",
code: `
$takeRoles[$mentioned[1];$roleID[Muted]]
$channelSendMessage[$channelID;{title:**$username[$mentioned[1]]#$discriminator[$mentioned[1]]** has been unmuted by $username }{color:$getVar[embedc]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[manageroles;{title:Missing Permissions}{color:$getVar[embedc]}{description:You don't have **Manage Roles** permissions to use this command}]`
})