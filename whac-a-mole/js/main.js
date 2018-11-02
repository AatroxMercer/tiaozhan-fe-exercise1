var whacAMole = new Vue({
  el: '#game-container',
  data: {
    count: 0,
    rank: 0,
    moleStatus: [false, false, false, false, false, false, false, false, false, false],
    gameProcess: null,
    gameOver: false,
    gameSpeed: 300
  },
  methods: {
    whac: function(event) {
      this.$refs.hit.pause();
      this.$refs.hit.play();
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
      setTimeout(this.render, this.gameSpeed);
    },
    render: function() {
      let nextMole = this.getNextMole();
      this.count++;
      if (this.count >= 6) {
        this.gameOver = true;
        alert(`Game Over! You have whaced ${this.rank} moles`);
      }
      if (!this.gameOver) {
        Vue.set(this.moleStatus, nextMole, true);
        setTimeout(this.render, this.gameSpeed);
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