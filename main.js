const title = document.querySelector('.container h1');

const btnEl = document.getElementById('btn');

const animeContainerEL = document.querySelector(".anime-container");

const animeNameEl=document.querySelector(".anime-name");

const animeImage = document.querySelector('.anime-img');

let i=Math.floor(Math.random()*100);
btnEl.addEventListener("click", async function(){
  try{
   btnEl.disabled=true;
   btnEl.disabled=false;
   animeContainerEL.style.display="block";
   animeNameEl.innerText='Let us start';
   animeImage.src="spinner.svg";
   animeNameEl.innerText='getting pic...';
   const response = await fetch("https://api.catboys.com/img")
   const data = await response.json();
   animeImage.url=data;
   animeImage.src=data.url;
   animeNameEl.innerText=data.artist;
   
   title.style.color=`rgb(${i},${255-i},${120})`;

  }catch(error){
       console.log("error occured");
   }

});
