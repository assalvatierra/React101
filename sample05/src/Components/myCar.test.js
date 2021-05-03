import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MyCar from './myCar';

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

it("Render my Car component", ()=>{
    act( ()=>{
        render(<MyCar />, container);
    });
    expect(container.textContent).toContain('Sample Component');
});

it("render component with property", ()=>{
    act(()=>{
        render(<MyCar name='React25' />, container);
    });
    expect(container.textContent).toContain('Name:React25');
});