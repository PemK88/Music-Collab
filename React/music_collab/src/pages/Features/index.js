import React from 'react';
import "./styles.css";
import album_cover2 from '../../data/album_cover2.jpeg';
import album_cover3 from '../../data/album_cover3.jpeg';
import MusicSheet from '../../components/MusicSheet';
import album_cover4 from '../../data/album_cover4.jpeg';
import album_cover5 from '../../data/album_cover4.png';
import album_cover6 from '../../data/album_cover5.jpeg';
import { Link } from 'react-router-dom';

function Features (props) {

    //A get request will be made to the database to get all works that
    //feature and are featured in the selected work
    const featuredIn = [
        {
            id: 8,
            imgSrc: album_cover2,
            description:"I reversed portions of this song for making my I conic song",
            title: "Iconology",
            artist: "MissyE"
        },
        {
            id: 5,
            imgSrc: album_cover6,
            description:"We loved this melody and beat combo! had to use it",
            title: 'My Universe',
            artist: 'Bulletproof Boys'
        },
        {
            id: 8,
            imgSrc: album_cover2,
            description:"I reversed portions of this song for making my I conic song",
            title: "Iconology",
            artist: "MissyE"
        },
        {
            id: 5,
            imgSrc: album_cover6,
            description:"We loved this melody and beat combo! had to use it",
            title: 'My Universe',
            artist: 'Bulletproof Boys'
        },
        {
            id: 8,
            imgSrc: album_cover2,
            description:"I reversed portions of this song for making my I conic song",
            title: "Iconology",
            artist: "MissyE"
        },
        {
            id: 5,
            imgSrc: album_cover6,
            description:"We loved this melody and beat combo! had to use it",
            title: 'My Universe',
            artist: 'Bulletproof Boys'
        }
    ]
    
    const features = [
        {
            id: 3,
            imgSrc: album_cover3,
            description:"I used the melody from this song",
            title: "Fine Line",
            artist: "Harry Styles"
        },
        ,
        {
            id: 2,
            imgSrc: album_cover4,
            description:"I used some of the adlibs from this song",
            title: 'Lost In Japan (Remix)',
            artist: 'Zedd'
        },
        {
            id: 4,
            imgSrc: album_cover5,
            description:"I used this as the base beat for my song",
            title: 'Unlocked (instrumentals)',
            artist: 'Kenny Beats'
        },
        {
            id: 3,
            imgSrc: album_cover3,
            description:"I used the melody from this song",
            title: "Fine Line",
            artist: "Harry Styles"
        },
        {
            id: 2,
            imgSrc: album_cover4,
            description:"I used some of the adlibs from this song",
            title: 'Lost In Japan (Remix)',
            artist: 'Zedd'
        },
        {
            id: 4,
            imgSrc: album_cover5,
            description:"I used this as the base beat for my song",
            title: 'Unlocked (instrumentals)',
            artist: 'Kenny Beats'
        },
        {
            id: 3,
            imgSrc: album_cover3,
            description:"I used the melody from this song",
            title: "Fine Line",
            artist: "Harry Styles"
        },
        {
            id: 2,
            imgSrc: album_cover4,
            description:"I used some of the adlibs from this song",
            title: 'Lost In Japan (Remix)',
            artist: 'Zedd'
        },
        {
            id: 4,
            imgSrc: album_cover5,
            description:"I used this as the base beat for my song",
            title: 'Unlocked (instrumentals)',
            artist: 'Kenny Beats'
        }
    ];


    return (
        <div className="page features-page">
            <h1 className="page-title music-sheet-title">
                <Link to='/coverpage' className="purple-link"> Pain's </Link>
                 Feature History
            </h1>

            <MusicSheet references={features} top={true}/>
            <MusicSheet references={featuredIn} top={false}/>
        </div>
        
    );

}

export default Features;