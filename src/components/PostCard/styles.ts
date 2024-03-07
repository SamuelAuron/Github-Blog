import styled from 'styled-components'

export const PostCardContainer = styled.div`
  max-width: 26rem;
  height: 16.25rem;
  padding: 2rem;
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
    height: 4rem;
  }

  span{
    min-width: 3.31rem;
    color: ${(props) => props.theme['blue-400']};
    font-size: 0.875rem;
  }

  p{
    margin-top: 1.25rem;
    height: 11.12rem;
    overflow: hidden;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['blue-500']};
  }
`