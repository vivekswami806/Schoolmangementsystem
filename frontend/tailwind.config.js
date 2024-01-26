/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      //MIN-WIDTH

      xs: "350px",
      //=> @media (min-width: 350px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      //MAX-WIDTH

      "max-2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "max-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
      "max-xs": { max: "350px" },
      // => @media (max-width: 350px) { ... }
    },

    extend: {
      backgroundImage: {
        "mainBackgroundImg": "linear-gradient(180deg, #5362F8, white)",
        "companylogoimg": "./src/assets/companylogoimg.png",
        "mainbg": "url('./src/assets/mainBg.jpg')",
      },
    },
  },
  plugins: [],
};
