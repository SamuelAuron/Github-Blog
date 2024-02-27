import styled from 'styled-components'

export const PostCardContainer = styled.a`
  max-width: 416px;
  height: 260px;
  padding: 32px;
  border-radius: 10px;
  background: ${(props) => props.theme['blue-700']};
  color: ${(props) => props.theme['blue-400']};
  text-decoration: none;
  
  overflow: hidden;

  div{
    display: flex;
    justify-content: space-between;
  }

  h2{
    color: ${(props) => props.theme['blue-100']};
    height: 64px;
  }

  span{
    min-width: 53px;
    color: ${(props) => props.theme['blue-400']};
    font-size: 0.875rem;
  }

  p{
    margin-top: 20px;
    height: 178px;
    overflow: hidden;
  }
`
