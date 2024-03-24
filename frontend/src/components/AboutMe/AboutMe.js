import React, {useEffect, useState} from "react";
import axios from "axios";
import './AboutMe.scss'
// import {loremIpsum } from 'react-lorem-ipsum'



export default function AboutMe(){

    const [post, setPost] = useState(null)
    const [toogle, setToogle] = useState(false)

    useEffect(() =>{
        axios.post('http://localhost:8000/about/', ).then(response =>{
            setPost(response.data[0])
        })
    },[toogle,])
    
    function about(){
        
        if(post){
            return <div className="about-me">
                        <h3 className="about-me-header">{post['header']}</h3>
                        <div className="about-me-content">
                            <div className="photo-conteiner">
                                <img src={'http://127.0.0.1:8000/' + post['photo']}/>
                                
                            </div>
                            <div>
                                <text>{post['text']}</text>
                            </div>
                        </div>
                    </div>
        }
    }
    return <div className="about-container">{about()}</div>
}