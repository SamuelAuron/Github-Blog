import styled from "styled-components";

export const Container =styled.div`
  max-width: 70rem;
  margin: 0 auto;
`

export const PostContainer = styled.div`
  width: 100%;
  box-shadow: 0px 2px 28px black;
  padding: 2.5rem 2rem;
  margin-top: -5rem;
  
  background:  ${(props) => props.theme['blue-800']};
  border-radius: 10px;

  h1{
    color: ${(props) => props.theme['blue-100']};
    margin: 1.5rem 0;
  }

  div{
    display: flex;
  }

  a{
    display: flex;
    align-items: center;
    height: min-content;
    text-decoration: none;
    color: ${(props) => props.theme.blue}; 

    img{
      margin-left: 0.5rem;
    }
  }

  a:hover {
    border-bottom:1px solid;
  }

  a:visited {
    color: ${(props) => props.theme.blue};
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostContent =styled.div`
  display: flex;
  flex-direction: column;
`

export const IssueInfo = styled.span`
  
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  color: white;

  img{
    margin-right: 0.5rem;
  }
`

export const PostText = styled.div`
  max-width: 63.75rem;
  margin: 2.5rem auto
`