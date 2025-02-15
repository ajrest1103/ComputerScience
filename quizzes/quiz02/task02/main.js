// 1. Create your businessToHTML function here:

function businessToHTML(business) { 
    let htmlSnippet = `
        <div class="card"> 
            <h2>${business.name}</h2> 
            <img src="${business.image_url}" alt="${business.name}"> 
            <div>
                <p>${business.display_address} </p>
                <p> Rating: <strong>${business.rating}</strong> </p> 
                <p> Price: ${business.price || " "} </p> 
                <p> # of Reviews: <strong> ${business.review_count}</strong></p>
            </div>
        </div>
        `;
    document.getElementById('here').innerHTML = htmlSnippet;
    return htmlSnippet;
}



// 2. When you're done, uncomment the test code below and preview index.html in your browser:

const businessObjPriceDefined = {
    id: "d8Vg0DxRY-s2a8xnZ6ratw",
    name: "Chestnut",
    rating: 4.5,
    image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
    display_address: "48 Biltmore Ave, Asheville, NC 28801",
    coordinates: { latitude: 35.5931657, longitude: -82.550943 },
    price: "$$",
    review_count: 1257,
};

const businessObjPriceNotDefined = {
    id: "d8Vg0DxRY-s2a8xnZ6ratw",
    name: "Chestnut",
    rating: 4.5,
    image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
    display_address: "48 Biltmore Ave, Asheville, NC 28801",
    coordinates: { latitude: 35.5931657, longitude: -82.550943 },
    review_count: 1257,
};


console.log("HTML representation of a business:", businessToHTML(businessObjPriceDefined));
console.log("HTML representation of a business (no price):", businessToHTML(businessObjPriceNotDefined));

 