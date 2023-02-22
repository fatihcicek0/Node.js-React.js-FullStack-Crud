import { useSelector } from "react-redux";
import Form from "../component/Form";

export default function EditContent(){
    const content=useSelector(state=>state.contentDetail);
    
    return(
        <div>
            <Form data={content}/>
        </div>
    )
}