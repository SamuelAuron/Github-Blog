import { Post } from '../pages/Post'
import { Home } from '../pages/Home'

export const paths = [
  {
    path: '/',
    content: Home,
  },
  {
    path: '/blog/:repo/:issueNum',
    content: Post,
  },
]
