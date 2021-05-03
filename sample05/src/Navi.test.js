import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Navi from './Navi';

let container = null;
beforeEach( ()=> {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach( ()=> {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it ('render navi',  ()=>{
    act(()=>{
        render(<Navi />, container);
    });

    expect(container.textContent).toContain('Navi');

})
