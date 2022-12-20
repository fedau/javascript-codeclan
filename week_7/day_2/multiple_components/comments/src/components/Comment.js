
const Comment = ({ author, children }) => {
    return (
        <>
        <h4>written by: "{author}"</h4>
        <p>{children}</p>
        </>
    )
}


export default Comment