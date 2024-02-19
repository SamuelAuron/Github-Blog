import { PostCardContainer } from "./styles";

interface Issue {
  title: string
  body: string
  created_at: string
}

export function PostCard({title, body, created_at}: Issue) {
  return(
    <PostCardContainer>
      <div>
        <h2>{title}</h2>
        <span>{created_at}</span>
      </div>
      
      <p>{body}</p>
    </PostCardContainer>
  )
}