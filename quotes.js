//store DOM elements for Button and and paragraph tag where quote will display

// const newQuoteBtn = document.getElementByID("quoteBtn")
const quoteText = document.getElementById("quoteText")
const quoteAuthor = document.getElementById("quoteAuthor")
// const quoteSource = document.getElementById("quoteSource")
const newQuoteBtn = document.querySelector("#quoteBtn")
// const newQuoteInput = document.getElementById("addedQuote")
// const addNewBtn = document.getElementById("addBtn")
const imageURL = document.getElementById("myPicture")


//create an array to store your quotes

// let quotes = ["Quote One","Quote Two", "Quote Three","Quote Four", "Quote Five","Quote Six"]

//write a function that will return a random number between 0 and one less than the length of your array

function generateRandomNumber(){
  let index = Math.floor(Math.random() * quotes.length)
  return index
  // console.log(index)
}

let quotes = [
{
  quoteText: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
  quoteAuthor: "- Aristotle, Greek philosopher ",
  imageURL: "img/Q_one.png"
},
{
  quoteText: "“Tell me and I forget, teach me and I may remember, involve me and I learn.”",
  quoteAuthor: "- Benjamin Franklin, Founding Fathers of the United States ",
  // quoteSource: "Source: (http://www.personal.psu.edu/cjm5/blogs/benjamin_franklin_then_and_now/2013/05/franklins-impact-on-american-education.html)",
  imageURL: "img/Q_two.png"
},
{
  quoteText: "“Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.”",
  quoteAuthor: "- Malcolm X, human rights activist  ",
  imageURL: "img/Q_three.png"
},
{
  quoteText: "“Education is simply the soul of a society as it passes from one generation to another”",
  quoteAuthor: "- Gilbert Keith Chesterton, English writer, philosopher ",
  imageURL: "img/Q_four.png"
},
{
  quoteText: "“Education is a human right with immense power to transform. On its foundation rest the cornerstones of freedom, democracy, and sustainable human development.”",
  quoteAuthor: "- Kofi Annan, Seventh Secretary-General of the United Nations ",
  imageURL: "img/Q_five.png"
},
{
  quoteText: "“All the SDGs come down to education…”",
  quoteAuthor: "- Malala Yousafzai, activist for female education and the youngest Nobel Prize laureate ",
  imageURL: "img/Q_six.png"
},
{
  quoteText: "“He who opens a school door, closes a prison.”",
  quoteAuthor: "- Victor Hugo, French poet ",
  imageURL: "img/Q_seven.png"
},
{
  quoteText: "“Education is directly linked to economic growth and prosperity, and is critical to promoting peace.”",
  quoteAuthor: "- Jim Yong Kim, 12th President of the World Bank",
  imageURL: "img/Q_eight.png"
},
{
  quoteText: "“When it comes to education, “business as usual” is not an option.”",
  quoteAuthor: "- Irina Bokova, former Director-General of UNESCO",
  imageURL: "img/Q_nine.png"
},
{
  quoteText: "“Education promotes equality and lifts people out of poverty. It teaches children how to become good citizens. Education is not just for a privileged few, it is for everyone. It is a fundamental human right.”",
  quoteAuthor: "- Ban Ki-moon, eighth Secretary-General of the United Nations",
  imageURL: "img/Q_ten.png"
},
]
// generateRandomNumber()

//write a function that will dispay a random quote from array when it is clicked
function showQuote(){
  let quoteIndex = generateRandomNumber()
  let quoteToDisplay = quotes[quoteIndex]
  // console.log(quoteIndex)
  // console.log(quoteToDisplay)

  // quoteText.innerHTML = quoteToDisplay

  quoteText.innerHTML = quoteToDisplay.quoteText;
  
  quoteAuthor.innerHTML = quoteToDisplay.quoteAuthor;

  // quoteSource.innerHTML = quoteToDisplay.quoteSource;

  document.getElementById("myPicture").src = quoteToDisplay.imageURL;

  // imageURL.innerHTML = quoteToDisplay.imageURL;
}
//showQuote()

// write a function to add a new quote from the quote input text box

function addNewQuote(){
  //console.log("Quote array length: " + quotes.length)
  let quoteToAdd = newQuoteInput.value;
  quotes.push(quoteToAdd)

 // console.log("Quote array length: " + quotes.length)
}

//assign a click event handler to the button that will run the function we just created
newQuoteBtn.addEventListener("click",showQuote)

// addNewBtn.addEventListener("click",addNewQuote)