/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Search.css';
import Loader from 'react-loader-spinner';
import { useEnyeState } from './EnyeProvider';
import Profile from './Profile';

export default function Search({ data }) {

    const [ { searchQuery }, dispatch] = useEnyeState();
    const [ loading, setLoading ] = useState(false);
    const [ clicked, setClicked ] = useState(false);
    const [ clickedItem, setClickedItem ] = useState({});
    const [ searchArray, setSearchArray ] = useState([]);

    const handleChange = (e) =>  {
        const inputValue = e.target.value;
        console.log(inputValue);
        setClicked(false);
        dispatch({
            type: 'SET_SEARCH',
            data: inputValue
        });
    }

    const handleSearchQuery = (e) => {
        console.log(searchQuery, e);
        dispatch({
            type: 'CLEAR_SEARCH'
        });
    }

    const handleClick = (item) => {
        // console.log(item);
        setClicked(!clicked);
        setClickedItem(item);
    }

    const profileSearch = () => {
        setLoading(true);
        let searchArray = data.filter(item => item.FirstName.concat(item.LastName).toLowerCase().search(searchQuery.toLowerCase()) >= 0);
        setSearchArray(searchArray);
        setLoading(false);
    }

    const renderSearchResults = () => {
        return (
            <div className='search'>
                        {!clicked ?
                        <div> {searchArray.map((item, idx) => (
                            <div 
                                key={idx}
                                className='search__result'
                                onClick={() => handleClick(item)}
                            >
                            {item.FirstName} {item.LastName}
                            </div>
                        ))}
                        </div>
                        :
                        <div className='search__profile' onClick={() => handleClick()}>
                            <Profile 
                                profile={clickedItem}
                            />
                        </div>
                    }
            </div>
        )
    }

    useEffect(() => {
        console.log('loading: ', loading, 'search query: ', searchQuery, 'clicked:', clicked);
        profileSearch();
    }, [searchQuery]);

    const closeBtnStyle = {
        color: 'white', 
        fontSize: '1.2em', 
        padding: '0.2em', 
        margin: 0, 
        cursor: 'pointer', 
        backgroundColor: 'grey'
    };

    return (
            <div className='search'>
                <div className='search__input'>
                    <input
                    type='text'
                    name='searchQuery'
                    placeholder='Search profile'
                    onChange={handleChange}
                    />
                    {searchQuery !== '' &&
                        <span 
                            style={closeBtnStyle} onClick={() => handleSearchQuery}>
                            X
                        </span>}
                </div>
                {loading && 
                <Loader 
                    type='ThreeDots'
                    color='#00bfff'
                    height={80} 
                    width={80} 
                />}

                {searchQuery !== '' && renderSearchResults()}
            </div>
    )
}