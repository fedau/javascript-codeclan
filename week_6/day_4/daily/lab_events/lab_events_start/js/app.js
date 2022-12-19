document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const handleFormSubmit =function(event){
    event.preventDefault()
    // console.log(event.target.title.value);
 
    // const resultCard = document.querySelector('#reading-list')
    // resultCard.textContent = `${event.target.title.value} ${event.target.author.value}  ${event.target.category.value}`m.textContent = `${event.target.title.value} ${event.target.author.value}  ${event.target.category.value}`;

    const newListItem = document.createElement('li')
    newListItem.textContent = `${event.target.title.value} ${event.target.author.value}  ${event.target.category.value}`;
    newListItem.classList.add('#reading-list');
    const list = document.querySelector('ul')
    list.appendChild(newListItem)


    document.getElementById("new-item-form").reset();


  }

  const form = document.querySelector("#new-item-form")
  form.addEventListener('submit', handleFormSubmit)

  // the function
  
  const handleButtonClick = function(){
    // console.log('button has been clicked');
    document.querySelector('ul').clear()
  }
// the event

  const button = document.querySelector('#button')
  button.addEventListener('click', handleButtonClick);
})
