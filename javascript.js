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
        ],
        listaBis: [
            {text:"Home"},
            {text:"Rates"},
            {text:"Testimonials"},
            {text:"Blog"},
            {text:"Free Quote"}
        ],
        listaTRIS: [
            {textTRIS:"Heading Out To College?"},
            {textTRIS:"Moving Your Business?"},
            {textTRIS:"Outstanding Quality"},
            {textTRIS:"Cost of Moving"},
            {textTRIS:"Best Moving Tips"},

                

        ]

    }
})
Vue.config.devtools = true;
