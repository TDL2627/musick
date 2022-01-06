// creating a object that contains an array 
let projects = [
    {
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CCB0-i1O1dMmN-LnVYdBZt9D2-OEWT3K6Q&usqp=CAU",
      title: "FOR ZAINUNUESA",
      genre: "Romance",
      artist: "TDL2627",
      year:"2021",
      stream:'<iframe src="https://drive.google.com/file/d/1Bw4aGca7gOCzN58FhqvXxdxMRX4ru_pZ/preview" width="400" height="50" allow="autoplay"></iframe>',
    }
  ];
  
  function createCard(card) {
    let createdCard = `<div class="project-card" genre=${card.genre} >
        <img class="movie-pic" src="${card.imgURL}">
        <h4>${card.title}</h4>
        <h6>${card.genre}</h6>
        <p>${card.artist}</p>
        <p>${card.year}</p>
        ${card.stream}
      </div>
    `;
    return createdCard;
  }
  
  function renderCards() {
    let projectContainer = document.querySelector(".project-container");
    for (project of projects) {
      let card = createCard(project);
      projectContainer.innerHTML += card;
    }
  }
  
  renderCards();
  
  // filter
  function filterCards(category) {
    let cards = document.getElementsByClassName("project-card");
  
    if (category === "All") {
      for (card of cards) {
        card.style.display = "block";
      }
      return;
    }
  
    for (card of cards) {
      console.log(card);
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll(`[genre='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
 