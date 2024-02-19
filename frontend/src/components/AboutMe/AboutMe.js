import React from "react";
import './AboutMe.scss'
import Photo from './../../images/photo.jpg'
import {loremIpsum } from 'react-lorem-ipsum'
export default function AboutMe(){
    return <div className="about-me">AboutME
        <h3 className="about-me-header"> </h3>
        <div className="about-me-content">
            <div className="photo-conteiner">
                {/* <img src={Photo}/> */}
                <img />
            </div>
            <div><text>{loremIpsum({avgWordsPerSentence: 500})}
                </text></div>
            
        </div>
    </div>
}