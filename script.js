const statusLines = [
  "выглядит спокойно, но внутри уже открыл редактор кода",
  "подозревается в регулярном появлении на YouTube и в эстетичных кадрах",
  "уровень серьезности меняется, уровень присутствия в кадре нет",
  "спорт ушел в прошлое, дисциплина осталась в прошивке",
  "лицо для мемов есть, потенциал для нормальных проектов тоже"
];

const seriousnessValues = [91, 93, 96, 94, 97];
const statusLine = document.getElementById("status-line");
const meterFill = document.getElementById("meter-fill");
const seriousnessScore = document.getElementById("seriousness-score");

let currentIndex = 0;

function renderStatus(index) {
  const value = seriousnessValues[index % seriousnessValues.length];
  statusLine.textContent = statusLines[index % statusLines.length];
  seriousnessScore.textContent = `${value}%`;
  meterFill.style.width = `${value}%`;
}

renderStatus(currentIndex);

setInterval(() => {
  currentIndex += 1;
  renderStatus(currentIndex);
}, 2600);
