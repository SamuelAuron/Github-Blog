import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-800']};
  padding: 1.875rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`