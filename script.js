window.addEventListener("load", (e) => {
  const btns = document.querySelector(".btns");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const btn3 = document.querySelector(".btn3");
  const btn0 = document.querySelector(".btn0");

  let colors = ["red", "green", "purple", "yellow"];
  let orderArr = [];
  let arr = [];
  let score = 0;
  let startCount = 0;
  let j = 0;

  function reset() {
    btn1.style.backgroundColor = "#555555";
    btn2.style.backgroundColor = "#555555";
    btn3.style.backgroundColor = "#555555";
    btn0.style.backgroundColor = "#555555";
    startCount = 0;
    j = 0;
  }

  function start() {
    reset();
    startCount = 1;
    arr = [];
    let i = 0;

    while (arr.length != 4) {
      let a = Math.floor(Math.random() * 4);
      if (!arr.includes(a)) arr.push(a);
    }

    const time = setInterval((e) => {
      document.querySelector(
        `.btn${arr[i]}`
      ).style.backgroundColor = `${colors[i]}`;
      i++;
      if (i == 4) clearTimeout(time);
    }, 500);

    setTimeout(() => {
      reset();
    }, 3000);
  }

  reset();

  document.addEventListener("keydown", (e) => {
    if (e.key == "s" || "S") start();
    if (e.key == "r" || "R") reset();
  });

  btns.addEventListener("click", (e) => {
    console.log(this);
    if (orderArr.length == 4) {
      if (orderArr != arr) {
        orderArr = [];
        score = score - 1;
        reset();
        console.log(score);
      }
      if (orderArr == arr) {
        score = score + 1;
      }
    } else {
      if (startCount) {
        orderArr.push(e.target.id);
        e.target.style.backgroundColor = `${colors[j]}`;
        j++;
        console.log(orderArr);
        console.log(score);
      }
    }
  });
});
