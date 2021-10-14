module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Overpass, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      mono: "Overpass Mono, monospace",
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        "2xl": "1340px",
      },
      screens: {
        "2xl": "1340px",
        "3xl": "1536px",
      },
      colors: {
        gray: {
          darkest: "#30353E",
          dark: "#444444",
          DEFAULT: "#5C626F",
          light: "#707376",
          lightest: "#999999",
        },
        green: {
          dark: "#17DA88",
          DEFAULT: "#00EF8B",
        },
        blue: {
          DEFAULT: "#1972A4",
        },
        gold: {
          DEFAULT: "#E67B49",
        },
        purple: {
          DEFAULT: "#512BBD",
        },
      },
      minWidth: {
        40: "10rem",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}
