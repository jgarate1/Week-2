const app = {
  data() {
    return {
      title: "Inventory App",
      newProduct: "",
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
      ],
    };
  },
  methods: {
    addProduct() {
      if (this.newProduct.length > 0) {
        this.products.push({
          id: 0,
          name: this.newProduct,
          qty: 0,
        });
      }
    },
  },
};

Vue.createApp(app).mount("#app");
