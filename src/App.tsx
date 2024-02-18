import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { UserDetailsCard } from './components/UserDetailsCard'
import { SearchForm } from './components/SearchForm'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <UserDetailsCard />
      <SearchForm />
    </ThemeProvider>
    
  )
}

export default App
