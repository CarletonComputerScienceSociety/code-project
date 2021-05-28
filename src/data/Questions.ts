import { Question } from '../types'

const getQuestions = async (): Promise<Question[]> => {
  return fetch('http://127.0.0.1:8001/api/codechallenges/questions/', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then((response) => response.json())
}

export { getQuestions }
