console.log("gatito");

const API = "https://pokeapi.co/api/v2/pokemon/";
const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png";
const thecatapi = 'https://api.thecatapi.com/v1/images/search';

const pokeimage = document.getElementById("pokeimage");

const changePokeimage = () => {
    pokeimage.src = image;
}

const changeLuck = () => {
    const button = document.getElementById("button");
    apiCall();
}

const apiCall = async () => {
    await fetch(thecatapi)
    .then(res => res.json())
    .then(data => {
        const img = pokeimage;
        img.src = data[0].url;
    });
}

button.addEventListener("click", changeLuck)



