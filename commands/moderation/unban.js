module.exports = {
    name: "unban",
    code: `
$unban[$noMentionMessage]
$channelSendMessage[$channelID;{title:**$username[$noMentionMessage]** Has Been Unbanned By $username}{color: $getVar[embedc]}]
$argsCheck[>1;Please Provide User ID To Unban] 
$suppressErrors[I can't find this user ID or I don't have enough permissions] 
$onlyPerms[ban;You Are Missing Ban Members Permissions] `
}
