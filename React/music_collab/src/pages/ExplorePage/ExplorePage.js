import React, { useState } from 'react';
import ExploreView from '../../components/ExploreView';
import PropTypes from 'prop-types';
import "./styles.css";
import CategoryWork from '../../components/CategoryWorks';
import SelectReference from '../../components/SelectReference';

function ExplorePage (props) {

    const categoryWorks = [
        {
            name:'R&B',
            works: [props.works[1], props.works[2]] 
        },
        {
            name:'Pop',
            works: [props.works[3], props.works[0], props.works[2], props.works[5]] 
        },
        {
            name:'Jazz',
            works: []
        },
        {
            name:'Hiphop',
            works: [props.works[1], props.works[2]] 
        },
        {
            name:'Instrumentals',
            works: [props.works[4]] 
        },
        {
            name:'Acapella',
            works: []
        }
    ];

    const allWorks = props.works.map((work,idx) => {
        return {name: work.title + " - " + work.artist, id: work.id, idx: idx}});

    const [categoryIdx, setCategoryIdx] = useState(0);
    const [displayedWorks, setDisplayedWorks] = useState(categoryWorks[0].works)
    const [searchedWorks, setSearchedWorks] = useState([]);
    const [searchMode, setSearchMode] = useState(false);

    const handleClick = (idx) => {
        setCategoryIdx(idx);
    }

    const handleSearch = () => {
        const workIds = searchedWorks.map(work => work.id);
        const results = props.works.filter(work => workIds.includes(work.id));
        console.log(results)
        setDisplayedWorks(results);
        setSearchMode(true);
    }

    let reverse_work = props.works;


    return (
        <div className="page explore-page">
            <div className="header">
                {searchMode && <button className="box-btn" onClick={() => {setSearchMode(false); setSearchedWorks([])}}>Back</button>}
                <div className="search-box">
                    <SelectReference options={allWorks} selectedOptions={searchedWorks} selectLimit={-1}
                        handleSelect={selectedWork => {setSearchedWorks(selectedWork)}} placeholder="Select works to search for"/>
                
                    <button className="btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                
            </div>   
            {!searchMode && 
            (   <div className="bottom-page">
                    <ExploreView works={reverse_work.reverse()} title={"Trending"}/>
                    <ExploreView works={props.works.slice(2,4)} title={"Recently Uploaded"}/>
                    <CategoryWork handleClick={handleClick}/>
                    <ExploreView works={categoryWorks[categoryIdx].works} title={categoryWorks[categoryIdx].name}/>
                </div>
            )}

            {searchMode &&
            (
                <div className="search-page">
                    <ExploreView works={displayedWorks} title={displayedWorks.length ? "Search Results" : "No Search Results"}/>
                </div>
            )}
        </div>
        
    );
}

ExplorePage.propTypes = {
    works: PropTypes.array
}

export default ExplorePage;
