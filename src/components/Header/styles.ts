import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-800']};
  padding: 1.875rem 0 1.875rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: space-around;
`