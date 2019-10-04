import React from 'react';
import App from './App';
import {render} from '@testing-library/react'

let wrapper

beforeEach( () => {
  wrapper = render(<App />)
})
it('renders without crashing', () => {
  const { getByText} = wrapper
  expect(getByText('Learn React')).toBeInstanceOf(HTMLElement)

});
