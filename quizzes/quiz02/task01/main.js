// 1. Create your getBusinesses function here:

const getBusinesses = async (location, term, limit) => {
    const URL = 'https://www.apitutor.org/yelp/simple/v3/businesses/search';
    endpoint = `${URL}?location=${location}&term=${term}&limit=${limit}`;
    console.log(endpoint);
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    console.log(`Matches for ${term}: `, jsonData);
};

// I don't know if you will see this but if you do here is a quick chuckle, 
//Yes, the order of the search terms matter.... says future me to past me when the code 
// tried to look for Asheville NC in or around Pizza... anywho 

// 2. When you're done, uncomment the test code below and preview index.html in your browser:


console.log(
    "Should display 3 pizza restaurants in Asheville:",
    getBusinesses("Asheville, NC", "pizza", 3)
);
console.log(
    "Should display 10 thai restaurants in San Francisco:",
    getBusinesses("San Francisco, CS", "thai", 10)
);

