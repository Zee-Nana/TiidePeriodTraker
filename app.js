new Vue({
  el: "#app2",
  data: {
    email: "",
    password: ""
  },
  methods: {
    handleSubmit: function() {
      let password = this.password.toLowerCase().trim();
      let email = this.email.toLowerCase().trim();
      if (password === "admin" && email === "admin@gmail.com") {
        window.location.replace("./page1.html");
      }
    }
  }
});
