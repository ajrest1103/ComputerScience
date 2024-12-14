// your code here:
async function getUserInput(){
    const location = document.getElementById('location').value
    const term = document.getElementById('term').value
    const open = document.getElementById('open').checked

    console.log(open)
 
    const result = await getFood(location, term, open);
     console.log(result);
 }
 
 async function getFood(location, term, open){
     const response = await fetch(`https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location},%20NC&term=${term}&limit=10&open_now=${open}`);
     const results = await response.json();
     showFood(results);
     return results;
 }
 // Code working from here UP ^//


function showFood(results) { 
    let htmlSnippet = '';
    results.forEach(result => { 
        htmlSnippet += `
        <div class="card"> 
            <h2>${result.name}</h2> 
            <img src="${result.image_url}" alt="${result.name}"> 
            <div>
                <p>${result.display_address} </p>
                <p> Rating: <strong>${result.rating}</strong></p> 
                <p> Price: <strong>${result.price} </strong></p> 
                <p> # of Reviews: <strong>${result.review_count}</strong></p>
            </div>
        </div>
        `;
    });

    document.getElementById('results').innerHTML = htmlSnippet;
}