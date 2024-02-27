import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { IssueInfo, LinkContainer, PostContainer, PostContent, PostText } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import githubIcon from "../../assets/githubIcon.svg"
import linkIcon from "../../assets/linkIcon.svg"
import calender from "../../assets/calender.svg"
import comments from "../../assets/comments.svg"
import Markdown from "react-markdown";


interface Issue {
  title: string
  comments: number
  body: string
  created_at: Date
  html_url: string
}

export function Post() {

  const [issue, setIssue] = useState<Issue>()
  const [user, setUser] = useState('')
  

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/SamuelAuron/Github-Blog/issues/1', {
          //params: {
          //  q: '',
          //}
        });
        setIssue(response.data);
        setUser(response.data.user.login)
        console.log(response.data)
        console.log(issue?.created_at)
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
        <PostContainer>
          <LinkContainer>
            <a href="http://localhost:5173/">
              VOLTAR
            </a>
            <a href={issue?.html_url}>
              VER NO GITHUB
              <img src={linkIcon} alt="" />  
            </a>
          </LinkContainer>
          
          <PostContent>
            <h1>{issue?.title}</h1>
            <div>
              <IssueInfo>
                <img src={githubIcon} alt="" />
                {user}
              </IssueInfo>
              <IssueInfo>
                <img src={calender} alt="" />
                {formatDistanceToNow(issue?.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                  })}
              </IssueInfo>
              <IssueInfo>
                <img src={comments} alt="" />
                {issue?.comments}
                {' '}
                comentarios
              </IssueInfo>
            </div>
          </PostContent>
        </PostContainer>
        <PostText>
        <Markdown>{issue?.body}</Markdown>
        </PostText>
    </ThemeProvider>   
  )
}