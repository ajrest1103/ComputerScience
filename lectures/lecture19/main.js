// https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track&limit=5

/** 1. Write an asynchronous function that accepts two arguments...
 *       - A search term
 *       - The number of results
 * 
 */

async function getSongs(artist, limit){
    const response = await fetch(`https://www.apitutor.org/spotify/simple/v1/search?q=${artist}&type=track&limit=${limit}`);
    const data = await response.json();
    return data;
}

async function getUserInput() {
    const artist = prompt("Enter Artist:");
    const limit = prompt("Enter Limit:");

    const result = await getSongs(artist, limit);
    console.log(result);
}

getUserInput();

 /** 
 * Your function will then query Spotify based on the arguments provided and
 * returns a list of data matching the search criteria

 /** 
 *  2. Write a function that accepts a JavaScript "track" object and returns an
 *     HTML representation of this object
 */

function generateHTML(trackObj){
    return `<section>
        ${trackObj.name}
        <img src="${trackObj.album.image_url}"
        </section>`
}


/**
 *  3. Wire up the functiontality that you made to an HTML search form. When
 *     the user types in a search term and clicks the submit button, your form
 *     should show a list of the matching tracks.
 *
 */
