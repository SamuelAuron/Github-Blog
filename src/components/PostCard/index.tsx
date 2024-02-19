import { PostCardContainer } from "./styles";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Issue {
  title: string
  body: string
  created_at: Date
}

export function PostCard({title, body, created_at}: Issue) {
  return(
    <PostCardContainer>
      <div>
        <h2>{title}</h2>
        <span>{formatDistanceToNow(created_at, {
            locale: ptBR,
            addSuffix: true,
          })}</span>
      </div>
      
      <p>{body}</p>
    </PostCardContainer>
  )
}