import Comment from "./comment";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../logics/firebase";

function CommentSection({comments}) {

    return (    
        <div>
            {comments && comments.map((val, index)=><Comment key={index} photo={val.photoURL} name={val.name} comment={val.comment}/>)}
        </div>
   );
}

export default CommentSection;