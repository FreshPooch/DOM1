console.log('hello world')
const message = document.querySelector('#message'); 


function addMovie(event) {
  event.preventDefault(); 
  const inputField = document.querySelector('input'); 
  const movie = document.createElement('li'); 
const movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value; 
movieTitle.addEventListener('click', crossOffMovie); 
movie.appendChild(movieTitle); 
const deletebtn = document.createElement('button')
deletebtn.textContent = 'x'; 
deletebtn.addEventListener('click', deleteMovie); 
movie.appendChild(deletebtn);
const ul = document.querySelector('ul'); 
ul.appendChild(movie); 
inputField.value = ''; 
}

const form = document.querySelector('form'); 
form.addEventListener('submit', addMovie); 

function deleteMovie(event) {
  event.target.parentNode.remove(); 
  message.textContent = 'Movie Deletus!'
}

function crossOffMovie(event) {
  event.target.classList.toggle('checked'); 
  if(event.target.classList.contains('checked')) {
    message.textContent = 'Movie Watched!'
  }else {
    message.textContent = "Movie re-added!"
  }
}

