var ninjaList = new Vue({
  el: '#main',
  data: {
    ninjas: [],
    count: 0,
    newNinja: {},
    deadNinja: null,
  },
  computed: {
    isEmpty: function() {
      return this.ninjas.length == 0;
    }
  },
  methods: {
    addNinja: function() {
      this.count++;
      console.log(this.newNinja);
      this.ninjas.push(this.newNinja);
    },
    deleteNinja: function() {
      let index = this.searchNinja(this.deadNinja);
      console.log(index);
      if (index >= 0) {
        this.ninjas.splice(index);
      } else {
        this.deadNinja = null;
        alert("404 not found");
      }
    },
    searchNinja: function(id) {
      for (let i = 0; i < this.ninjas.length; i++) {
        let ninja = this.ninjas[i];
        if (ninja.id == id) {
          return i;
        }
      }
      return -1;
    }
  },
});