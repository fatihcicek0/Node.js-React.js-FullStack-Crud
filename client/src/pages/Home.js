import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContents } from '../actions';
import'./style.css'
export default function Home() {
    const contents = useSelector(state => state.contentList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContents());
    },[]);
    
    return (
        <div style={{ width: 700, margin: 'auto'}}>
            {contents.map(content => {
                return (
                    <Link key={content.id} to={`/content/${content.id}/detail`} style={{textDecoration:'none'}}>
                        <div id='content-card' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h2 style={{color:'black'}}>{content.title}</h2>
                                <p style={{ color:'lightgray'}}>{content.name}</p>
                            </div>
                            <p>{content.content}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}