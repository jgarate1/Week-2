const app = {
  data() {
    return {
      title: "Inventory App",
      products: [
        {
          id: 0,
          name: "Apple",
          qty: 3,
        },
        {
          id: 1,
          name: "Orange",
          qty: 5,
        },
        {
          id: 2,
          name: "Tortilla",
          qty: 10,
        },
      ],
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    rest() {
      this.counter--;
    },
  },
};

Vue.createApp(app).mount("#app");
