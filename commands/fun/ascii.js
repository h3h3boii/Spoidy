module.exports = {
    name: "ascii",
    code: `\`\`\`$jsonRequest[https://artii.herokuapp.com/make?text=$message]\`\`\`
    $onlyIf[$message!=;]`
}