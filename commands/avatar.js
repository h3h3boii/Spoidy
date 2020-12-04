module.exports = {
    name: "avatar",
    code: `$title[$username[$mentioned[1]]’s Avatar:]
$color[b200ff]
$argsCheck[>1;Please mention someone]
$image[$userAvatar[$mentioned[1]]]`
}