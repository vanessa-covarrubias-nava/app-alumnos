
function makeList() {
   // Establish the array which acts as a data source for the list
   let listData = [
      {
         titulo:"Portafolio.",
         subtitulo:"Consulta tus materias (sólo educación superior) evaluaciones en EvPraxis.",
         href:"./portafolio.html",
         icon: "work",
      },
      {
         titulo:"prueba2",
         subtitulo:"prueba descrip",
         href: "",
         icon: "",
      },
      {
         titulo:"jdcsnkcdlkdlkio.",
         subtitulo:"Consulta tus materias (sólo educación superior) evaluaciones en EvPraxis.",
         href: "",
         icon: "",
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
   document.getElementsByTagName('a')[0].appendChild(listContainer);
   listContainer.appendChild(listElement);

   for (i = 0; i < numberOfListItems; ++i) {

      //class items

      
       // creacion de item para el elemento
      let div = document.querySelector("div.divClass");
      listItem = document.createElement('li');



       // Agregar el texto al item
       div =  `
       <div class="divClass">
         <a href="${listData[i].href}" id="listItem" >
         <li class="list-group-item list-item text-left" >
             <span class="material-symbols-outlined">
                 ${listData[i].icon}
             </span>
             <ul class="list-group" style="list-style: none;">
                 <li>
                     <h4 class="titulo" id="titulo">${listData[i].titulo}</h4>
                 </li>
                 <li class="subtitulo" id="subtitulo">${listData[i].subtitulo}</li>
             </ul>      
         </li>
       </a>
     </div>`
       listItem.innerHTML = div;
      //  listItem.innerHTML += listData[i].subtitulo;
       

       // Agregar el list item a la lista 
       listElement.appendChild(listItem);
   }
}

// Usage
makeList();









