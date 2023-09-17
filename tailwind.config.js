const plugin = require("tailwindcss/plugin");


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["SpaceMono-Regular", "sans-serif"]
            },
            colors: {
                yellow: "#FFBF00",
              }
        },

        container: {

            center: true
        }
    },

    daisyui: {
        themes: ["light", "black"],
      },

    plugins: [
        require("daisyui"),
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".center-flex": {
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center",
                },

                ".center-grid": {
                    display: "grid",
                    "justify-content": "center",
                    "align-items": "center",
                },

                ".center-x": {
                    display: "flex",
                    "align-items": "center",
                },
            });
        }),
        
    ],
};
