module.exports = ({
name: "mute",
code: `
$giveRoles[$mentioned[1];$roleID[Muted]]
$channelSendMessage[$channelID;{title:**$username[$mentioned[1]]#$discriminator[$mentioned[1]]** has been muted by $username }{color:b200ff}]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[manageroles;{title:Missing Permissions}{color:b200ff}{description:You don't have **Manage Roles** permissions to use this command}]`
})