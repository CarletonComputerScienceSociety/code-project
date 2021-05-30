import { getExpiredQuestionsExample } from '../getExpiredQuestions'

// CHANGE PROMISE TO QUESTION TYPE WHEN LEVEL - DIFFICULTY IS FIXED
const getExpiredQuestions = async (): Promise<any[]> => {
  // eslint-disable-next-line no-constant-condition
  if (false) { // ADD ENV VAR TO TELL US TO USE THE REAL BACKEND OR NO
    return fetch('http://127.0.0.1:8001/api/codechallenges/expired/questions/', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then((response) => response.json())
  } else {
    return getExpiredQuestionsExample
  }
}

export { getExpiredQuestions }
