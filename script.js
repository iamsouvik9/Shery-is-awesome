// Shery.imageEffect("#back", {
//   style: 6,
//   config: {
//     noiseDetail: { value: 28.1, range: [0, 100] },
//     distortionAmount: { value: 3.22, range: [0, 10] },
//     scale: { value: 71.07, range: [0, 100] },
//     speed: { value: 0.36, range: [0, 1] },
//     aspect: { value: 2.059782538386964 },
//     gooey: { value: true },
//     infiniteGooey: { value: false },
//     durationOut: { value: 1, range: [0.1, 5] },
//     durationIn: { value: 1.5, range: [0.1, 5] },
//     displaceAmount: { value: 0.5 },
//     masker: { value: true },
//     maskVal: { value: 1.96, range: [1, 5] },
//     scrollType: { value: 0 },
//     geoVertex: { range: [1, 64], value: 1 },
//     noEffectGooey: { value: true },
//     onMouse: { value: 0 },
//     noise_speed: { value: 0.2, range: [0, 10] },
//     metaball: { value: 0.2, range: [0, 2] },
//     discard_threshold: { value: 0.5, range: [0, 1] },
//     antialias_threshold: { value: 0, range: [0, 0.1] },
//     noise_height: { value: 0.5, range: [0, 2] },
//     noise_scale: { value: 10, range: [0, 100] },
//   },
//   gooey: true,
// });

Shery.imageEffect("#back", {
  style: 6,
  config: {
    noiseDetail: { value: 7.44, range: [0, 100] },
    distortionAmount: { value: 2.98, range: [0, 10] },
    scale: { value: 36.36, range: [0, 100] },
    speed: { value: 0.79, range: [0, 1] },
    aspect: { value: 2.059782538386964 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  var h1s = elems.querySelectorAll("h1");
  var index = 0;
  var animating = false;
  document.querySelector("#main").addEventListener("click", function () {
    gsap.to(h1s[index], {
      top: "-=100%",
      ease: Expo.easeInOut(),
      duration: 1,
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" });
      },
    });
    index === h1s.length - 1 ? (index = 0) : index++;
    gsap.to(h1s[index], {
      top: "=100%",
      ease: Expo.easeInOut(),
      duration: 1,
    });
  });
});
