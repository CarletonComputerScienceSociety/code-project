import { render } from '@testing-library/svelte'
import Input from '../Input.svelte'

test('QuestionAnswer succesfully renders', () => {
  const results = render(Input, { props: { label: 'Test' } })

  expect(() => results.getByText('Test')).not.toThrow()
})
