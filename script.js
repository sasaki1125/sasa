const targetElement = document.querySelectorAll(".show1");
document.addEventListener("scroll",function() {
  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .9
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})


gsap.from("#secAimg2",{ // 動かす要素
  
  scrollTrigger: {
      trigger: "#secAimg2", // この要素まできたらアニメーション開始
      start: "top 30%", // ビューポートの設定
      end: 'top 30%',
      scrub: true,
      // markers: true // 検証用のマーカーを表示
  },
  duration: 15,
  opacity: 0,
});

gsap.from("#secAimg3",{ // 動かす要素
  
  scrollTrigger: {
      trigger: "#secAimg3", // この要素まできたらアニメーション開始
      start: "top 30%", // ビューポートの設定
      end: 'top 30%',
      scrub: true,
      // markers: true // 検証用のマーカーを表示
  },
  duration: 15,
  opacity: 0,
});


// secB 文字
// const targetElement = document.querySelectorAll(".secBtext");
// document.addEventListener("scroll",function() {
//   for (let i = 0; i < targetElement.length; i++){
//     const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .9
//     if (window.innerHeight > getElementDistance) {
//       targetElement[i].classList.add("show4");
//     }
//   }
// })
