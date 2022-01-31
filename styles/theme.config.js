import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F5F3F1",
  bannerBody: "#F5EFE9",
  header: "#F5F3F1",
  text: "#2E2E2E",
  secondaryText: "#535353",
  skillsText: "#929292",
  accent: "#F1E5DA",
};

export const darkTheme = {
  body: "#2E2E2E",
  bannerBody: "#2E2E2E",
  header: "#535353",
  text: "#F5F3F1",
  secondaryText: "#F7FAFC",
  skillsText: "#C0C0C0",
  accent: "#3D3A50",
};

export const GlobalStyles = createGlobalStyle`

* {
   box-sizing: border-box; margin: 0;
   /* font-family: "arsenica_trialmedium"; */
   padding: 0;
}
body {
  
   transition: all 0.50s linear;
}`;