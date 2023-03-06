const url="https://www.superheroapi.com/api.php/10220996770587654/search/"
var contenido=''
var contenido2=''
let poderes2=[]

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
        for (i=0;i<datos.results["length"];i++){
        let imagen=datos.results[i].image.url
        let names=datos.results[i].name
        let fullName=datos.results[i].biography["full-name"]
        let poderes=datos.results[i].powerstats
        contenido+=`<table>`
        contenido+=`<tr><td>Character Name</td><td>${names}</td></tr>`
        contenido+=`<tr><td>Origin Name</td><td>${fullName}</td></tr>`
        contenido+=`</table>`
        contenido2+=`<table><th>Poderes</th><th>Nivel</th>`
            for(prop in poderes){
                contenido2+=`<tr><td>${prop}</td><td>${poderes[prop]}</td></tr>`
            }
        contenido2+=`</table>`
        let superhero=document.getElementById('superhero')
        superhero.innerHTML=`<img src=${imagen}>
        ${contenido}
        ${contenido2}`

        }
    nombre.value=''
    contenido=''
    contenido2=''
    }

}
