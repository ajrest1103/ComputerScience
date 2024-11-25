import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post";


// fetch post data from server and iterate through each element and draw post 
export default function Posts({ token }) {

    // state variable : everytime a state variable gets set, it redraws the components 
    const [posts, setPosts] = useState([]);

    async function getPosts() {

        //fetches data from herokuapp endpoint 
        const data = await getDataFromServer(token, "/api/posts");

        //printing data to the screen 
        console.log(data);

        //setting a state variable 
        setPosts(data);
    }

    // built in function designed to handle side effects when loading in 
    useEffect(() => {
        getPosts();
    }, []);

    function outputPost(postObj) {
        return <Post token={token} key={postObj.id} postData={postObj}/>
    }
    
    return (
        <div> {posts.map(outputPost)} </div>
    );
}