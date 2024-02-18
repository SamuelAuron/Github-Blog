import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { UserDetailsCard } from './components/UserDetailsCard'
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <UserDetailsCard />
      <SearchForm />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </ThemeProvider>
    
  )
}

export default App
