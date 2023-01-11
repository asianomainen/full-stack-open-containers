import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react/'

import Todo from './Todo'
import userEvent from '@testing-library/user-event';

describe('Todo', () => {
  test('can be marked as done', async () => {
    const todo = {
      text: "Test todo",
      done: false
    }

    const mockHandler = jest.fn()
    render(<Todo completeTodo={mockHandler} todo={todo} />)

    const user = userEvent.setup()

    const button = screen.getByText('Set as done')
    await user.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})
