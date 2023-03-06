const url="https://www.superheroapi.com/api.php/10220996770587654/search/"
var contenido=''

async function encontrar(){
    let nombre=document.getElementById('nombre')
    let name=nombre.value
    const respuesta=await fetch(url+name)
    const datos=await respuesta.json()
    console.log(datos);
    if (name==''){
        alert('Tienes que poner un superheroe')
    }else if (datos.response=='error'){
        alert('Ese superheroe no existe')
    }else{
        let imagen=datos.results[0].image.url
        let superhero=document.getElementById('superhero')
        superhero.innerHTML=`<img src=${imagen}>`
        let names=datos.results[0].name
        let fullName=datos.results[0].biography.full-name
        let poderes=datos.results[0].powerstats
    }
}
