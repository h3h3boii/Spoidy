module.exports = {
name: "helpmusic",
aliases: ['hmusic'],
code:` $title[$customEmoji[smusic] Spoidy Music Commands]
$description[**$getServerVar[prefix]play <song>**
Plays A Song From YouTube

**$getServerVar[prefix]pause**
Pauses The Song/Queue

**$getServerVar[prefix]resume**
Resumes The Song/Queue

**$getServerVar[prefix]nowplaying**
Shows Information Of The Song

**$getServerVar[prefix]loop**
Loops The Queue

**$getServerVar[prefix]queue**
Shows The Songs In The Queue

**$getServerVar[prefix]skip**
Skips The Current Song

**$getServerVar[prefix]skipto <songnum>**
Skips To A Specified Song In The Queue

**$getServerVar[prefix]volume <volume>**
Change The Volume Of The Songs]

$color[$getVar[embedc]]`
}