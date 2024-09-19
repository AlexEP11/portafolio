/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#EEEEEE ",
                secundary: "#222831",
                ocean: "#00ADB5",
                light_dark: "#393E46",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
