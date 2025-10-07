const button = document.getElementById('change_text');
const paragraph = document.getElementById('dev-text');

const messages = [
  "I also build secure, scalable APIs and deploy to AWS ☁️",
  "Clean backend, fast frontend — fullstack power 💻",
  "Python, Django, Linux — my holy warzone 🐍",
  "Cloud-native apps? Already done it ☁️",
  "DevOps pipeline? I automate that 🛠️",
  "Broken script? I debug that within 1h✨",
    "Matcha drinker fr love matcha🤍",
];

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  paragraph.innerText = messages[randomIndex];
});
