import React from "react";
import { Comment } from "antd";
import Style from "./CommentSection.module.css"


export default function CommentItem({
    author,
    comment
}){


    return(<>
    <Comment className={Style.comment}
    
    
    author={<p>{author}</p>}
    content={comment}
    
    />
    
    </>)
}