/* eslint-disable no-unused-vars */
import React from 'react';
import './Select.css';
import { useEnyeState } from './EnyeProvider';

export default function Select(props) {
    const [state, dispatch] = useEnyeState();

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        console.log(name, value);
        console.log(`ADD_${name.toUpperCase()}`)
        dispatch({
            type: `ADD_${name.toUpperCase()}`,
            data: value
        });
    }

    return (
        <div className='input_section'>
            {/* <label>{props.label}</label> */}
            <select 
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={handleInputChange}
            >
                {props.options.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option> 
                ))}
            </select>
        </div>
    )
}
