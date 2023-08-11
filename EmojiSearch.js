import React, { useState } from 'react'


const emojiData=[
    {
        id:1,
        symbol:"😃",
        name:"happy"
    },
    {
        id:2,
        symbol:"😇",
        name:"angel"
    },
    {
        id:3,
        symbol:"😍",
        name:"love"
    },
    {
        id:4,
        symbol:"🤪",
        name:"crazy"
    },
    {
        id:5,
        symbol:"🤣",
        name:"lol"
    },
    {
        id:6,
        symbol:"😎",
        name:"cool"
    },
    {
        id:7,
        symbol:"😭",
        name:"cry"
    },
    {
        id:8,
        symbol:"😔",
        name:"sad"
    },
    {
        id:9,
        symbol:"🥳",
        name:"party"
    },
    {
        id:10,
        symbol:"😚",
        name:"blush"
    },
    {
        id:11,
        symbol:"😤",
        name:"angry"
    },
    {
        id:12,
        symbol:"😡",
        name:"angry"
    },
    {
        id:13,
        symbol:"😱",
        name:"fear"
    },

];
function EmojiSearch() {
    const[searchEmoji,setSearchEmoji]=useState("");

    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji=emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    });
  return (
    <div className="Main">
        <h1>React Emoji App!!!</h1>
        <input type='text' placeholder='Search for an emoji...' value={searchEmoji} onChange={handleChange}/>
        <div className="Emoji">
            {
            showEmoji.map((emoji)=> emoji.symbol)
            }
</div>
        
        </div>
  )
}

export default EmojiSearch