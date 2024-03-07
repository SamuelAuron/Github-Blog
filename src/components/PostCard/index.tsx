import { PostCardContainer } from "./styles";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";
import { useNavigate } from "react-router-dom";

interface Issue {
  id: number
  title: string
  body: string
  created_at: Date
}

export function PostCard({id, title, body, created_at}: Issue) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blog/github-blog/${id}`)
  }

  return(
    <PostCardContainer onClick={() => handleCardClick()}>
      <div>
        <h2>{title}</h2>
        <span>{formatDistanceToNow(created_at, {
            locale: ptBR,
            addSuffix: true,
          })}</span>
      </div>
      
      <Markdown>{body}</Markdown>
    </PostCardContainer>
  )
}