//Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 7;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data
// [{imgSrc: './images/beatles.jpeg'}]
const getData = () => [
    { imgSrc: './images/beatles.jpeg', name: 'beatles' },
    { imgSrc: './images/blink182.jpeg', name: 'blink182' },
    { imgSrc: './images/fkatwings.jpeg', name: 'fka twings' },
    { imgSrc: './images/fleetwood.jpeg', name: 'fleetwood' },
    { imgSrc: './images/joy-division.jpeg', name: 'joy division' },
    { imgSrc: './images/ledzep.jpeg', name: 'led zeppelin' },
    { imgSrc: './images/metallica.jpeg', name: 'metallica' },
    { imgSrc: './images/pinkfloyd.jpeg', name: 'pink floyd' },
    { imgSrc: './images/beatles.jpeg', name: 'beatles' },
    { imgSrc: './images/blink182.jpeg', name: 'blink182' },
    { imgSrc: './images/fkatwings.jpeg', name: 'fka twings' },
    { imgSrc: './images/fleetwood.jpeg', name: 'fleetwood' },
    { imgSrc: './images/joy-division.jpeg', name: 'joy division' },
    { imgSrc: './images/ledzep.jpeg', name: 'led zeppelin' },
    { imgSrc: './images/metallica.jpeg', name: 'metallica' },
    { imgSrc: './images/pinkfloyd.jpeg', name: 'pink floyd' },
];

//Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Card generator function
const cardGenerator = () => {
    const cardData = randomize();
    //Generate the HTML
    cardData.forEach(item => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //Attach the info to the cards
        face.src = item.imgSrc
        //Attach the card to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    });
};

cardGenerator();