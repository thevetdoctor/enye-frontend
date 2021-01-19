/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Profiles.css';
import Profile from './Profile';
import Search from './Search';
import Pagination from './Pagination';
import Select from './Select';
import { useEnyeState } from './EnyeProvider';
import Loader from 'react-loader-spinner';


export default function Profiles() {
    
    const [ state, dispatch] = useEnyeState();
    let { profiles, filterStatus, secondaryFilter, searchQuery, page } = state;
    let filteredProfiles;
        if(filterStatus && secondaryFilter) {
            // setPage(1);
            if(filterStatus === 'Payment Method') {
                filteredProfiles = profiles.filter(x => x['PaymentMethod'] === secondaryFilter);
            } else {
                filteredProfiles = profiles.filter(x => x[filterStatus] === secondaryFilter);
            }
            console.log(secondaryFilter);
        }
    profiles = (filterStatus && secondaryFilter) ? filteredProfiles : profiles;
    const [ pageRecords, setPageRecords ] = useState([]);
    const totalPages = Math.ceil([...profiles].length / 20);
    const filterText = ((filterStatus === 'Gender') || (filterStatus === 'Payment Method')) ? ['Remove filter', 'Gender', 'Payment Method'] : ['Choose a filter', 'Gender', 'Payment Method'];
    const filterOptionsGender = ['Select Gender', 'Male', 'Female', 'Prefer to skip'];
    const filterOptionsPaymentMethod = ['Select Method', 'cc', 'check', 'money order', 'paypal'];
    
    
    const handlePageClick = (direction) => {
        let nextPage = (direction === 'next') ? page + 1: page - 1;
        dispatch({
            type: 'SET_PAGE',
            data: nextPage
        });
        // console.log('page: ', page, 'total pages: ', totalPages);
    }
    
    const setPageRecord = () => {
        setPageRecords([...profiles].splice(((page - 1) * 20 ), 20));
    }


    useEffect(() => {
        setPageRecord();
        // console.log(pageRecords.length, filterStatus, state);
        return () => {
            console.log('Cleanup useEffect');
        }
    }, [page, secondaryFilter]);
    
    return (
        <div className='profiles'>
            <Search 
                data={profiles} 
                />
            {!searchQuery && <div>
                    {pageRecords.length > 0 ?
                <h3>
                    Patients' Profiles ({pageRecords.length})
                </h3>
                :
                <h3>
                    Loading Patients' Profiles
                </h3>}

            {pageRecords.length > 0 && 
            <Select 
                label=''
                name='filter'
                value={filterStatus}
                placeholder=''
                options={filterText}
            />}

            {(filterStatus === 'Gender') || (filterStatus === 'Payment Method') ?
            <Select 
                label=''
                name={filterStatus}
                value={secondaryFilter}
                options={(filterStatus === 'Gender') ? filterOptionsGender : filterOptionsPaymentMethod}
            />
            :
            <div></div>}

            {pageRecords.length > 0 && 
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
            />}

            {pageRecords.length < 1 && 
            <div className='loading'>
                <Loader 
                    type='ThreeDots'
                    color='#ffffff'
                    height={80} 
                    width={80} 
                />
            </div>}

            {pageRecords.length > 0 &&
            <div className='profile__display'>
            {pageRecords.map((profile, idx) => (
                <Profile 
                    key={idx}
                    profile={profile}
                />
            ))}
            </div>}

            {pageRecords.length > 0 && 
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
            />}
            </div>}
        </div>
    )
}

// 20210116003653
// http://api.enye.tech/v1/challenge/records