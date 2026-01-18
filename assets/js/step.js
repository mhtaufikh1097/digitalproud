const steps = document.querySelectorAll(".step");
let current = 0;
let recipientName = "";

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
  current = index;
}

/* STEP 0 : GIFT */
const gift = document.getElementById("gift");
if (gift) {
  gift.addEventListener("click", (e) => {
    e.stopPropagation();
    showStep(1);
  });
}

/* STEP 1 : INPUT NAME */
const nameBtn = document.getElementById("nameSubmit");
if (nameBtn) {
  nameBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const input = document.getElementById("nameInput").value.trim();
    recipientName = input || "Someone Special";
    document.getElementById("recipient-name").innerText = recipientName;
    showStep(2);
  });
}

/* GLOBAL CLICK */
document.addEventListener("click", (e) => {

  // STEP 2 : LOVE REQUIRED
  if (current === 2) {
    if (e.target.id === "love") {
      showStep(3);
    }
    return;
  }

  // STEP >=3 : click anywhere
  if (current >= 3 && current < steps.length - 1) {
    showStep(current + 1);
  }
});
