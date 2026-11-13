const translations = {
  uz: {
    navAbout:"Men haqimda",navWork:"Ishlarim",navContact:"Aloqa",availability:"Yangi imkoniyatlarga ochiqman",hello:"Salom, men",
    heroTitle:"G‘oyalarni raqamli<br><em>tajribaga</em> aylantiraman.",heroDescription:"Men kreativ fikrlash, texnologiya va sodda dizayn kesishgan nuqtada ishlashni yoqtiraman. Har bir loyiha — yangi imkoniyat.",
    seeWork:"Ishlarimni ko‘rish",contactMe:"Men bilan bog‘lanish <span>↗</span>",scroll:"PASTGA SURING",portraitCaption:"O‘Z YO‘LIMNI YARATYAPMAN",creativeMind:"CREATIVE<br> MINDSET",
    stripOne:"QIZIQUVCHANLIK",stripTwo:"IJODKORLIK",stripThree:"DOIMIY RIVOJLANISH",aboutLabel:"MEN HAQIMDA",aboutTitle:"Katta g‘oyalar<br> oddiy <em>qadamdan</em><br> boshlanadi.",
    aboutP1:"Men Ismoilman. Yangi narsalarni o‘rganish, muammolarga noodatiy yechim topish va foydali raqamli mahsulotlar yaratish menga ilhom beradi.",
    aboutP2:"Hozir o‘z bilimlarimni rivojlantiryapman va har bir yangi tajribani o‘sish uchun imkoniyat deb bilaman.",
    principle1:"Qiziquvchanlik",principle1d:"Savol berishdan va yangi yo‘llarni sinashdan to‘xtamayman.",principle2:"Aniqlik",principle2d:"Har bir detal maqsadga xizmat qilishi kerak.",principle3:"Rivojlanish",principle3d:"Kichik qadamlar katta natijalarga olib boradi.",
    workLabel:"TANLANGAN YO‘NALISHLAR",workTitle:"Nimalar bilan<br><em>shug‘ullanaman?</em>",workIntro:"Qiziqishlarim va o‘rganayotgan yo‘nalishlarim — kelajakdagi loyihalarim uchun poydevor.",
    work1:"Web va texnologiya",work1d:"Raqamli olam, zamonaviy web va yangi texnologiyalarni o‘rganish.",work2:"Kreativ fikrlash",work2d:"Oddiy masalalarga yangicha nigoh bilan qarash va g‘oyalarni izlash.",work3:"Doimiy o‘sish",work3d:"Bilim, tajriba va ko‘nikmalarni bosqichma-bosqich rivojlantirish.",
    workNote:"* Bu sahifa shaxsiy portfolio konsepti. Yangi loyihalar tayyor bo‘lgani sari shu yerda paydo bo‘ladi.",contactLabel:"ALOQA",contactOverline:"BIROR G‘OYANGIZ BORMI?",contactTitle:"Keling, birga<br><em>nimadir yaratamiz.</em>",sayHello:"SALOM<br>DEYISH",
    contactText:"Hamkorlik, savol yoki shunchaki suhbat uchun yozing.",rights:"BARCHA HUQUQLAR HIMOYALANGAN.",backTop:"YUQORIGA ↑"
  },
  en: {
    navAbout:"About",navWork:"What I do",navContact:"Contact",availability:"Open to new opportunities",hello:"Hello, I'm",
    heroTitle:"Turning ideas into<br><em>digital experiences.</em>",heroDescription:"I enjoy working where creative thinking, technology and simple design meet. Every project is a new opportunity.",
    seeWork:"Explore my work",contactMe:"Get in touch <span>↗</span>",scroll:"SCROLL TO EXPLORE",portraitCaption:"CREATING MY OWN PATH",creativeMind:"CREATIVE<br> MINDSET",
    stripOne:"CURIOSITY",stripTwo:"CREATIVITY",stripThree:"CONTINUOUS GROWTH",aboutLabel:"ABOUT ME",aboutTitle:"Big ideas<br> start with a <em>small step.</em>",
    aboutP1:"I'm Ismoil. Learning new things, finding fresh solutions to problems and creating useful digital products are what inspire me.",
    aboutP2:"I'm currently developing my knowledge and see every new experience as an opportunity to grow.",
    principle1:"Curiosity",principle1d:"I keep asking questions and exploring new ways forward.",principle2:"Clarity",principle2d:"Every detail should serve a clear purpose.",principle3:"Growth",principle3d:"Small steps lead to meaningful progress.",
    workLabel:"AREAS OF INTEREST",workTitle:"What am I<br><em>into?</em>",workIntro:"My interests and the fields I'm exploring are the foundation for future projects.",
    work1:"Web & technology",work1d:"Exploring the digital world, modern web and emerging technologies.",work2:"Creative thinking",work2d:"Looking at everyday challenges from a fresh perspective and finding ideas.",work3:"Continuous growth",work3d:"Developing knowledge, experience and skills one step at a time.",
    workNote:"* This is a personal portfolio concept. New projects will appear here as they take shape.",contactLabel:"CONTACT",contactOverline:"HAVE AN IDEA IN MIND?",contactTitle:"Let's create<br><em>something together.</em>",sayHello:"SAY<br>HELLO",
    contactText:"Reach out for collaboration, a question or just a conversation.",rights:"ALL RIGHTS RESERVED.",backTop:"BACK TO TOP ↑"
  }
};
let language = "uz";
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[next][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  languageToggle.innerHTML = next === "uz" ? "<strong>UZ</strong> <span>／</span> EN" : "UZ <span>／</span> <strong>EN</strong>";
}
languageToggle.addEventListener("click", () => setLanguage(language === "uz" ? "en" : "uz"));

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.querySelector(".theme-icon").textContent = theme === "dark" ? "☀" : "☾";
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#141612" : "#f5f5f2";
  localStorage.setItem("ismoil-theme", theme);
}
themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
setTheme(localStorage.getItem("ismoil-theme") || "light");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
