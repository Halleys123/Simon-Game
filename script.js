window.addEventListener("load", (e) => {
  const btns = document.querySelector(".btns");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const btn3 = document.querySelector(".btn3");
  const btn0 = document.querySelector(".btn0");
  const points = document.querySelector(".points");

  let colors = ["red", "green", "purple", "yellow"];
  let orderArr = [];
  let arr = [];
  let score = 0;
  let j = 0;

  function reset() {
    btn1.style.backgroundColor = "#555555";
    btn2.style.backgroundColor = "#555555";
    btn3.style.backgroundColor = "#555555";
    btn0.style.backgroundColor = "#555555";
    j = 0;
    orderArr = [];
  }
  function check() {
    if (orderArr.length == arr.length) {
      if (JSON.stringify(orderArr) == JSON.stringify(arr)) {
        score = score + 1;
      } else {
        score = score - 1;
      }
      points.innerHTML = `${score}`;
      reset();
    }
  }
  function start() {
    reset();
    arr = [];
    let i = 0;
    while (arr.length != 4) {
      let a = Math.floor(Math.random() * 4);
      if (!arr.includes(a.toString())) arr.push(a.toString());
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
    console.log(arr);
  }

  reset();

  document.addEventListener("keypress", (e) => {
    if (e.key == "s" || "S") start();
    if (e.key == "r" || "R") reset();
  });

  btns.addEventListener("click", (e) => {
    orderArr.push(e.target.id);
    e.target.style.backgroundColor = `${colors[j]}`;
    j++;
    console.log(orderArr);
    check();
  });
});
