var app = new Vue ({ 
    el: "#app",
    data: {
        lista: [ 
            {message: "Home"},
            {message: "Rates"},
            {message: "Testimonials"},
            {message: "FAQ"},
            {message: "Blog"},
            {message: "Contact"},
            {message: "FREE QUOTE"}
        ]

    }
})
Vue.config.devtools = true;
