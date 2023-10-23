const timer = {
  currentTime: 0,
  showTime: function () {
    console.log(this.currentTime);
  },
  addTen: function () {
    this.currentTime += 10;
    this.showTime();
  },
};

setTimeout(() => {
  timer.addTen();
}, 500);
