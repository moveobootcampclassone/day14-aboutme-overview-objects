// Solution 1:
const imageArr = [
  {
    name: "Palacio Real de Madrid",
    img: "assets/image1_placio.jpg",
    description:
      "is the official residence of the Spanish royal family at the city of Madrid",
    built: "April 7, 1735",
    myClass: "madrid",
  },
  {
    name: "Eiffel Tower",
    img: "assets/image2_eiffel-tower.jpg",
    description:
      "is a wrought-iron lattice tower on the Champ de Mars in Paris, France",
    built: "31 March 1889",
    myClass: "eiffel",
  },
  {
    name: "Statue of Liberty",
    img: "assets/image_3_state-of-liberty.jpg",
    description: "was a gift from France as a symbol of American freedom",
    built: "October 28, 1886",
    myClass: "new-york",
  },
];

function renderImageList(items) {
  let makeList = ``;
  for (let i = 0; i < items.length; i++) {
    makeList += `<div class="img-container"><img src=${items[i].img} class=${items[i].myClass}><p>${items[i].name},</p>
                    <p>${items[i].description},</p>
                    <p>${items[i].built}</p></div>`;
  }
  console.log(makeList);
  return makeList;
}
//We have a div element with id "images-description" (in the HTML file)
document.getElementById("images-description").innerHTML =
  renderImageList(imageArr);

// Solution 2:

// createGallery
const imagesDataBase = [
  {
    src: "/assets/dog1.jpeg",
    description: "the dog i miss the most",
    alt: "dog-1",
    myClass: "photo",
  },
  {
    src: "/assets/dog2.jpeg",
    description: "my family dog",
    alt: "dog-2",
    myClass: "photo-two",
  },
  {
    src: "/assets/dog3.jpeg",
    description: "my favorite dog",
    alt: "dog-3",
    myClass: "photo-two",
  },
];

function createGallery(imagesDataBase) {
  // create an empty div element
  let gallery = document.createElement("div");
  // set the class of the div to 'gallery'
  gallery.classList.add("gallery");

  // loop through the imagesDataBase array
  for (let i = 0; i < imagesDataBase.length; i++) {
    // create an img element
    let img = document.createElement("img");
    // img.classList.add("images");
    // set the src and alt attributes of the img element
    img.src = imagesDataBase[i].src;
    img.alt = imagesDataBase[i].alt;
    img.className = imagesDataBase[i].myClass;

    // create a p element
    let desc = document.createElement("p");
    // set the text content of the p element to the description of the item
    desc.textContent = imagesDataBase[i].description;
    //Or: desc.innerText = imagesDataBase[i].description;
    //Or: desc.innerHTML = imagesDataBase[i].description;
    desc.classList.add("descImg");
    // create: <p class="my-per">Hello</p>
    // append the img and p elements to the gallery div
    gallery.appendChild(img);
    gallery.appendChild(desc);
  }

  // append the gallery element to the DOM
  document.body.appendChild(gallery);

  // return the gallery element
  return gallery;
}

createGallery(imagesDataBase);
