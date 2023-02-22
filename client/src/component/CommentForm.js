import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../actions";
import './style.css';
export default function CommentForm({ contentId }) {
    const dispatch = useDispatch();
    const [data, setComment] = useState({ name: '', comment: '' });
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(contentId, data));
        setComment({ name: '', comment: '' });
    }
    return (
        <div>
            <form id="form-comment" onSubmit={handleOnSubmit}>
                <input placeholder="name" name='name' value={data.name}
                    onChange={(e) => setComment({ ...data, [e.target.name]: e.target.value })}></input>
                <textarea placeholder="comment" name='comment' value={data.comment}
                    onChange={(e) => setComment({ ...data, [e.target.name]: e.target.value })} ></textarea>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}