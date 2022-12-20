import React, {useState} from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';



const CommentBox = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "Dwight",
            text: "This is not a real farm",
        },
        {
            id: 2,
            author: "Kelly",
            text: "Hated it my boots got dirty",
        
        },
        {
            id: 3,
            author: "Michael",
            text: "Had a teambuilding experience here. Riding alpaccas is great wished I could take one home",
        
        },


        
    ]);

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now();
        const copyComments = [...comments, submittedComment]
        setComments(copyComments);



    }

    return (
        <>
        <h2> Read our raving reviews</h2>
        <CommentList comments={comments}/>

        <h2>Add a comment</h2>
        <CommentForm onCommentSubmit={addComment}/>
        </>
    )
}






export default CommentBox;