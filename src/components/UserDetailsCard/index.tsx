import {Avatar, UserContainer, UserInfos, UserInfo } from "./styles";

import githubIcon from "../../assets/githubIcon.svg"
import followersIcon from '../../assets/followersIcon.svg'
import companyIcon from "../../assets/companyIcon.svg"
import linkIcon from "../../assets/linkIcon.svg"

import { useEffect, useState } from "react";
import { getUserData } from "../../services/api";

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

  useEffect(() =>{
    const setUser = async () => {
      const response = await getUserData()
      setUserData(response)
    }

    setUser();
  }, [])

  return(
    <UserContainer>
      <Avatar src={userData?.avatar_url} alt="avatar" />

      <UserInfos>
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
      </UserInfos>
          
      <a href={userData?.html_url}>
        GITHUB
        <img src={linkIcon} alt="" />  
      </a>

    </UserContainer>
  )
}