
function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
       {
          titulo:"Entérate",
          subtitulo:"Noticias y actividades universitarias",
          href:"./portafolio.html",
          icon: "newspaper",
       },
       {
          titulo:"Agenda",
          subtitulo:"Eventos culturales, científicos y deportivos",
          href: "./agenda.html",
          icon: "event",
       },
    ],
       
       
    // Make a container element for the list
    listContainer = document.createElement("myList"),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;
 
    // Add it to the page
    document.getElementsByTagName('div')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);
 
    for (i = 0; i < numberOfListItems; ++i) {
 
       //class items
 
       
        // creacion de item para el elemento
       let div = document.querySelector("div.divClass");
       listItem = document.createElement('div');
 
 
 
        // Agregar el texto al item
        div =  `
        <div class="divClass" >
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://www.ucol.mx/content/enterate/adjuntos//th_EXTERIOR_Mesa_Procesos_electorales_comparados__Ricardo_Pena_10484.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title" id="titulo">${listData[i].titulo}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
        </div>`
        console.log(listData[i]);
        listItem.innerHTML = div;
       //  listItem.innerHTML += listData[i].subtitulo;
        
 
        // Agregar el list item a la lista 
        listElement.appendChild(listItem);
    }
 }
 
 // Usage
 makeList();