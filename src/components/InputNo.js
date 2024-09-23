import React, { useState } from 'react'
import '../App.css';

export default function InputNo() {
    const [text, setText] = useState('');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const [dotValue, seDotValue] = useState('.');

    const [isDisabledOperator, setIsDisabledoperator] = useState(false);
    const [isDisabledDel, setIsDisabledDel] = useState(false);
    const [isdotDisable, setIsDotDisable] = useState(false);
    const operators = ['+', '-', '/', '*'];


    const numberClick = (numbers) => {
        //   setText(numbers);
        setText(prevText => prevText + numbers);
        setIsDisabledoperator(false);
    }

    const dotText = () => {
        setText(prevText => prevText + dotValue);
        setIsDotDisable(true);
    }

    const ClearAll = () => {
        setText('');
        setIsDisabledoperator(false);
        setIsDisabledDel(false);
        setIsDotDisable(false);

    }
    const delLast = () => {
        if (text !== '') {
            setText(prevText => prevText.slice(0, -1));
            setIsDisabledoperator(false);
            setIsDisabledDel(false)
            setIsDotDisable(false);

        }
    }

    const operate = (operators) => {
        if (text !== '') {
            setText(prevText => prevText + operators);
            setIsDisabledoperator(true);
            setIsDisabledDel(false);
            setIsDotDisable(false);
        }
    }

    const equalTo = () => {
        setText(eval(text));
        setIsDisabledoperator(false);
        setIsDisabledDel(true);
    }


    return (
        <>
            <div className="container my-4  ">
                {/* For Only Working when user send input from their mouse */}
                <input type="text" className='w-100' placeholder='Enter any two numbers to calculate' readOnly value={text} onChange={(e) => setText(e.target.value)} style={{ padding: '0px 6px', height: '8vh', backgroundColor: '#a3b2cf', border: '1px solid red', borderRadius: '6px' }} />

                {/* works normally but when user send input from their keyboard if user press Alphabetic keywords its trigger  an error */}
                {/* <input type="text" placeholder='Enter any two numbers to calculate'  value={text} onChange={(e) => setText(e.target.value)} style={{ padding: '0px 6px', width: '100%', height: '8vh', backgroundColor: '#a3b2cf', border: 'none', borderRadius: '6px' }} /> */}
            </div>
            <div className="container  row ">
                <div className="col-3">
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[7])} >7</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[4])} >4</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[1])} >1</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[0])} >0</button>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[8])} >8</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[5])} >5</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[2])} >2</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={dotText} disabled={isdotDisable} >.</button>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[9])} >9</button>

                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[6])} >6</button>

                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => numberClick(numbers[3])} >3</button>

                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => operate(operators[0])} disabled={isDisabledOperator}>+</button>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => operate(operators[3])} disabled={isDisabledOperator}>*</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => operate(operators[2])} disabled={isDisabledOperator}>/</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={() => operate(operators[1])} disabled={isDisabledOperator}>-</button>
                    <button className='btn btn-danger my-2 px-4 inputBtn box-sizing w-25' onClick={equalTo} disabled={isDisabledOperator}>=</button>
                </div>


                <div className="container text-center">
                    <button className='btn btn-primary m-1 w-100' onClick={ClearAll}>AC</button>
                    <button className='btn btn-primary m-1 w-100' onClick={delLast} disabled={isDisabledDel}>Del</button>
                </div>

            </div>

        </>
    )
}
