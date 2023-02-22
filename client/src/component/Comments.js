export default function Comments({ content }) {
    return (
        <div>
            {content.comments.map(comment => {
                return (
                    <div key={comment.id} style={{ display: 'flex', alignItems: 'center', height: 40 }}>
                        <span style={{ color: 'green', marginTop: -10 }}>.</span>
                        <h4 style={{ padding: 5 }}>{comment.name} </h4>
                        <span>{comment.comment}</span>
                    </div>)
            })}
        </div>
    )
}