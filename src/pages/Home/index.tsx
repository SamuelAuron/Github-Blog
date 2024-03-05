import { Header } from "../../components/Header";
import { UserDetailsCard } from "../../components/UserDetailsCard";
import { GlobalStyle } from "../../styles/global";
import { ChangeEvent, useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { Posts, SearchFormContainer } from "./styles";
import { getIssuesData } from "../../services/api";

interface Issue {
  title: string
  body: string
  created_at: Date
  number: number
  total_count: number
}

export function Home() {
  const [search, setSearch] = useState('')
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() =>{
    const fetchIssues = async () => {
      const response = await getIssuesData()
      setIssues(response)
    }

    fetchIssues();
  }, [])

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredPosts = search != ''
    ? issues.filter(issue => issue.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : issues

  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <UserDetailsCard/>
      <SearchFormContainer>
        <div>
          <label>Publicações</label>
          <span>{issues.length} publicações</span>
        </div>
      
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearch}
        />
      </SearchFormContainer>
      <Posts>
      {filteredPosts.map((issue) => {
          return(
            <PostCard 
              key={issue.number} 
              title={issue.title}
              body={issue.body}
              created_at={issue.created_at}
            />
          )
        })}
      </Posts>
    </ThemeProvider> 
  )
}