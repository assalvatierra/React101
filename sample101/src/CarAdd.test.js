import {fireEvent, render, screen} from '@testing-library/react';
import CarAdd from './CarAdd';

test('test render Car Add', () =>{
    render(<CarAdd />);
    //screen.debug();
    const caraddform = screen.getByText("Dealer");
    expect(caraddform).toBeInTheDocument();
});

test('click submit button', ()=>{
    //const onSubmitButton = jest.fn();
    render(<button>Sample</button>);
    const btnctrl01 = screen.getByText("Sample");
    btnctrl01.onClick= jest.fn();
    fireEvent.click(btnctrl01);
    expect(onSubmitButton).toHaveBeenCalled();
});


