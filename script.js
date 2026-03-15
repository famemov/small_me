const profile = {
  name: "Тимофей",
  intro:
    "Мне 18 лет. Я решил рассказать о себе не обычным текстом, а через небольшой сайт. Сейчас мне особенно интересно развиваться в digital-среде, пробовать себя в программировании и собирать собственный путь из навыков, дисциплины и реальной практики.",
  focusTitle: "Расти в технологиях и не терять характер",
  focusText:
    "Я немного программист, люблю разбираться в том, как все устроено, и постепенно превращаю интерес к коду в осознанное направление. Спортивное прошлое тоже остается со мной: оно дало привычку работать на результат и не сдаваться после первой ошибки.",
  quote:
    "Мне близок путь, где идеи проверяются делом, а рост строится на дисциплине, практике и сильном окружении.",
  facts: [
    "Мне 18, и сейчас я на этапе, где хочется не просто пробовать всё подряд, а выстраивать свой вектор развития.",
    "Раньше я был баскетболистом, поэтому хорошо понимаю, что такое режим, команда и постоянная работа над собой.",
    "Мне нравится программирование, потому что в нем сочетаются логика, самостоятельность и возможность создавать что-то реальное своими руками."
  ],
  interests: [
    {
      tag: "код",
      title: "Интерес к программированию",
      text:
        "Мне нравится разбираться в структуре, логике и деталях. Я не называю себя опытным разработчиком, но мне реально интересно расти в этом направлении и становиться сильнее через практику."
    },
    {
      tag: "спорт",
      title: "Спортивный бэкграунд",
      text:
        "Баскетбол научил меня выдержке, ответственности и пониманию, что результат редко приходит сразу. Эти качества я переношу и в учебу, и в новые проекты."
    },
    {
      tag: "рост",
      title: "Желание стать сильнее",
      text:
        "Для меня важно оказаться в среде, где можно быстрее расти, получать обратную связь и учиться не только знаниям, но и мышлению."
    }
  ],
  timeline: [
    {
      step: "сейчас",
      title: "Собираю фундамент",
      text:
        "Я нахожусь в начале серьезного пути и хочу выстроить для себя крепкую базу: навыки, системность и понимание, в чем именно могу быть полезен."
    },
    {
      step: "дальше",
      title: "Хочу учиться у сильных людей",
      text:
        "Наставничество для меня важно потому, что оно помогает экономить время, замечать свои слабые места и двигаться вперед не вслепую, а осознанно."
    },
    {
      step: "цель",
      title: "Стать человеком, который умеет доводить до результата",
      text:
        "Я хочу вырасти в того, кто умеет сочетать дисциплину, техническое мышление и внутреннюю мотивацию, а потом применять это в реальных задачах и проектах."
    }
  ],
  links: [
    {
      kind: "youtube",
      title: "YouTube",
      text: "Здесь я делюсь своими мыслями о развитии, технологиях и пути, который хочу пройти. Это не просто канал, а место, где я стараюсь быть максимально открытым и полезным для тех, кто тоже хочет расти.",
      href: "https://youtube.com//@14devstvenic"
    },
    {
      kind: "telegram",
      title: "Telegram",
      text: "Тут вы можете связаться со мной напрямую, задать вопросы или просто посмотреть, о чем я думаю в повседневной жизни. Я стараюсь быть активным и открытым в этом канале, делиться не только успехами, но и тем, что помогает мне расти.",
      href: "https://t.me/KaPl1k"
    },
    {
      kind: "GITHUB",
      title: "GitHub",
      text: "На GitHub я выкладываю свои проекты, эксперименты и код, над которым работаю. Это не просто портфолио, а место, где я стараюсь показать свой процесс обучения и развития в программировании. Я открыт для коллабораций и всегда рад новым идеям и предложениям.",
      href: "https://github.com/famemov"
    }
  ],
  footer:
    "Этот сайт я сделал как короткую самопрезентацию: здесь видно, что для меня важны развитие, дисциплина, технологии и путь, который я хочу пройти рядом с сильным окружением."
};

document.getElementById("hero-name").textContent = profile.name;
document.getElementById("hero-intro").textContent = profile.intro;
document.getElementById("focus-title").textContent = profile.focusTitle;
document.getElementById("focus-text").textContent = profile.focusText;
document.getElementById("quote-text").textContent = profile.quote;
document.getElementById("footer-note").textContent = profile.footer;

const factList = document.getElementById("fact-list");
profile.facts.forEach((fact, index) => {
  const item = document.createElement("div");
  item.className = `fact-item reveal delay-${Math.min(index, 3)}`;
  item.textContent = fact;
  factList.appendChild(item);
});

const interestGrid = document.getElementById("interest-grid");
profile.interests.forEach((interest, index) => {
  const card = document.createElement("article");
  card.className = `interest-card reveal delay-${Math.min(index, 3)}`;
  card.innerHTML = `
    <span class="interest-tag">${interest.tag}</span>
    <h3>${interest.title}</h3>
    <p>${interest.text}</p>
  `;
  interestGrid.appendChild(card);
});

const timeline = document.getElementById("timeline");
profile.timeline.forEach((item, index) => {
  const node = document.createElement("article");
  node.className = `timeline-item reveal delay-${Math.min(index, 3)}`;
  node.innerHTML = `
    <div class="timeline-step">${item.step}</div>
    <div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `;
  timeline.appendChild(node);
});

const linksGrid = document.getElementById("links-grid");
profile.links.forEach((link, index) => {
  const card = document.createElement("a");
  card.className = `link-card reveal delay-${Math.min(index, 3)}`;
  card.href = link.href;
  card.target = "_blank";
  card.rel = "noreferrer";
  card.innerHTML = `
    <span class="link-kind">${link.kind}</span>
    <h3>${link.title}</h3>
    <p>${link.text}</p>
    <span class="link-arrow">открыть -></span>
  `;
  linksGrid.appendChild(card);
});
