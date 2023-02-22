import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteContent, getContentById } from "../actions";
import DeleteIcon from '@mui/icons-material/Delete';
import CommentForm from "../component/CommentForm";
import Comments from "../component/Comments";
import './style.css'
export default function ContentDetail() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const { id } = useParams();
    const content = useSelector(state => state.contentDetail);
    
    const handleOnClick=(id)=>{
      dispatch(deleteContent(id));
      navigate('/');
    }

    useEffect(() => {
        dispatch(getContentById(id))
    }, [])
    return (
        <div style={{ width: 800, margin: 'auto' }}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
                    <h1>{content.title}</h1>
                    <div style={{display:'flex',height:30}}>
                        <Link to={`/content/${id}/edit`} id='btn-update'>update</Link>
                        <button onClick={()=>handleOnClick(id)} id='btn-delete' >
                            <DeleteIcon style={{  color: 'white'}}></DeleteIcon>
                        </button>
                    </div>
                </div>
                <p style={{textAlign:'justify'}}>{content.content}</p>
            </div>
            <Comments content={content} />
            <CommentForm contentId={id} />
        </div>
    )
}