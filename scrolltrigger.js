function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = -25;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 25;
  } else if (elem.classList.contains("gs_reveal_fromBottom")) {
    x = 0;
    y = 100;
  }

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".content", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
  gsap.from(".banner-image", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
  gsap.from(".club_navigator", {
    scrollTrigger: {
      trigger: ".our_club_heading",
      start: "top center",
      toggleActions: "restart none resume none",
    },
    opacity: 0,
    duration: 1,
    scale: 0.9,
    ease: "back",
  });
  gsap.from(".club_info", {
    scrollTrigger: {
      trigger: ".our_club_heading",
      start: "top center",
      toggleActions: "restart none resume none",
    },
    opacity: 0,
    duration: 1,
    scale: 0.9,
    ease: "back",
  });
  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem);

    ScrollTrigger.create({
      trigger: elem,
      ease:"back",
      duration:1,
      opacity: 0,
      // markers: true,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
  });
});
