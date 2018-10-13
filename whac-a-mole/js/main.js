var whacAMole = new Vue({
  el: '#game-container',
  data: {
    count: 0,
    rank: 0,
    moleStatus: [false, false, false, false, false, false, false, false, false, false],
    gameProcess: null
  },
  created: function() {
    alert("Welcome to play Whac-a-Mole!");
  },
  mounted: function() {
    this.gameRuning();
  },
  methods: {
    whac: function(event) {
      // alert(event.target.id);
      var index = event.target.id;
      if (this.moleStatus[index]) {
        this.rank++;
        this.count--;
        Vue.set(this.moleStatus, index, false);
      }
    },
    gameRuning: function() {
      let _this = this;
      this.gameProcess = setTimeout(() => {
        let nextMole;
        while (true) {
          nextMole = parseInt(Math.random() * 9) + 1;
          console.log(nextMole);
          if (!this.moleStatus[nextMole]) {
            Vue.set(this.moleStatus, nextMole, true);
            this.count++;
            if (this.count > 6) {
              alert("Game Over!\nYou whac " + this.rank + " moles");
              Window.clearTimeout(this.gameProcess);
            }
            break;
          }
        }
        this.gameRuning();
      }, 300);
    }
  }
});