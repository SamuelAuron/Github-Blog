import { HeaderContainer, HeaderContent } from "./styles"
import logo from "../../assets/logo.svg"
import effectLeft  from "../../assets/effectLeft.svg"
import effectRight from "../../assets/effectRight.svg"

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={effectLeft} alt="" />
        <img src={logo} alt="" />
        <img src={effectRight} alt="" />
      </HeaderContent>
    </HeaderContainer>
  ) 
    
}