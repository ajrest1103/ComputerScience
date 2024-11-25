import React, {useState} from "react";

import {postDataToServer, deleteDataFromServer} from "../server-requests"

export default function Like({likeId, postId, token}){
    
    const [stateLikeId, setStateLikeId]= useState(likeId);

    async function createLike(){
        const sendData = {
            post_id: postId, 
        };
        console.log("adding a like");

        const responseData = await postDataToServer(
            token, 
            "/api/likes/", 
            sendData
        );
        console.log(responseData);
        setStateLikeId(responseData.id);
    }
    async function deleteLike(){
        const url = '/api/likes/'+stateLikeId;
        console.log("deleting like");
        const responseData = await deleteDataFromServer(
            token, 
            url
        );
        console.log(responseData);
        setStateLikeId(null);
    }

    console.log(likeId);
    
    if (stateLikeId){
         return (
               <button aria-label="Unbookmark this post" aria-checked="true" role="toggle" onClick={deleteLike}>
                    <i className="fas text-red-500 fa-heart"></i>
                 </button>);
         } else {
             return (
                 <button aria-label="Bookmark this post" aria-checked="false" role="toggle" onClick={createLike}>
                    <i className="far fa-heart"></i>
                </button>
             );
         }
}