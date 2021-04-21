import { render } from '@testing-library/svelte'
import ButtonInverse from '../ButtonInverse.svelte'

test('ButtonInverse succesfully renders', () => {
  const results = render(ButtonInverse, { props: { label: 'Test' } })

  expect(() => results.getByText('Test')).not.toThrow()
})
