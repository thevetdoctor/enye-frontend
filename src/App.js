/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Footer from './Footer';
import './App.css';
import Profiles from './Profiles.js';
import axios from 'axios';
import { useEnyeState } from './EnyeProvider';

function App() {
      
  const [, dispatch] = useEnyeState();

  const fetchApi = async() => {
    try {
        await axios('https://api.enye.tech/v1/challenge/records')
        .then(response => response)
        .then(data => {
            // console.log(data.data);
            if(data.statusText === 'OK') {
                dispatch({
                    type: 'GET_DATA',
                    data: data.data
                });
            }
        });
    } catch(e) {
        // if error in API response, return error
        console.log(e.message);
        dispatch({
            type: 'ERROR_RESPONSE',
            data: 'Error in fetching records'
        });
    }
}  
    useEffect(() => {
        fetchApi();

        return () => {
          console.log('Cleanup useEffect');
      }
    }, []);

  return (
    <div className="App">
      <div className='navbar'>
        <h2>
          Enye Challenge 5.0
        </h2>
      </div>
      <Profiles />
      <Footer />
    </div>
  );
}

export default App;
