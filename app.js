// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "London",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const mainContainer = document.querySelector(".main-container");
const nav = document.querySelector(".topnav");
const personName = document.querySelector(".person-name");
const jobTitle = document.querySelector(".job-title");
const personImg = document.querySelector(".person-img");
const jobDesc = document.querySelector(".job-desc");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const icon = document.querySelector(".icon");

let currentItem = 0;
console.log(currentItem);
window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem);
})

function showPerson(person){
   let item = reviews[person];
    personImg.src = item.img;
    personName.textContent = item.name;
    jobTitle.textContent = item.job;
    jobDesc.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  } showPerson(currentItem);
  console.log(currentItem);
});

prevBtn.addEventListener("click", function(){
  currentItem--;
   if(currentItem < 0){
        currentItem = reviews.length - 1;
   } showPerson(currentItem);
   console.log(currentItem);
})

// collapsing header

icon.addEventListener("click", function(){
  let x = document.getElementById("navo");
  if(x.className === "topnav"){
    x.className += " responsive";
    icon.classList.add("icono")
  } else{
    x.className = "topnav";
    icon.classList.remove("icono");
  }
})






