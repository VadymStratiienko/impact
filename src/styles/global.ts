import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
    box-sizing: border-box;
}
:root {
  --font-default: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-primary: "Montserrat", sans-serif;
  --font-secondary: "Poppins", sans-serif;
}

/* Colors */
:root {
  --color-default: #222222;
  --color-primary: #008374;
  --color-secondary: #f85a40;
  --bs-border-radius-xl: 1rem;
}
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  margin: 0;
  padding: 0;
  font-family: var(--font-default);
  color: var(--color-default);
}
a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  color: #00b6a1;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-primary);
}


ul {
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 2rem;
}

input[type="text"],[type="email"] {
    padding: 12px 15px;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 0;
    font-family: inherit;
  }
  input[type="text"]:focus,
  input[type="email"]:focus, textarea:focus{
    border-color: var(--color-primary);
  }
  textarea {
    resize: none;
}
/*--------------------------------------------------------------
# Sections 
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
  scroll-margin-top: 70px;
}
`;
