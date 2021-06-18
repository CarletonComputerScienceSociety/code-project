import { Question } from '../../types'
import { getQuestionsExample } from '../getQuestions'

const getQuestion = async (questionId: number): Promise<Question> => {
  // eslint-disable-next-line no-constant-condition
  if (false) { // ADD ENV VAR TO TELL US TO USE THE REAL BACKEND OR NO
    return fetch('http://127.0.0.1:8001/api/codechallenges/questions/' + questionId, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then((response) => response.json())
  } else {
    return getQuestionsExample.find((question) => (question.id) === questionId)
  }
}

export { getQuestion }
