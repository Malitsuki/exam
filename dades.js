const treballadors = [
    {
       nom : "Ana",
       cognom: "Puig",
       carrec: "venedor(a)",
       disponibilitatTrasllat : true
    },
    {
       nom : "Lluis",
       cognom: "Soto",
       carrec: "venedor(a)",
       disponibilitatTrasllat : false
    },
    {
       nom : "Cristina",
       cognom: "Tomas",
       carrec: "administratiu(a)",
       disponibilitatTrasllat : false
    },
    {
       nom : "Andreu",
       cognom: "Ricart",
       carrec: "venedor(a)",
       disponibilitatTrasllat : true
    },
    {
       nom : "Pep",
       cognom: "Vila",
       carrec: "venedor(a)",
       disponibilitatTrasllat : false
    },
    {
       nom : "Núria",
       cognom: "Roure",
       carrec: "administratiu(a)",
       disponibilitatTrasllat : true
    },
 
 ]

function getTreballador() {
     let persona = {nom:'', cognom:''}
     persona.nom = prompt('escriu el nom de la persona')
     persona.cognom = prompt('escriu el cognom de persona')
     
     
     for (let value of treballadors) {
         if (value.nom == persona.nom && value.cognom == persona.cognom){
            document.getElementById("nom1").innerText = (value.nom)
            document.getElementById("cognoms1").innerText = (value.cognom)
            document.getElementById("carrec1").innerText = (value.carrec)
            document.getElementById("trasllat1").innerText = (value.disponibilitatTrasllat)
         }
     }
    
     
    }
     
function disponibilitatTrasllat()    {
    let arrayTraslados = []

    for (let value of treballadors) {
        if (value.disponibilitatTrasllat == true) {
            arrayTraslados.push(value.nom)
            
        }
        
    }  
    console.log(arrayTraslados)
 
}

 