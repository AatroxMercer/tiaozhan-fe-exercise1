var whacAMole = new Vue({
  el: '#game-container',
  data: {
    count: 0,
    rank: 0,
    moleStatus: [false, false, false, false, false, false, false, false, false, false],
    gameProcess: null,
    gameOver: false
  },
  methods: {
    whac: function(event) {
      if (this.gameOver) {
        return;
      }
      var index = event.target.id;
      if (this.moleStatus[index]) {
        this.rank++;
        this.count--;
        Vue.set(this.moleStatus, index, false);
      }
    },
    gameStart: function() {
      for (let i in this.moleStatus) {
        this.moleStatus[i] = false;
      }
      this.count = 0;
      this.rank = 0;
      this.gameOver = false;
      this.gameProcess = setInterval(this.render, 300);
    },
    render: function() {
      let nextMole = this.getNextMole();
      Vue.set(this.moleStatus, nextMole, true);
      this.count++;
      if (this.count >= 6) {
        this.gameOver = true;
        window.clearInterval(this.gameProcess);
        this.gameProcess = null;
        alert(`Game Over! You have whaced ${this.rank} moles`);
      }
    },
    getNextMole: function() {
      while (true) {
        let nextMole = parseInt(Math.random() * 9) + 1;
        if (!this.moleStatus[nextMole]) {
          return nextMole;
        }
      }
    }
  }
});