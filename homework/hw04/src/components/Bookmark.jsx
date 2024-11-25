import React, {useState} from "react";

import {postDataToServer, deleteDataFromServer} from "../server-requests"

export default function Bookmark({token, bookmarkId, postId}){
    
    const [stateBookmarkId, setStateBookmarkId] = useState(bookmarkId);

    async function createBookmark(){
        const sendData = {
            post_id: postId,
        };
        console.log("creating a bookmark");

        const responseData = await postDataToServer(
            token,
            "/api/bookmarks/",
            sendData
            );
            // console.log(responseData);
            setStateBookmarkId(responseData.id);
    }
    async function deleteBookmark(){
        const url ='/api/bookmarks/'+stateBookmarkId;
        console.log("deleting a bookmark");
        const responseData = await deleteDataFromServer(
            token,
            url
            );
            // console.log(responseData);
            setStateBookmarkId(null);
    }
    

    // console.log(bookmarkId); 

    if (stateBookmarkId){
        return (
            <button aria-label="Unbookmark this post" aria-checked="true" role="toggle" onClick={deleteBookmark}>
                <i className="fas fa-bookmark"></i>
            </button>);
    } else {
        return (
            <button aria-label="Bookmark this post" aria-checked="false" role="toggle" onClick={createBookmark}>
                <i className="far fa-bookmark"></i>
            </button>
        );
    }
    

}
