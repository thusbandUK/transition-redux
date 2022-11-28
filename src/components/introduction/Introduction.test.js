import React from 'react';
import { render, screen } from '@testing-library/react';
import Introduction from './Introduction';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../../app/store';


test('Introduction component is rendered correctly', () => {
    render(<Provider store={store}>
      <Introduction/>
    </Provider>
     
    );

    expect( 
           screen.getByText(/interactive/i)
           ).toBeInTheDocument();
    
 });

/*What I learned: mocking up a component for testing means you have to (it seems) make a little mini version of it, which in this
case meant that I had to wrap just the <Introduction/> component in <Provider> tags. I've also learned that every item in a list
needs a unique key, so that's something I could look into sorting out now. And also I've learned that people might have mistakes
in the advice they include in blogs(!)

*/



//below is the boiler plate test

/*
test('renders "learn react link"', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

/*Exemplar test code from: https://medium.com/@vidishapal/configure-jest-and-babel-to-test-a-simple-react-app-c4b35432b065*/

/*
import React from 'react';
import { render, screen } from '@testing-library/react';
import Comment from './Comment';

   test('Comment component is rendered correctly', () => {
      render(<Comment 
               name={'Jake'} 
                description={'My blog comment'}/>);

      expect( 
             screen.getByText('Jake says')
             ).toBeInTheDocument();
      expect(
             screen.getByText('My blog comment')
             ).toBeInTheDocument();
   });

*/