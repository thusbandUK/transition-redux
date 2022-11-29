import React from 'react';
import { render, screen } from '@testing-library/react';
import TextBox from './textBox';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../../app/store';


test('Introduction component is rendered correctly', () => {
    render(<Provider store={store}>
      <TextBox/>
    </Provider>
     
    );

    expect( 
           screen.getByText(/structure/i)
           ).toBeInTheDocument();
    
 });