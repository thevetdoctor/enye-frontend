import profiles from './profiles.json';

export default function reducer(state, action) {
    switch(action.type) {
        case "GET_DATA":
            console.log(action.data.records.profiles.length);
            // const apiData = action.data.records.profiles; 
            return {
              ...state, profiles: action.data.records.profiles
            }

        case "ADD_FILTER":
            // console.log(action.data);
            if(action.data === 'Choose a filter') {
                return {
                    ...state, filterStatus: '', secondaryFilter: ''
                }
            }
            return {
              ...state, filterStatus: action.data, secondaryFilter: ''
            }      

        case "ADD_GENDER":
            // console.log(action.data);
            if(action.data === 'Select Gender') {
                return {
                    ...state, secondaryFilter: '', page: 1
                }
            }
            return {
              ...state, secondaryFilter: action.data, page: 1
            }      
        
        case "ADD_PAYMENT METHOD":
        // console.log(action.data);
        if(action.data === 'Select Method') {
            return {
                ...state, secondaryFilter: '', page: 1
            }
        }
        return {
            ...state, secondaryFilter: action.data, page: 1
        }
        
        case "SET_SEARCH":
        // console.log(action.data);
        return {
            ...state, searchQuery: action.data
        }
        
        case "SET_PAGE":
        // console.log(action.data);
        return {
            ...state, page: action.data
        }
        
        case "CLEAR_SEARCH":
        // console.log(action.data);
        return {
            ...state, searchQuery: ''
        }
            
        default:
        return state;
    }
};


export const initialState = {
    profiles: profiles.records.profiles,
    filterStatus: '',
    secondaryFilter: '',
    searchQuery: '',
    page: 1
};