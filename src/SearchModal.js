/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import Search from './Search';
import Modal from 'react-modal';
import { useEnyeState } from './EnyeProvider';
import { FaTimes, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import config from './config';
    
const apiUrl = config();

const customStyles = {
  content : {
    backgroundColor: 'rgb(79, 165, 199)',
    fontSize: '1.2em',
    top                   : '44%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '50%',
    transform             : 'translate(-50%, -50%)',
    display: 'flex',
    flexFlow: 'column',
    width: '75vw',
    alignItems: 'center',
    borderRadius: '2em',
    justifyContent: 'center'
  }
};

export default function SearchModal(props) {
  const [, dispatch] = useEnyeState();
  const [searchQuery,] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  Modal.setAppElement('div');

  useEffect(() => {
      const getData = async () => {
        const res = await axios({
            method: 'GET',
            url: `${apiUrl}/`,
            headers: {'Content-Type': 'application/json'}
          });
          console.log("API data", res.data);
          dispatch({
            type: 'GET_DATA',
            data: res.data
          })      
        }
        getData();
    }, [])

    useEffect(() => {
      setOpenModal(false);
    }, [searchQuery])


    return (
        <div>
            <h3>Search Results</h3>
            <Modal 
              isOpen={openModal}
              style={customStyles}
            >
              <div className="closeBtn" onClick={() => setOpenModal(false)}><span>close</span><FaTimes /></div>
              {/* <Search  */}
                {/* data={profiles} */}
              {/* /> */}
            </Modal>
            <div className="">
              <div>
                <div className="" onClick={() => setOpenModal(true)}>
                  <FaPlus /> 
                  <span>New Search</span>
                </div>
                  {/* <Link to="/done"> */}
                  {/* </Link> */}
              </div>
            </div>
        </div>
    )
}

