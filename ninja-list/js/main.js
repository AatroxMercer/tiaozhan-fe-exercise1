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
    createNinja(ninja) {
      let temp = {};
      temp.id = ninja.id;
      temp.name = ninja.name;
      temp.skills = ninja.skills;
      return temp;
    },
    sortNinja: function(left, right) {
      return left.id - right.id;
    },
    addNinja: function() {
      this.count++;
      console.log(this.newNinja);
      this.ninjas.push((this.createNinja(this.newNinja)));
      this.ninjas.sort(this.sortNinja);
    },
    deleteNinja: function() {
      let index = this.searchNinja(this.deadNinja);
      console.log(index);
      if (index >= 0) {
        this.ninjas.splice(index, index);
        this.count--;
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