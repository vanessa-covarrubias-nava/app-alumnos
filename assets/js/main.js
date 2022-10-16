
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
         titulo:"SICEUC",
         subtitulo:"Consulta de calificaciones, fechas de evaluación y pagos.",
         href: "https://siceuc.ucol.mx/",
         icon: "history_edu",
      },
      {
         titulo:"Calendario",
         subtitulo:"Fechas e informaión oficial del ciclo escolar en curso.",
         href: "./calendario.html",
         icon: "calendar_month",
      },
      {
         titulo:"Becas",
         subtitulo:"Distintos programas de becas para cada nivel académico.",
         href: "./becas.html",
         icon: "volunteer_activism",
      },
      {
         titulo:"Intereses",
         subtitulo:"Deportes, Arte y Cultura, Búsqueda en UCOL.",
         href: "./intereses.html",
         icon: "interests",
      },
      
      {
         titulo:"Entérate",
         subtitulo:"Noticias y actividades universitarias de índole cultural, científico y deportivo.",
         href: "./enterate.html",
         icon: "newspaper",
      },
            
      {
         titulo:"Convocatorias",
         subtitulo:"Convocatorias educativas y programas de movilidad.",
         href: "./convocatorias.html",
         icon: "event",
      },
      {
         titulo:"Oferta Educativa",
         subtitulo:"Nivel media superior, licenciatura, especialidad, maestría y doctorado.",
         href: "./",
         icon: "school",
      },
      {
         titulo:"Movilidad",
         subtitulo:"Programa de movilidad.",
         href: "./movilidad.html",
         icon: "flight",
      },
      {
         titulo:"Planteles y dependencias",
         subtitulo:"Sitio web, mapa de ubicación y directorio telefónico de planteles y dependencias.",
         href: "https://www.ucol.mx/conocenos/planteles-dependencias.htm",
         icon: "apartment",
      },
      {
         titulo:"ReBUC",
         subtitulo:"Consulta libros de la red de bibliotecas universitarias y la ubicación de las bibliotecas.",
         href: "http://siabuc.ucol.mx/rebuc/",
         icon: "newspaper",
      },
      {
         titulo:"Protocolos de seguridad",
         subtitulo:"Guías y protocolos d seguridad en caso de alguna emergencia universitaria.",
         href: "https://www.ucol.mx/acerca-de/seguridad-proteccion-civil.htm",
         icon: "verified_user",
      },
      {
         titulo:"Contacto",
         subtitulo:"Escribenos a sistemasapp@ucol.mx o déjanos tus comentarios y sugerencias.",
         href: "mailto:sistemas@ucol.mx",
         icon: "mail",
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









