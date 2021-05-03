import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CarList from './carList';

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

it('render car list', async() => {
    const fakeList = 
        [{id:0, name:'abel', remarks:'test'},
        {id:1, name:'elvie', remarks:'test2'}];

    jest.spyOn(global, 'fetch').mockImplementation(()=> 
    Promise.resolve({
        json: ()=>Promise.resolve(fakeList)
    })   
    );

    await act( async()=>{
        render(<CarList />, container);
    });

    expect(container.textContent).toContain('abel');
    expect(container.textContent).toContain('elvie');

    global.fetch.mockRestore();

});