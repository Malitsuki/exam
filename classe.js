class Treballadors {
    #nom
    #cognom
    #carrec
    #disponibilitatTrasllat

    constructor (nom, cognom, carrec, disponibilitatTrasllat){
        this.#nom=nom
        this.#cognom=cognom
        this.#carrec=carrec
        this.#disponibilitatTrasllat=disponibilitatTrasllat
    }
    getNom () {
        return this.#nom
    }
    getCognom() {
        return this.#cognom
    }
    getCarrec() {
        return this.#carrec
    }
    getDisponibilitatTrasllat(){
        return this.#disponibilitatTrasllat
    }
    setNom (nom) {
        this.#nom=nom
    }
    setCognom (cognom) {
        this.#cognom=cognom
    }
    setCarrec (carrec) {
        this.#carrec = carrec
    }
    setDisponibilitatTrasllat (disponibilitatTrasllat) {
        this.#disponibilitatTrasllat = disponibilitatTrasllat
    }
    
}
function creaTreballador() {
    let nouTreballador = new Treballadors('Amalia', 'Rodríguez', 'Front-end junior', 'false')
    document.getElementById("nom2").innerText = nouTreballador.getNom()
    document.getElementById("cognoms2").innerText = nouTreballador.getCognom()
    document.getElementById("carrec2").innerText = nouTreballador.getCarrec()
    document.getElementById("trasllat2").innerText = nouTreballador.getDisponibilitatTrasllat()
   
}  