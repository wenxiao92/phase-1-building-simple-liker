// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let x = document.querySelector('.hidden')
let hearts = document.querySelectorAll('.like-glyph')

//let buttons = document.querySelectorAll('.like') //li tag in this case is the button
for (let btn of hearts) {
  //console.log(btn) -> displays all the buttons in the console
  btn.addEventListener('click', callBack)

}



function callBack(event) {
  let targetHeart = event.target
  
  mimicServerCall()
  .then(() => {
  //alert(success)
  if (targetHeart.innerText === EMPTY_HEART) {
    targetHeart.className = "activated-heart"
    console.log(targetHeart)
    targetHeart.innerText = FULL_HEART
  } else {
    targetHeart.className = ""
    console.log(targetHeart)
    targetHeart.innerText = EMPTY_HEART
  }
  //console.log(currentBtn)
  
  //for (let counts of hearts) {
  //  counts.classList.add("activated-heart")
  //  console.log(counts)
  //}
  //let changeHeart = buttons.childNodes
  //console.log(hearts)
  //changeHeart.innerText = FULL_HEART
  })
  .catch((error) => {
  //let x = document.querySelector('.hidden') //assigned at the top of this js
  x.className = "" //using the className method on the variable to change hidden to empty string (hiding the error message)
  x.innerText = error
  //console.log(x)
  setTimeout(() => {x.className = "hidden"}, 3000) //To hide the error message after 3 seconds by returning the class name
  })  
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
