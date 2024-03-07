import styled from 'styled-components';

export const UserContainer = styled.div`
  max-width: 70rem;
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

export const Avatar = styled.img`
  max-width: 9.25rem;
  max-height: 9.25rem;

  border-radius: 8px;
`

export const UserInfos = styled.div`
  max-height: 13.25rem;
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