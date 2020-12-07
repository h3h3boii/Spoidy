module.exports = {
  name: "userinfo",
  code: `$title[$username[$mentioned[1]]'s Information:]
$description[
**Username:** 
$username[$mentioned[1;yes]]

**User ID:** 
$mentioned[1;yes]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$thumbnail[$userAvatar[$mentioned[1;yes]]]] 
$color[#ff2052] 
`
};
