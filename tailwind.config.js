/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                // Add your custom colors here
                background: "#EAEDED",
                light_blue: "#232F3A",
                yellow: "#FEBD69",
                defoult: "#131921"
                // Add more custom colors as needed
            },

        },
    },
    plugins: [],
}
