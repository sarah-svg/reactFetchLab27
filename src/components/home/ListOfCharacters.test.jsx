/* eslint-disable max-len */
// global.fetch require('node-fetch');
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import ListCharacters from './ListOfCharacters';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json([
     
      ])

);
describe('listing xfile character', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => cleanup());

  it('displays a list of characters', () => {
    render(<MemoryRouter><ListCharacters/></MemoryRouter>);
    const ul =  screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });


  });

