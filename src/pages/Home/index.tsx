import axios from "axios";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { UserDetailsCard } from "../../components/UserDetailsCard";
import { GlobalStyle } from "../../styles/global";
import { useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

interface Issue {
  title: string
  body: string
  created_at: string
  number: number
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('https://api.github.com/search/issues', {
          params: {
            q: 'author:samuelauron',
          }
        });
        setIssues(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar as issues:', error);
      }
    };

    fetchIssues();
  }, []);
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <UserDetailsCard/>
      <SearchForm />
      <div>
      {issues.map((issue) => {
          return(
            <PostCard 
              key={issue.number} 
              title={issue.title}
              body={issue.body}
              created_at={issue.created_at}
            />
          )
        })}
      </div>
    </ThemeProvider>
      
  
  )
}