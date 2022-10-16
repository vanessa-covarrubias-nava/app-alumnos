
function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
       {
          titulo:"Institucionales",
          subtitulo:"Lorem ",
       },
       {
        titulo:"Institucionales",
        subtitulo:"Lorem ",
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
        div =  `<div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
        <!-- Accordion card -->
        <div class="card">
          <!-- Card header -->
          <div class="card-header" role="tab" id="headingOne1">
            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                <div class="div-titulo-beca">
                    <h5 class="titulo-beca">
                        ${listData[i].titulo}
                    </h5>
                </div>
                <div class="flecha"> 
                    <i class="fas fa-angle-down rotate-icon"></i>
                </div>
            </a>
          </div>
          <!-- Card body -->
          <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
            data-parent="#accordionEx">
            <div class="card-body">
              <p class="subtitulo">
                <li class="subtitulo">
                ${listData[i].subtitulo}
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>`
        listItem.innerHTML = div;
       //  listItem.innerHTML += listData[i].subtitulo;
        
 
        // Agregar el list item a la lista 
        listElement.appendChild(listItem);
    }
 }
 
 // Usage
 makeList();