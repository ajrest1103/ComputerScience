import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestion from "../components/Suggestion"; 

export default function SuggestionList({ token }) {

    const [suggestions, setSuggestions] = useState([]);

    async function getSuggestions() {
        const data = await getDataFromServer(token, "/api/suggestions/");
        console.log(data);
        setSuggestions(data);
    }

    useEffect(() => {
        getSuggestions();
    }, [token]); 


    function outputSuggestion(suggestion) {
        return <Suggestion key={suggestion.id} username={suggestion.username} image={suggestion.thumb_url} />
    }

    return (
        <><p className="text-base text-gray-400 font-bold mb-4">
            Suggestions for you</p>
        <div> {suggestions.map(outputSuggestion)} </div></>
    )
}


    