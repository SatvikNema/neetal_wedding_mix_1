const tiemstampConfig = [
  {
    name: "Jaanu Meri Jaan",
    id: "Jaanu Meri Jaan",
    timestamp: 0,
  },
  {
    name: "Aage peeche ghoomte ho bhavro ki tarah",
    id: "Aage peeche ghoomte ho bhavro ki tarah",
    timestamp: 41,
  },
  {
    name: "Ude jab jab zulfe teri",
    id: "Ude jab jab zulfe teri",
    timestamp: 90,
  },
  {
    name: "Soni de nakhre",
    id: "Soni de nakhre",
    timestamp: 136,
  },
  {
    name: "Tare gin gin",
    id: "Tare gin gin",
    timestamp: 202,
  },
  {
    name: "Gallan gudiya",
    id: "Gallan gudiya",
    timestamp: 258,
  },
  {
    name: "Shaba shaba",
    id: "Shaba shaba",
    timestamp: 340,
  },
];

const createButton = ({ name, timestamp, id }) => {
  const div = document.createElement("div");
  const button = document.createElement("button");
  button.id = id;
  button.innerText = name;
  button.onclick = () => playTrack(timestamp, id);
  div.appendChild(button);
  return div;
};

const createButtons = () => {
  const buttons = tiemstampConfig.map((config) => createButton(config));
  document.body.append(...buttons);
};

function playTrack(secondsToPlayFrom) {
  const myAudio = document.getElementById("track1");
  myAudio.currentTime = secondsToPlayFrom;
  myAudio.play();
}

// const addPlayFunction = () => {
//   tiemstampConfig.forEach(({ text, id, timestamp }) => {
//     // const button = document.getElementById(id);
//     // button.onclick = playTrack(timestamp, id);
//     button.onclick = console.log("")

//   });
// };

createButtons();
// addPlayFunction();
