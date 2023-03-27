/* eslint-disable import/first */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

jest.mock('../api')

import { searchData } from './testData'
import SearchBar from '../components/SearchBar'
import api from '../api'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

const setupComponent = () => {
  return render(<SearchBar />)
}

describe('Search bar', () => {
  const inputName = 'Californication'

  beforeEach(() => {
    api.getSearch.mockReturnValue(searchData)
  })

  it('search bar should be available to type', () => {
    setupComponent()

    const inputEl = screen.getByTestId('search-input')
    expect(inputEl).toBeDefined()

    fireEvent.change(inputEl, { target: { value: inputName } })
    expect(inputEl).toHaveValue(inputName)
  })

  it('suggestion list should be displayed after fill input', () => {
    setupComponent()

    const inputEl = screen.getByTestId('search-input')

    fireEvent.change(inputEl, { target: { value: inputName } })

    const suggestListEl = screen.getByTestId('suggest-list')
    expect(suggestListEl).toBeDefined()
  })

  it('suggestion list should contain 10 first matches', () => {
    setupComponent()

    const inputEl = screen.getByTestId('search-input')

    fireEvent.change(inputEl, { target: { value: inputName } })

    const suggestListItemEl = screen.getAllByTestId('suggest-list-item')
    expect(suggestListItemEl).toHaveLength(10)
  })
})
