import React, {useEffect, useState} from "react";
import { getDataFromServer } from "../server-requests";


export default function Profile({ token, username }) {

    const [profileImage, setProfileImage] = useState('');

    async function getProfile() {

        //fetches data from herokuapp endpoint 
        const data = await getDataFromServer(token, "/api/profile");

        //printing data to the screen 
        console.log(data);

        setProfileImage(data.image_url);
    }

         // built in function designed to handle side effects when loading in 
    useEffect(() => {
        getProfile();
    }, []);

    console.log()

    return (
        <header className="flex gap-4 items-center">
            <img src={profileImage} width="30" height="30" className="rounded-full w-16 " />
            <h2 className="font-Comfortaa font-bold text-2xl">{username}</h2>
        </header>
    );

}
