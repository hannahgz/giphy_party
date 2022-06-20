//Global Constants
const apiKey = '6l0GXGJ8lJjx75o3jD24LhW5D2H1DChU'
const limit = 9
const rating = 'g'

console.log("test")

// const response = document.querySelector('#gifs');
const form = document.getElementById("my-form")
const response = document.getElementById("input")



function handleFormSubmit(event) {
    console.log(response)
    console.log(response.value)
    console.log("reached")
}

form.addEventListener('submit', handleFormSubmit)
// const movies = [

// ];

// function doSomethingWithMovie(movie) {
//     console.log(movie.title)
//     movieGridElement.innerHTML = movieGridElement.innerHTML + `<p> ${movie.title} </p>`
// }

// const movieGridElement = document.querySelector('#movie-grid')

// movieGridElement.innerHTML = movieGridElement.innerHTML + `
// <div>
//     <p>
//         ${movie.title}
//     </p>



// </div>