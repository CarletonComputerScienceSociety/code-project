import type { Question } from '../../types'
import { QUESTIONS_EXAMPLE } from '../../data'

const getCurrentQuestions = async (): Promise<Question[]> => {
  // eslint-disable-next-line no-constant-condition
  if (true) { // ADD ENV VAR TO TELL US TO USE THE REAL BACKEND OR NO
    return fetch('http://127.0.0.1:8001/api/codechallenges/questions/current', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then((response) => response.json())
  } else {
    return filterCurrentQuestions(QUESTIONS_EXAMPLE)
  }
}

const filterCurrentQuestions = (questions) => {
  const currentQuestions = []
  questions.forEach(q => {
    const today = Date.now()
    const expirationDate = new Date(q.expirationDate).getTime()
    if (expirationDate >= today) {
      delete q.answer
      currentQuestions.push(q)
    }
  })
  return currentQuestions
}
export { getCurrentQuestions }
