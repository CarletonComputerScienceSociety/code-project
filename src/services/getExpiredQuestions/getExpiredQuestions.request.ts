import type { Question } from '../../types'
import { QUESTIONS_EXAMPLE } from '../../data'

const getExpiredQuestions = async (): Promise<Question[]> => {
  // eslint-disable-next-line no-constant-condition
  if (true) { // ADD ENV VAR TO TELL US TO USE THE REAL BACKEND OR NO
    return fetch('https://core.carletoncomputersciencesociety.ca/api/codechallenges/questions/expired', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then((response) => response.json())
  } else {
    return filterExpiredQuestions(QUESTIONS_EXAMPLE)
  }
}

const filterExpiredQuestions = (questions) => {
  const expiredQuestions = []
  questions.forEach(q => {
    const today = Date.now()
    const expirationDate = new Date(q.expirationDate).getTime()
    if (expirationDate < today) {
      expiredQuestions.push(q)
    }
  })
  return expiredQuestions
}

export { getExpiredQuestions }
