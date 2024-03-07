import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";
import { useEffect, useState } from "react";
import { Container, IssueInfo, LinkContainer, PostContainer, PostContent, PostText } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import githubIcon from "../../assets/githubIcon.svg"
import linkIcon from "../../assets/linkIcon.svg"
import calender from "../../assets/calender.svg"
import comments from "../../assets/comments.svg"
import Markdown from "react-markdown";
import { getIssueData, getUserData } from "../../services/api";
import { useParams } from "react-router-dom";

interface Issue {
  title: string
  comments: number
  body: string
  created_at: string
  html_url: string
}

interface RouteParams {
  [key: string]: string | undefined
  issueNum?: string
}

export function Post() {
  const { issueNum } = useParams<RouteParams>()

  const [issue, setIssue] = useState<Issue>({
    title: '',
    comments: 0,
    body: '',
    created_at: '2024-02-19T01:21:27Z',
    html_url: ''
  })
  const [user, setUser] = useState('')
  
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const responseIssue = await getIssueData(issueNum)
        const responseUser = await getUserData()
        setIssue(responseIssue);
        setUser(responseUser.login)
      } catch (error) {
        console.error('Erro ao buscar as issues:', error);
      }
    };
    
    fetchIssues();
  }, []);

  const formattedDate = formatDistanceToNow(new Date(issue.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
      <PostContainer>
        <LinkContainer>
          <a href="/">
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
              <span>{user}</span>
            </IssueInfo>
              
            <IssueInfo>
              <img src={calender} alt="" />
              <span>{formattedDate}</span>
            </IssueInfo>

            <IssueInfo>
              <img src={comments} alt="" />
              <span>
                {issue?.comments}
                {' '}
                comentarios
              </span>
            </IssueInfo>
          </div>
        </PostContent>
        </PostContainer>
        <PostText>
          <Markdown >{issue?.body}</Markdown>
        </PostText>
      </Container>
      
    </ThemeProvider>   
  )
}