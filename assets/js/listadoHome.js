export default class listadoHome {
    constructor() {
        listado = new Array();
    }
}




function titulo(){
    let listadoHome = document.getElementById('listadoHome');
    listadoHome.querySelector('.titulo').innerHTML = info.uno.titulo;

}


titulo();