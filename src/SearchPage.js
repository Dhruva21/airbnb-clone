import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays . 26 auguts to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
            img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
            location="Private room in center of london"
            title="stay at this spacious house"
            description="1 guest . 1 bedroom . 1bed . 1.5 shared bathrooms . wifi . kitchen . Free parking . Washing machine"
            star="4.74"
            price="$30/night"
            total="$117 total"
            />
            <SearchResult
            img="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
        
            location="Private room in center of london"
            title="stay at this spacious house"
            description="1 guest . 1 bedroom . 1bed . 1.5 shared bathrooms . wifi . kitchen . Free parking . Washing machine"
            star="4.39"
            price="$30/night"
            total="$117 total"
            />
        </div>
    )
}

export default SearchPage
