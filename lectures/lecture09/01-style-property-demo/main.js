
// const makeRed = () => {
//     // your code here...
//     console.log('Change background to red');
//     document.querySelector('#section1').style.backgroundColor = 'red';
// };

// const makeBlue = () => {
//     // your code here...
//     document.querySelector('#section2').style.backgroundColor = 'blue';
//     console.log('Change background to blue');
// };

// const makePink = () => {
//     // your code here...
//     document.querySelector('#section3').style.backgroundColor = 'pink';
//     console.log('Change background to pink');
// };

// const makeOrange = () => {
//     // your code here...
//     document.querySelector('#section4').style.backgroundColor = 'orange';
//     console.log('Change background to orange');
// };

// const clearall = () => {
//     // your code here...
//     document.querySelectorAll('#section1', '#section2', '#section3').style.backgroundColor = 'green';
//     console.log('Change background to orange');
// };

// IN CLASS 

const changeBg = (sel, color) => {
    document.querySelector(sel).style.backgroundColor = color;
};

const clearall = () => {
    const divs = document.querySelectorAll(".my-section");
    console.log(divs);
    for (const div of divs){
        div.style.backgroundColor = 'transparent';
    }
}