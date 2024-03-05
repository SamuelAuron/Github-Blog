import axios from 'axios'

const GITHUB_BASE_URL = 'https://api.github.com'
const GITHUB_REPO = 'Github-Blog'
const GITHUB_USERNAME = 'samuelauron'

export async function getUserData() {
  try {
  const response = await axios.get(`${GITHUB_BASE_URL}/users/${GITHUB_USERNAME}`, {
    headers: {
      Authorization: `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`,
    },
  });
  return response.data
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
}

export async function getIssuesData() {
  try{
    const response = await axios.get(`${GITHUB_BASE_URL}/search/issues`, {
      params: {
        q:`author:${GITHUB_USERNAME}`,
      }
    });
    
    return response.data.items
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
}

export async function getIssueData(issueNumber: number) {
  try{
    const response = await axios.get(`${GITHUB_BASE_URL}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues/${issueNumber}`)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
}