import React, { useState } from "react"


const CommentForm = ({onCommentSubmit}) => {

    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const authorToSubmit = author.trim();
        const textToSubmit = text.trim();
            if (!authorToSubmit || !textToSubmit){
                return;
            }
            onCommentSubmit({
                author: authorToSubmit,
                text: textToSubmit
            })


        setAuthor("");
        setText("");

    }
return(
    <form onSubmit={handleFormSubmit}>
        <input  
        onChange={handleAuthorChange}
        value={author}
        type="text"
        placeholder="Your name"
        />
        <input
        onChange={handleTextChange}
        value={text}
        type="text"
        placeholder="say something"
        />
        <input type="submit" value="Post comment"/>
    </form>
)
}

export default CommentForm