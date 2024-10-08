/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1158px",
    },
    fontFamily: {
      "poppins-regular": ["Poppins-Regular", "sans-serif"],
      "poppins-medium": ["Poppins-Medium", "sans-serif"],
      "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
    },
    extend: {
      colors: {
        "text-color": "#dcddde",
        "bg-card-color": "#1d232a",
      },
      boxShadow: {
        "custom-inset":
          "rgb(16, 14, 14) 0px 0px 7px inset, rgba(28, 28, 28, 0.49) 3px 3px 5px inset",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents, theme }) => {
      const paddingX = "16px";
      const paddingXLg = "15px";
      addComponents({
        body: {
          paddingTop: "10px",
          backgroundColor: "#111111",
          color: theme("colors.text-color"),
        },
        label: {
          cursor: "pointer",
        },

        ".container": {
          minWidth: "320px",
          maxWidth: "390px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: paddingX,
          paddingRight: paddingX,
          "@screen md": {
            paddingLeft: paddingX,
            paddingRight: paddingX,
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: paddingXLg,
            paddingRight: paddingXLg,
            maxWidth: "1158px",
          },
        },

        ".nav-link": {
          display: "inline-block",
          position: "relative",
          padding: "6px 20px",
          borderRadius: "18px",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#3b3941",
          },
          "&:focus-visible": {
            backgroundColor: "#3b3941",
          },
          "&.active": {
            backgroundColor: "black",
          },
        },

        ".link": {
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "#4278c8",
            transition: "transform 0.7s",
            transformOrigin: "right",
            transform: "scaleX(0)",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
          "&:focus-visible::after": {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        },

        ".custom-radio": {
          position: "relative",
          display: "inline-block",
          height: "16px",
          width: "16px",
          backgroundColor: "white",
          border: "2px solid #133f85",
          borderRadius: "50%",
          verticalAlign: "text-top",
          marginRight: "5px",
          "&::before": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) scale(0)",
            content: "''",

            width: "8px",
            height: "8px",
            backgroundColor: "#24252A",
            borderRadius: "50%",
            transition: "0.2s ease-in",
          },
        },
        ".real-radio": {
          width: "0",
          height: "0",
          position: "absolute",
          opacity: "0",
          zIndex: "-1",
        },
        ".real-radio:checked + .custom-radio::before": {
          transform: "translate(-50%,-50%) scale(1)",
        },
        ".scroll-up-btn": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: "0",
          visibility: "hidden",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "5px",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          backgroundColor: "#3b3941",
          transition: "all 300ms ease-in",
          "&:hover::after": {
            transformOrigin: "bottom",
            transform: "scaleX(1)",
          },
          "&:focus-visible::after": {
            transformOrigin: "bottom",
            transform: "scaleX(1)",
          },
          "&::after": {
            zIndex: "-1",
            content: "''",
            position: "absolute",
            left: "0",
            bottom: "0",
            borderRadius: "50%",
            width: "100%",
            height: "100%",
            backgroundColor: "#1d232a",
            transition: "transform 700ms",
            transformOrigin: "top",
            transform: "scaleY(0)",
          },
        },
      });
    },
  ],
};
