import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestions from "../components/Suggestions"; 

export default function Suggestion({ token }) {
    const [suggestions, setSuggestions] = useState([]);

    async function getSuggestions() {
            const data = await getDataFromServer(token, "/api/suggestions/");
            console.log(data);
            setSuggestions(data);
    }

    console.log("Hello World!");

    useEffect(() => {
        getSuggestions();
    }, [token]); 

    return (
        <div>
            <Suggestions suggestions={suggestions} token={token} />
        </div> 
    );
}




// import React, { useState, useEffect } from "react";
// import { getDataFromServer } from "../server-requests";
// import { Suggestions } from "../Suggestions";

// export default function Suggestion({ token }) {
//     const [suggestions, setSuggestions] = useState([]);

//     async function getSuggestions() {
//             const data = await getDataFromServer(token, "/api/suggestions/");
//             console.log(data);
//             setSuggestions(data);

//     }

//     console.log("Hello World!");

//     useEffect(() => {
//         getSuggestions();
//     }, [token]); 

//     function outputSuggestions(postObj) {
//         return <Suggestions token={token} key={postObj.id} postData={postObj} />;
//     }

//     return (
//         <div>{suggestions.map(outputSuggestions)}</div> 
//     );

// }