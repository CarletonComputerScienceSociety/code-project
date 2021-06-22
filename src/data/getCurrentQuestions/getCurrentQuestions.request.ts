import type { Question } from '../../types'
import { getQuestionsExample } from '../getQuestions'

const getCurrentQuestions = async (): Promise<Question[]> => {
    // eslint-disable-next-line no-constant-condition
    if (false) { // ADD ENV VAR TO TELL US TO USE THE REAL BACKEND OR NO
      return fetch('http://127.0.0.1:8001/api/codechallenges/questions/current', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }).then((response) => response.json())
    } else {
      const allQuestions = getQuestionsExample
      const currentQuestions = []
      allQuestions.forEach(q => {
        const today = Date.now()
        const expirationDate = new Date(q.expirationDate).getTime()
        if (expirationDate >= today) {
            delete q.answer
            currentQuestions.push(q)
        }
      })
      return currentQuestions
    }
}

export { getCurrentQuestions }; 