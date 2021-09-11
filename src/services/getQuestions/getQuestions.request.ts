import type { Question } from '../../types'
import { QUESTIONS_EXAMPLE } from '../../data'

const getQuestions = async (): Promise<Question[]> => {
  // eslint-disable-next-line no-constant-condition
  if (true) { // ADD ENV VAR TO TELL US TO USE THE REAL BACKEND OR NO
    return fetch('https://core.carletoncomputersciencesociety.ca/api/codechallenges/current/questions/', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then((response) => response.json())
  } else {
    return QUESTIONS_EXAMPLE
  }
}

export { getQuestions }
