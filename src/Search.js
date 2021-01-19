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
        dispatch({
            type: 'SET_SEARCH',
            data: inputValue
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

    return (
            <div className='search'>
                <div>
                    <input
                    type='text'
                    name='searchQuery'
                    placeholder='Search profile'
                    onChange={handleChange}
                    />
                    {/* <span><img className='search-icon' src={searchicon} alt='search-icon'/></span> */}
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