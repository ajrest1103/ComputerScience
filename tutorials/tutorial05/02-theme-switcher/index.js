const defaultTheme = ev => {
    // your code here.
    alert("default!");
    document.querySelector("body").className = "none";
};

const oceanTheme = ev => {
   // your code here.
   alert("ocean");
   document.querySelector("body").className = "ocean";
};

const desertTheme = ev => {
   // your code here.
   alert("dessert!");
   document.querySelector("body").className = "desert";
};

const highContrastTheme = ev => {
    // your code here.
    alert("contrast!");
    document.querySelector("body").className = "high-contrast";
}; 

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/