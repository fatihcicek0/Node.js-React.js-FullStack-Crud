import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addContent, updateContent } from "../actions";
import './style.css'
export default function Form({ data }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [content, setContent] = useState({ title: '', content: '', name: '' });
    const list = useSelector(state => state.contentList);

    const onInputChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value })
    }

    const handleOnsubmit = (e) => {

        e.preventDefault();
        if (data) {
            dispatch(updateContent(data.id, content));
            navigate(`/content/${data.id}/detail`);
        } else {
            dispatch(addContent(content));
            navigate('/');
        }

    }
    
    useEffect(() => {
        if (data) {
            setContent({ title: data.title, content: data.content, name: data.name })
        }
    }, [data])
    return (
        <div>
            <form id="form-content" style={{ display: 'flex', flexDirection: 'column', width: 700, margin: 'auto', padding: 10 }}>
                <input placeholder="Name" name="name" value={content.name} onChange={onInputChange} style={{ marginTop: 10 }}></input>

                <input placeholder="Title" name="title" value={content.title} onChange={onInputChange} style={{ marginTop: 10 }}></input>

                <textarea rows="30" placeholder="Content" name="content" value={content.content} onChange={onInputChange} style={{ marginTop: 10 }}></textarea>

                <button type="submit" onClick={handleOnsubmit}>Ekle</button>
            </form>
        </div>
    )
}