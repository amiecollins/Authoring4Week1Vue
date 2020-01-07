import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {

    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",
            collection: [
                { name: "Amie", role: "Front-end Developer"},
                { name: "Sherry", role: "Teacher" },
                { name: "Larry", role: "Business Owner" }
            ]
        },
        methods: {
            logClicked() {
                console.log("clicked on an element");
            }
        }
    }).$mount("#app");

})();