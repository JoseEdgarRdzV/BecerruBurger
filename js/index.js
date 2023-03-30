const Tipo = document.querySelector('#Tipo').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
let Burgers = []

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8111058307mshbfa8a2d236e4295p1c0742jsn8fcbf12ac466',
		'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
	}
};

fetch('https://burgers-hub.p.rapidapi.com/burgers', options)
	.then(response => response.json())
	.then(response => {
        Burgers = response
        creaCards()
        console.log(response)})
	.catch(err => console.error(err));



const creaCards = () => {
    console.log('entra')
    Burgers.forEach((Datos) => {
        console.log(Datos.images)
        Tipo.querySelector('img').setAttribute('src', Datos.images[1].lg)
        Tipo.querySelector('.BurgerName').textContent = Datos.name
        //Tipo.querySelector('.desc').textContent = Datos.desc
        //Tipo.querySelector('.veg').textContent = Datos.veg
        Tipo.querySelector('.price').textContent = Datos.price
        

        const clone = Tipo.cloneNode(true)
        fragment.appendChild(clone)
    }) 
    contenido.appendChild(fragment)
}