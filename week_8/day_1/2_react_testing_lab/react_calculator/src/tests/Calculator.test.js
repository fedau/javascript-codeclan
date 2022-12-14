import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 and 4 and get 5', ()=>{
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const buttonEquals = container.getByTestId('operator-equals');
    const buttonAdds = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button4);
    fireEvent.click(buttonAdds);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');


  })
  it('should subtract 4 from 7 and get 3', ()=>{
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');

    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');

  })

  it('should multiply 3 by 5 and get 15', () => {
      const button3 = container.getByTestId('number3');
  const button5 = container.getByTestId('number5');
  const buttonMultiply = container.getByTestId('operator-multiply');
  const buttonEquals = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');

  
  fireEvent.click(button3);
  fireEvent.click(buttonMultiply);
  fireEvent.click(button5);
  fireEvent.click(buttonEquals);
  
  expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', ()=>{
    const button7 = container.getByTestId('number7');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
  const buttonEquals = container.getByTestId('operator-equals');
  const buttonDivide = container.getByTestId('operator-divide');
  const runningTotal = container.getByTestId('running-total');

  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(buttonDivide);
  fireEvent.click(button7);
  fireEvent.click(buttonEquals);


  expect(runningTotal.textContent).toEqual('3');


  })

  it('should concatenate multiple number button clicks', () => {

    const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  fireEvent.click(button2);
  fireEvent.click(button2);
  const runningTotal = container.getByTestId('running-total');

  expect(runningTotal.textContent).toEqual('222');


  })

  it("should chain multiple operations together", () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonEquals = container.getByTestId('operator-equals');

  
  const buttonSubtract = container.getByTestId('operator-subtract');
  const buttonAdds = container.getByTestId('operator-add');
  const runningTotal = container.getByTestId('running-total');

  fireEvent.click(button2);
  fireEvent.click(button2);
  fireEvent.click(buttonAdds);
  fireEvent.click(button2);
  fireEvent.click(buttonSubtract);
  fireEvent.click(button1);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('23');

  })
it ('should clear the running total without affecting the calculation', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const clear = container.getByTestId('clear');
  const buttonEquals = container.getByTestId('operator-equals');

const buttonSubtract = container.getByTestId('operator-subtract');
const buttonAdds = container.getByTestId('operator-add');
const runningTotal = container.getByTestId('running-total');

fireEvent.click(button2);
fireEvent.click(button2);
fireEvent.click(buttonAdds);
fireEvent.click(button2);
fireEvent.click(buttonEquals);
fireEvent.click(clear);

fireEvent.click(button1);
fireEvent.click(buttonAdds);
fireEvent.click(button1);

fireEvent.click(buttonEquals);


expect(runningTotal.textContent).toEqual('25');
  
})







})

