import React from 'react';
import { RouterProvider } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import router from '../router';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from './store';


test('Introduction component is rendered correctly', () => {
    render(<Provider store={store}>
      <RouterProvider 
    router={router}/>
    </Provider>
     
    );

    expect( 
           screen.getByText(/complex/i)
           ).toBeInTheDocument();
    
 });

/* and this time I learned to make sure you import everything you need, in this case the { screen } module of react-testing-library
 */



 /*

describe('With React Testing Library', () => {
    const selectedExamBoard = {name: 'AQA'};
    const selectedReagent = {name: 'concentrated hydrochloric acid'};
    const initialState = { selectedExamBoard: {name: 'AQA'},
                           selectedReagent: {name: 'concentrated hydrochloric acid'} };
    const mockStore = configureStore();
    let store;

    it('Shows "Hello world!"', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <div>
            <Provider store={store}>
                <App/>
            </Provider>
            </div>);

        expect(getByText('Reactions of complex ions')).not.toBeNull();
    });
});

*/