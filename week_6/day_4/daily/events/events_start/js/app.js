// 1. which element will be dispatching the event? 
// e.g. : is document
// 2. which event should we listen for 
// e.g. : is DOMContentLoaded
// 3. which piece of code should run when the event is dispatched 
// e.g. :  callback 

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');
  // ###########################################################
  // handle button click
// the function
  
  const handleButtonClick = function(){
    // console.log('button has been clicked');
   const resultParagraph = document.querySelector('#button-result');
   resultParagraph.textContent = 'That button has definitely been clicked'
  }
// the event

  const button = document.querySelector('#button')
  button.addEventListener('click', handleButtonClick);
  // ###########################################################



  // ###########################################################
  // handle input
// the function
  const handleInput = function(event){
    // console.log('input has been typed in');
    // 1, get the value from the input
    // console.log(event.target.value);
    // 2. update the paragraph text
    const resultParagraph = document.querySelector('#input-result')
    resultParagraph.textContent = `You typed: ${event.target.value}`


  }
// the event
  const textInput = document.querySelector('input');
  textInput.addEventListener('input', handleInput);

  // ###########################################################

  // ###########################################################

// handle select
// the function 
const handleSelectChange = function(event){
  const resultParagraph = document.querySelector('#select-result');
  resultParagraph.textContent = `You selected: ${event.target.value}`
}

// the event
  const select = document.querySelector('#select');
  select.addEventListener('change', handleSelectChange)




  // ###########################################################

  // ###########################################################
  // handle form submit

  // the function
  const handleFormSubmit = function(event){
    event.preventDefault()
    console.log(event.target.first_name.value);
    const resultParagraph = document.querySelector('#form-result')
    resultParagraph.textContent = `
    Your name: ${event.target.first_name.value} 
  ${event.target.last_name.value}`
  }

  // the event
  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)


});
