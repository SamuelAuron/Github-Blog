import {UserContainer, UserContent, UserInfo, UserLink } from "./styles";


import avatar from "../../assets/avatar.png"
import githubIcon from "../../assets/githubIcon.svg"
import followersIcon from '../../assets/followersIcon.svg'
import companyIcon from "../../assets/companyIcon.svg"
import linkIcon from "../../assets/linkIcon.svg"

export function UserDetailsCard(){
  return(
    
    <UserContainer>
      <img src={avatar} alt="avatar" />
      <UserContent>
        <h1>Cameron Williamson</h1>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          
        <div>
          <UserInfo>
            <img src={githubIcon} alt="" />
            cameronwll
          </UserInfo>
          <UserInfo>
            <img src={companyIcon} alt="" />
            RocketSeat
          </UserInfo>
          <UserInfo>
            <img src={followersIcon} alt="" />
            32 seguidores
          </UserInfo>
        </div>
      </UserContent>
          
        
      <a href="">
        GitHub 
        <img src={linkIcon} alt="" />  
      </a>

    </UserContainer>
  )
}