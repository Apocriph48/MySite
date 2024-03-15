import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Article.scss'

export default function Article(){
    const [params, setParams] = useState(useParams())
    const [post, setPost] = useState(null)
    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/publications/getarticle/', params).then(response =>{setPost(response.data[0])})
    }, [params,])
    let data
    let header_of_article
    let header_of_paragraph
    let content_of_paragraph
    if (post){
        data = Object.keys(post).map((e)=>{
            console.log(e)
            // console.log(post[e])
            return <p>{post[e]}</p>})
    }
    
    // return <div>Содержимое{params.id}</div>
    return <div>
        {data}
    </div>
}