import React from 'react';
import "./styles.css";
import album_cover from '../../data/album_cover.jpeg';
import album_cover2 from '../../data/album_cover2.jpeg';
import album_cover3 from '../../data/album_cover3.jpeg';
import MusicSheet from '../../components/MusicSheet';
import { Link } from 'react-router-dom';

function Features (props) {
    
    const references = [
        {
            id: 8,
            imgSrc: album_cover2,
            description:"I love this work",
            title: "Iconology",
            artist: "MissyE"
        },
        {
            id: 3,
            imgSrc: album_cover3,
            description:"I love this work 2",
            title: "Fine Line",
            artist: "Harry Styles"
        },
        {
            id: 8,
            imgSrc: album_cover2,
            description:"I love this work",
            title: "Iconology",
            artist: "MissyE"
        },
        {
            id: 3,
            imgSrc: album_cover3,
            description:"I love this work 2",
            title: "Fine Line",
            artist: "Harry Styles"
        },
        {
            id: 8,
            imgSrc: album_cover2,
            description:"I love this work",
            title: "Iconology",
            artist: "MissyE"
        },
        {
            id: 3,
            imgSrc: album_cover3,
            description:"I love this work 2",
            title: "Fine Line",
            artist: "Harry Styles"
        }];


    return (
        <div className="page features-page">
            <h1 className="page-title music-sheet-title">
                <Link to='/coverpage' className="purple-link"> Pain's </Link>
                 Feature History
            </h1>

            <MusicSheet references={references} top={true}/>
            <MusicSheet references={references} top={false}/>
        </div>
        
    );

}

export default Features;