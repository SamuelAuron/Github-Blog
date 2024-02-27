import styled from 'styled-components';

export const UserContainer = styled.div`
  max-width: 1120px;
  box-shadow: 0px 2px 28px black;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  margin-top: -5rem;
  display: flex;
  
  background:  ${(props) => props.theme['blue-800']};
  border-radius: 10px;

  h1{
    color: ${(props) => props.theme['blue-100']};
  }

  div{
    display: flex;
  }

  a{
    display: flex;
    align-items: center;
    height: min-content;
    margin-left: auto;

    text-decoration: none;
    color: ${(props) => props.theme.blue};    

    img{
      margin-left: 8px;
    }
  }

  a:hover {
    border-bottom:1px solid;
  }

  a:visited {
    color: ${(props) => props.theme.blue};
  }

`

export const Avatar = styled.img`
  max-width: 148px;
  max-height: 148px;

  border-radius: 8px;
`

export const UserContent = styled.div`
  max-height: 212px;
  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const UserInfo = styled.span`
  
  margin-right: 1.5rem;
  display: flex;
  align-items: center;

  img{
    margin-right: 0.5rem;
  }
`