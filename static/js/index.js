async function sleep(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}
async function applyOpacity(element, delay) {
  if (element) {
    element.style.opacity = 1;
    await sleep(delay); // Подождать 1 секунду
  }
}
Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  },
});
window.addEventListener("load", async () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#scroll1", {
    opacity: 1,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#scroll1",
      start: "50% bottom", // when the top of the trigger hits the top of the viewport
    },
  });
  gsap.to("#scroll2", {
    opacity: 1,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#scroll2",
      start: "50% bottom", // when the top of the trigger hits the top of the viewport
    },
  });
  gsap.to("#scroll3", {
    opacity: 1,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#scroll3",
      start: "50% bottom", // when the top of the trigger hits the top of the viewport
    },
  });
  gsap.to("#scroll4", {
    opacity: 1,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#scroll4",
      start: "50% bottom", // when the top of the trigger hits the top of the viewport
    },
  });
  gsap.to("#scroll5", {
    opacity: 1,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#scroll5",
      start: "50% bottom", // when the top of the trigger hits the top of the viewport
    },
  });
  gsap.to("#scroll6", {
    opacity: 1,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#scroll6",
      start: "50% bottom", // when the top of the trigger hits the top of the viewport
    },
  });
  gsap.to("#scroll7", {
    opacity: 1,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#scroll7",
      start: "50% bottom", // when the top of the trigger hits the top of the viewport
    },
  });

  let moon_el = document.getElementById("MOON");
  let elipse_el = document.getElementById("ELIPSE");
  let html = document.getElementById("HTML");
  let body = document.getElementById("BODY");
  let header_texts = document.querySelectorAll(".header_text_row");
  let social_buttons = document.querySelector(".header_social_buttons");
  let safepad = document.getElementById("SAFEPAD");
  document.getElementById("LOADING").remove();
  9;
  await sleep(1000);
  for (const row of header_texts) {
    const h1 = row.querySelector("h1");
    applyOpacity(h1, 1000);
  }

  for (const row of header_texts) {
    const spans = row.querySelectorAll("span"); // Получаем все span в текущей строке
    for (const span of spans) {
      await applyOpacity(span, 1); // Применить к span
    }
  }

  await sleep(1000); // Подождать 1 секунду перед появлением span

  safepad.style.opacity = 1;
  applyOpacity(social_buttons, 1000);
  safepad.classList.toggle("SHOW_SAFEPAD");
  elipse_el.classList.toggle("SHOW_ELIPSE");
  moon_el.classList.toggle("SHOW_MOON");
  await sleep(1500);
  html.style.overflowY = "scroll";
  body.style.overflowY = "scroll";
  document.ontouchmove = null;
  const videoElements = document.querySelectorAll("video");

  videoElements.forEach((videoElement) => {
    if (videoElement.playing) {
      // video is already playing so do nothing
    } else {
      // video is not playing
      // so play video now
      videoElement.play();
    }
  });
});
