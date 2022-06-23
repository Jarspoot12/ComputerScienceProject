//---------------------películas con mejor ranking-------------------
const moviesList = document.getElementById('movieList');
var topRanking = []

axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ad07ae5ca461e095be2eece7283ea5c2&language=en-US&page=1')
.then( (response)=>{
   let movies = response.data.results
 
 movies.forEach(element => {
   topRanking.push(element) 
 });


 let fragment = document.createDocumentFragment()

for (let movie of topRanking){
  let itemList = document.createElement('a')
    itemList.classList.add("col-md-2","col-3", "m-2", "d-flex");
    itemList.innerHTML =`<a  href="info.html"><img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="d-block w-100 rounded-2" alt=""></a>`
   fragment.appendChild(itemList)
}
moviesList.appendChild(fragment)

})
.catch( (error)=> console.log(error));

//---------------Se crea array con los géneros disponibles---------------------

var moviesGenres = [] //almacena tipos de géneros
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ad07ae5ca461e095be2eece7283ea5c2&language=en-US')
.then(response=> response.data.genres.forEach(element => moviesGenres.push(element.id)))
.catch( (error)=> console.log(error));


var action=[]
var adventure = []
var animation = []
var comedy = []
var crime = []
var documentary = []

var actionList = document.getElementById('actionList')
var adventureList = document.getElementById('adventureList')
var animationList = document.getElementById('animationList')
var comedyList = document.getElementById('comedyList')
var crimeList = document.getElementById('crimeList')
var documentaryList = document.getElementById('documentaryList')
/*

axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ad07ae5ca461e095be2eece7283ea5c2&language=en-US&page=1`)
.then(response =>{
  
  let movies = response.data.results
  console.log(response)
  movies.forEach(element => {
    
     for(let j=0; j<element.genre_ids.length; j++){
      if(element.genre_ids[j]== 28) action.push(element.poster_path)
      else if(element.genre_ids[j]== 12) adventure.push(element.poster_path)
      else if(element.genre_ids[j]== 16) animation.push(element.poster_path)
      else if(element.genre_ids[j]== 35) comedy.push(element.poster_path)
      else if(element.genre_ids[j]== 80) crime.push(element.poster_path)
      else if(element.genre_ids[j]== 99) documentary.push(element.poster_path)

    }   
  });
})
.catch( (error)=> console.log(error));

axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ad07ae5ca461e095be2eece7283ea5c2&language=en-US&page=3`)
.then(response =>{
  
  let movies = response.data.results
  console.log(response)
  movies.forEach(element => {
    
    for(let j=0; j<element.genre_ids.length; j++){
      if(element.genre_ids[j]== 28) action.push(element.poster_path)
      else if(element.genre_ids[j]== 12) adventure.push(element.poster_path)
      else if(element.genre_ids[j]== 16) animation.push(element.poster_path)
      else if(element.genre_ids[j]== 35) comedy.push(element.poster_path)
      else if(element.genre_ids[j]== 80) crime.push(element.poster_path)
      else if(element.genre_ids[j]== 99) documentary.push(element.poster_path)
    }
  });
})
.catch( (error)=> console.log(error));
*/

axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ad07ae5ca461e095be2eece7283ea5c2&language=en-US&page=2`)
.then(response =>{
  
  let movies = response.data.results
  console.log(response)
  movies.forEach(element => {
    
     for(let j=0; j<element.genre_ids.length; j++){
      if(element.genre_ids[j]== 28) action.push({'poster_path' : element.poster_path, 'id': element.id})
      else if(element.genre_ids[j]== 12) adventure.push({'poster_path' : element.poster_path, 'id': element.id})    
      else if(element.genre_ids[j]== 16) animation.push({'poster_path' : element.poster_path, 'id': element.id})
      else if(element.genre_ids[j]== 35) comedy.push({'poster_path' : element.poster_path, 'id': element.id})
      else if(element.genre_ids[j]== 80) crime.push({'poster_path' : element.poster_path, 'id': element.id})
      else if(element.genre_ids[j]== 99) documentary.push({'poster_path' : element.poster_path, 'id': element.id})
    }   

  
  });
  

  insert(action, actionList)
  insert(adventure, adventureList)
  insert(animation, animationList)
  insert(comedy, comedyList)
  insert(crime, crimeList)
})
.catch( (error)=> console.log(error));
console.log(action)






//función para inyectar el html de cada género
function insert(arr, idDiv){
  let fragment = document.createDocumentFragment()
  for (let movie of arr){
    let itemList = document.createElement('div')
      itemList.classList.add("col-md-2","col-3", "m-2", "d-flex");
      itemList.innerHTML =`<a href="info.html" onclick="myFunction()"><img id="${movie.id}"src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="d-block w-100 rounded-2" alt=""></a>`
      fragment.appendChild(itemList)
      
      //función para obtener el atributo src
      function myFunction() {
        var imagen = document.getElementById(`${movie.id}`).getAttribute("src");
        document.getElementById("imagenPrint").innerHTML = `<div>Hola${imagen}</div>`;
        
      }
  }
  idDiv.appendChild(fragment)

}


