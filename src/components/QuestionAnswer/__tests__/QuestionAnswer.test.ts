import { render } from '@testing-library/svelte'
import QuestionAnswer from '../QuestionAnswer.svelte'

test('QuestionAnswer succesfully renders', () => {
  const results = render(QuestionAnswer, { props: { label: 'Test' } })

  expect(() => results.getByText('Test')).not.toThrow()
})
