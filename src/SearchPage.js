import React from 'react';
import './SearchPage.css'
import { Button } from '@material-ui/core';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className= 'searchPage_info'>
            <p>62 stays · 12 September to 18 September · 2 guests</p>
            <h1>Stays nearby</h1>
            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Type of place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and beds</Button>
            <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult />
        </div>
    )
}

export default SearchPage