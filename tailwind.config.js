module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Heinemann"],
      body: ["Roboto"],
    },
    extend: {
      colors: {
        midnightBlue: {
          75: "#424F73",
          DEFAULT: "#031545",
          100: "#031545",
        },
        havenBlue: "#0076B8",
      },
    },
  },
};
