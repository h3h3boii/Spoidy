module.exports = {
  name: "ban",
  code: `
$ban[$mentioned[1]]
$channelSendMessage[$channelID;{title:**$username[$mentioned[1]]** Was Banned From The Server By $username}{color:ffffff}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$onlyIf[$mentioned[1]!=$authorID;You can't ban yourself]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[ban;{title:Missing Permissions}{color:ffffff}{description:You don't have Ban permissions to use this command}]`
};
