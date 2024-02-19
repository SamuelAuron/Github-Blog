import {Avatar, UserContainer, UserContent, UserInfo } from "./styles";


import githubIcon from "../../assets/githubIcon.svg"
import followersIcon from '../../assets/followersIcon.svg'
import companyIcon from "../../assets/companyIcon.svg"
import linkIcon from "../../assets/linkIcon.svg"


import { useEffect, useState } from "react";
import axios from "axios";

interface UserInfo {
  avatar_url: string
  name: string
  bio?: string
  login: string
  company?: string
  followers: number
  html_url: string
}

export function UserDetailsCard(){
  const [userData, setUserData] = useState<UserInfo>()
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/samuelauron', {
          headers: {
            Authorization: `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`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };
    console.log(userData)
    fetchUserData();
  }, []);

  

  return(
    
    <UserContainer>
      <Avatar src={userData?.avatar_url} alt="avatar" />
      <UserContent>
        <h1>{userData?.name}</h1>
        <p>{userData?.bio}</p>
          
        <div>
          <UserInfo>
            <img src={githubIcon} alt="" />
            {userData?.login}
          </UserInfo>
          <UserInfo>
            {userData?.company &&
            <>
              <img src={companyIcon} alt="" /> 
              <span>{userData?.company}</span>
            </> 
            }
          </UserInfo>
          <UserInfo>
            <img src={followersIcon} alt="" />
            {userData?.followers}
            {' '}
            Seguidores
          </UserInfo>
        </div>
      </UserContent>
          
        
      <a href={userData?.html_url}>
        GitHub 
        <img src={linkIcon} alt="" />  
      </a>

    </UserContainer>
  )
}