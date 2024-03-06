import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

body {
  background-color: ${(props) => props.theme['blue-900']};
  color: ${(props) => props.theme['blue-200']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif;
}
`
