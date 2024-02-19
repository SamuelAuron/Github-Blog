import styled from 'styled-components'

export const PostCardContainer = styled.form`
  max-width: 416px;
  max-height: 260px;
  padding: 32px;
  border-radius: 10px;
  background: ${(props) => props.theme['blue-700']};
  margin: 2rem;

  overflow: hidden;

  div{
    display: flex;
    justify-content: space-between;
  }

  h2{
    color: ${(props) => props.theme['blue-100']};
  }

  span{
    min-width: 53px;
    color: ${(props) => props.theme['blue-400']};
    font-size: 0.875rem;
  }

  p{
    
    height: 112px;
    overflow: hidden;
  }
`
