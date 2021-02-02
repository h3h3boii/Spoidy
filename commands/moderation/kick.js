module.exports = {
 name: "kick",
 code: `$kick[$mentioned[1]]
$channelSendMessage[$channelID;{title:**$username[$mentioned[1]]** has been Kicked by $username}{color:ffffff}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$onlyIf[$mentioned[1]!=$authorID;You can't Kick yourself ]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[kick;{title:Missing Permissions}{color:ffffff}{title:You don't have **Kick Members** permissions to use this command}]
$suppressErrors[❌ Something Went Wrong | Try Again Later]`
};
