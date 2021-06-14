import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filteredMovies } from '../redux/action';

function Header({ title, data, filteredMovies }) {
    const [searchClick, setSearchClick] = useState(false);
    // const [searchIcon, setSearchIcon] = useState(true);
    const [searchData, setSearchData] = useState('');
    const handleClick = () => {
        console.log('search');
        setSearchClick(!searchClick);
        setSearchData('');
        // setSearchIcon(false);
    }
    const handleClose = () => {
        console.log('close');
        setSearchClick(false);
        setSearchData('');
        filteredMovies(data);
    }
    const handleChange = (e) => {
        console.log('change', e.target.value, data);
        setSearchData(e.target.value);
        // props.onSearch(e.target.value);
        const moviesFiltered = data.filter((item) => item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
        console.log('filter', moviesFiltered);
        filteredMovies(moviesFiltered);
    }
    const handleBack = () => {
        console.log('back');
        setSearchClick(false);
        setSearchData('');
        filteredMovies(data);
    }
    return (
        <div className="block-container-image">
            <div className="block-container-image-1">
                <img className="image-back" src="images/Back.png" alt="Back.png" onClick={handleBack} />
                {searchClick ? (<div className="image-search-input">
                    <input type="text" value={searchData} onChange={e => handleChange(e)} />
                    <span className="close-icon" onClick={handleClose}>X</span>
                </div>) : <p className="drama-heading">{title}</p>}
                <img className="image-search" src="images/search.png" alt="search.png" onClick={handleClick} />
            </div>
        </div>
    )
}

// const mapState = (state) => {
//     console.log('state-1', state);
//     return {
//         filteredMovies: state.MovieListReducer.filteredMovies
//     }
// }

const mapDispatch = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            filteredMovies
        }, dispatch)

    }
}


export default connect(null, mapDispatch)(Header);