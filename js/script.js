// Milestones
// 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout
// 2 Coloriamo le icone per tipo
// 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
// Qui sotto trovate lo zip con screenshot, il logo e la struttura base js con l'oggetto icone e i colori

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

// let previousIcons = document.getElementById("elements");

// icons.forEach((element, index, array) => {


//     let printThisIcon = `
//     <li>
//         <div class="pattern">
//             <i class="${element.family} ${element.prefix}${element.name}"></i>
//         </div>
//     </li>
//     `;

//     previousIcons.innerHTML = previousIcons.innerHTML + printThisIcon;
   
// });


// Milestone 2
// Coloriamo le icone per tipo

const newIcons = icons.map((element, index, array) => {
    if ( element.type == "animal" ) {
        const newIconObject = {
            ...element,
            color: "blue"
        };

        return newIconObject;

    } else if ( element.type == 'vegetable' ) {
        const newIconObject = {
            ...element,
            color: "orange"
        };

        return newIconObject;
    } else if ( element.type == 'user' ) {
        const newIconObject = {
            ...element,
            color: "purple"
        };

        return newIconObject;
    }
});

console.log("newIcons", newIcons);

// const catsWithRibbon = cats.map( (element, index, array) => {
  
//     let ribbonColour = ( element.gender == 'female' ) ? 'pink' : 'blue';
//     let ribbonOpacity = element.age * 100;
  
//     const newCat = {
      
//       ...element,
//       ribbon: {
//         color: ribbonColour,
//         opacity: ribbonOpacity
//       }
//     };
  
//     return newCat;
//   });

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone