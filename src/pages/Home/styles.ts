import styled from "styled-components";

export const Posts = styled.div`
  max-width: 1184px;
  margin: 0 auto 32px;

  display: flex;
  justify-content: space-around; 
  align-items: center; 
`

export const SearchFormContainer = styled.form`

  display: flex;

  flex-direction: column;
  gap: 1rem;
  
  max-width: 1184px;
  margin: 72px auto 48px;

  div{
    display: flex;
    justify-content: space-between;

    span{
      font-size: 0.875rem;
      color: ${(props) => props.theme['blue-400']};
    }
  }

  input {
    flex: 1;
    
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['blue-600']};
    background-color: ${(props) => props.theme['blue-1000']};
    color: ${(props) => props.theme['blue-300']};
    padding: 1rem;

    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['blue-500']};
    }
  }

  input:focus{
    border: none;
  }
`