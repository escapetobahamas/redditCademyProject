
import logoReddit from './images/logoReddit.png';
import logoSearch from './images/iconSearch.svg';
import logoGitHub from './images/logoGitHub.png';
import {setSearchTerm, clearSearchTerm, selectSearchTem} from './searchSlice.js';
import {useDispatch, useSelector} from 'react-redux';


export const HeaderBar = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTem);

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const submitSearchTerm = (e) => {
        e.preventDefault();
        dispatch(clearSearchTerm());

    }



    return (
        <header className = "head">
            
                <img className = "redditLogo" alt = "Reddit Logo" src = {logoReddit}/>
           
            <form onSubmit={submitSearchTerm}>
                <input 
                    id ="search"
                    type = "text" 
                    placeholder = "Search Post"
                    value = {searchTerm}
                    onChange = {handleSearch}
                />
                <button>
                    <img alt = "search" src = {logoSearch}/>
                </button>
            </form>
            <div className = "gitHub">
                <a href = 'https://github.com/djongit' target= "_blank" rel = "noreferrer">
                    <img alt = "GitHub Logo" src = {logoGitHub}/>
                </a>
            </div>
        </header>
    )
};