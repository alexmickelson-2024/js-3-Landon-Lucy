import { animals } from "./animals.js";

function buildAnimalCard(animal) {
  return `<div class="card">
                <img src=${animal.image} alt="${animal.title}" />
                <div class="card-text">
                  <h3>${animal.title}</h3>
                  <p>
                   ${animal.description}
                  </p>
                </div>
                </div>`;
}

const cardContainer = document.getElementById("card-container-id");

const buildCards = () => {

  let returnString = "";
//   const url = window.location.href;

//   let filteredAnimals = animals.filter(() => {
//     const lowerUrl = url.toLowerCase();
//     for (let y of animals)
//     {
//         const titleSplit = y.title.toLowerCase().split(" ");

//         for (let x of titleSplit)
//         {
//             if (lowerUrl.includes(x))
//             {
//                 return true;
//             }
//         }
//     }
//   });

//  console.log(filteredAnimals);

  for (let z of animals) {
    returnString += buildAnimalCard(z);
  }

  cardContainer.innerHTML = returnString;
};

buildCards();
