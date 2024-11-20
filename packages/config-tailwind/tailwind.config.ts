import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        "po-purple-50": "#E2ADFF",
        "po-purple-100": "#A913F9",
        "po-purple-150": "#7C2FA5",
        "po-purple-200": "#4B0082",
        "po-black-50": "#C4C4C4",
        "po-black-100": "#868686",
        "po-black-150": "#252525",
        "po-black-200": "#111111",
        "po-black-250": "#000000",
        "po-gray-50": "#F5F5F5",
        "po-gray-100": "#D9D9D9",
        "po-gray-150": "#969696",
        "po-gray-200": "#A6A6A6",
        "po-gray-250": "#8C91A2",
        "po-yellow-50": "#FFF9E6",
        "po-yellow-100": "#FCB808",
        "po-yellow-150": "#E6A700",
        "po-yellow-200": "#CC8E00",
      },
    },
  },
  plugins: [],
};
export default config;
