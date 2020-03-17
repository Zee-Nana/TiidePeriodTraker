new Vue({
    el: "#app",
    data: {
       firstName: null,
       lastName: null,
       gender: null,
       dob: null,
       email: null,
       password: null,
       reEnter: null, 
    },
    methods: {
        submit (e) {
            alert("Account created successfully")
            e.preventDefault();
        }
    }
});