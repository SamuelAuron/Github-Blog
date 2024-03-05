import { PostCardContainer } from "./styles";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";

interface Issue {
  title: string
  body: string
  created_at: Date
}

export function PostCard({title, body, created_at}: Issue) {
  return(
    <PostCardContainer href=''>
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