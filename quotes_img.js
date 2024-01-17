//store DOM elements for Button and and paragraph tag where quote will display

// const newQuoteBtn = document.getElementByID("quoteBtn")
const quoteText = document.getElementById("quoteText")
//const newQuoteBtn = document.querySelector("#quoteBtn")
const newImageBtn = document.querySelector("#imgSDGBtn")

//create an array to store your quotes
let quotes = ["Education is a human right with immense power to transform. On its foundation rest the cornerstones of freedom, democracy and sustainable human development. - Kofi Annan",
"SDG Two",
"SDG Three"]


let sdgImages = [
  "img/Q1.png",
  "img/Q2.png",
  "img/Q3.png",
  "img/Q4.png",
  "img/Q5.png",
  "img/Q6.png",
  "img/Q7.png",
  "img/Q8.png",
  "img/Q9.png",
  "img/Q10.png",
]

//write a function that will return a random number between 0 and one less than the length of your array

function generateRandomNumber(){
  let index = Math.floor(Math.random() * quotes.length)
  return index
  // console.log(index)
}

function generateRandomNumberforSDG(){
  let sdgIndex = Math.floor(Math.random() * sdgImages.length)
  return sdgIndex
  // console.log(index)
}
// generateRandomNumber()

//write a function that will dispay a random quote from array when it is clicked
function showQuote(){
  let quoteIndex = generateRandomNumber()
  let quoteToDisplay = quotes[quoteIndex]
  // console.log(quoteIndex)
  // console.log(quoteToDisplay)
  quoteText.innerHTML = quoteToDisplay
  
}

function showImage(){
  let sdgImageIndex = generateRandomNumberforSDG()
  let imageToDisplay = sdgImages[sdgImageIndex]
  // console.log(quoteIndex)
  // console.log(quoteToDisplay)
  //quoteText.innerHTML = quoteToDisplay
   document.getElementById("myPicture").src = imageToDisplay;
}
//showQuote()

//assign a click event handler to the button that will run the function we just created
// newQuoteBtn.addEventListener("click",showQuote, showImage)
//newQuoteBtn.addEventListener("click", showQuote)

// newImageBtn.addEventListener("click", showImage)