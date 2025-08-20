import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Pete Nottage 스타일 색상 팔레트
        primary: {
          navy: "#2779a7",
          mint: "#49c5b6",
          light: "#ffffff",
          dark: "#1a1a1a",
        },
        background: {
          light: "#ffffff",
          dark: "#0f0f0f",
        },
        text: {
          light: "#1a1a1a",
          dark: "#ffffff",
        },
      },
      animation: {
        // 차량 애니메이션
        "car-move": "carMove 20s linear infinite",
        "boat-move": "boatMove 25s linear infinite",
        "plane-move": "planeMove 30s linear infinite",

        // 건물 애니메이션
        "building-hover": "buildingHover 0.3s ease-in-out",
        "building-collapse": "buildingCollapse 0.5s ease-in-out",
        "building-rebuild": "buildingRebuild 1s ease-in-out",

        // 요소 등장 애니메이션
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",

        // 로딩 애니메이션
        "loading-spin": "loadingSpin 1s linear infinite",
        "loading-pulse": "loadingPulse 2s ease-in-out infinite",

        // 물결 애니메이션
        wave: "wave 3s ease-in-out infinite",
        "wave-reverse": "waveReverse 3s ease-in-out infinite",

        // 부드러운 전환
        float: "float 6s ease-in-out infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
      },
      keyframes: {
        // 차량 이동 애니메이션
        carMove: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" },
        },
        boatMove: {
          "0%": { transform: "translateX(-100%) translateY(0px)" },
          "50%": { transform: "translateX(50vw) translateY(-10px)" },
          "100%": { transform: "translateX(100vw) translateY(0px)" },
        },
        planeMove: {
          "0%": { transform: "translateX(-100%) translateY(-20px)" },
          "50%": { transform: "translateX(50vw) translateY(-40px)" },
          "100%": { transform: "translateX(100vw) translateY(-20px)" },
        },

        // 건물 인터랙션 애니메이션
        buildingHover: {
          "0%": { transform: "scale(1) translateY(0)" },
          "100%": { transform: "scale(1.05) translateY(-5px)" },
        },
        buildingCollapse: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(0.8) rotate(5deg)" },
          "100%": { transform: "scale(0) rotate(10deg)" },
        },
        buildingRebuild: {
          "0%": { transform: "scale(0) rotate(10deg)" },
          "50%": { transform: "scale(0.5) rotate(5deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },

        // 요소 등장 애니메이션
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },

        // 로딩 애니메이션
        loadingSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        loadingPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },

        // 물결 애니메이션
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25%)" },
        },
        waveReverse: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" },
        },

        // 부드러운 애니메이션
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "53": "repeat(53, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
