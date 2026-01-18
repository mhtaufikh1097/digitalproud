/* ===== CERITA ===== */
const cerita = [
  "Aku ada sesuatu nih 😆",
  "Sebenernya dari tadi mikir mau mulai dari mana…",
  "Soalnya pengen ngucapin ini dengan cara yang beda.",
  "Selamat ulang tahun ya 🤍",
  "Semoga kamu selalu sehat, bahagia, dan semua yang kamu mau segera tercapai.",
  "Jangan lupa, kamu itu berharga.",
  "Happy level up day 🥳✨"
];

let step = 0;
let idx = 0;
let typing = false;
let namaUser = "";

/* ELEMENT */
const gift = document.getElementById("gift");
const nama = document.getElementById("nama");
const halo = document.getElementById("halo");
const story = document.getElementById("story");
const cursor = document.getElementById("cursor");
const bg = document.getElementById("bg");
const emojiLayer = document.querySelector(".emoji-layer");

const btnStart = document.getElementById("btnStart");
const btnHeart = document.getElementById("btnHeart");
const step3 = document.getElementById("step3");

/* STEP 0 */
gift.onclick = () => {
  bg.classList.add("bg-story"); // ganti background + blur
  show(1);
};


/* STEP 1 */
btnStart.onclick = () => {
  namaUser = nama.value || "Kamu";
  halo.innerText = "Hai, " + namaUser + " ✨";
  show(2);
};

/* STEP 2 */
btnHeart.onclick = () => next();

/* STEP 3 TAP */
step3.addEventListener("click", () => next());

/* NAVIGASI */
function next(){
  if(step === 2){
    show(3);
    typeText();
    return;
  }
  if(step === 3 && !typing){
    typeText();
  }
}

/* TRANSISI STEP */
function show(n){
  const currentEl = document.getElementById("step" + step);
  const nextEl = document.getElementById("step" + n);

  if(currentEl){
    currentEl.classList.add("exit");
    setTimeout(() => {
      currentEl.classList.add("hidden");
      currentEl.classList.remove("exit","enter");
    }, 450);
  }

  setTimeout(() => {
    nextEl.classList.remove("hidden");
    nextEl.classList.add("enter");
    setTimeout(() => nextEl.classList.remove("enter"), 700);
  }, 450);

  bg.classList.toggle("bg-in");
  bg.classList.toggle("bg-out");

  step = n;
}

/* TYPING EFFECT */
function typeText(){
  if(idx >= cerita.length) return;

  typing = true;
  story.innerText = "";
  cursor.style.display = "inline-block";
  spawnEmoji();

  const text = cerita[idx];
  let i = 0;

  const t = setInterval(() => {
    story.innerText += text.charAt(i++);
    if(i >= text.length){
      clearInterval(t);
      typing = false;
      idx++;
      cursor.style.display = "none";
    }
  }, 40);
}

/* EMOJI FLOAT */
const emojis = ["❤️","✨","💫","🌸"];

function spawnEmoji(){
  if(!emojiLayer) return;
  emojiLayer.innerHTML = "";

  const count = Math.floor(Math.random() * 2) + 3;
  for(let i=0;i<count;i++){
    const span = document.createElement("span");
    span.className = "emoji";
    span.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    emojiLayer.appendChild(span);
  }
}

/* RIPPLE EFFECT */
document.addEventListener("click", (e)=>{
  const r = document.createElement("div");
  r.className = "ripple";
  r.style.left = e.clientX + "px";
  r.style.top = e.clientY + "px";
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 600);
});
