import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Article.scss'

export default function Article(){
    const [params, setParams] = useState(useParams())
    const [post, setPost] = useState(null)
    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/publications/getarticle/', params).then(response =>{
            setPost(response.data[0])
        })
    }, [params,])
    let article 
    let parts_of_article
    /*
    Структура JSON
    [{
        
        date_of_change:
        date_wrote:
        id:
        name:
        part_of_article[{
            article:
            paragraph:
            image:
            header:
            content:
        },{}]
    }]
    Построение статьи:
    Название - заголовок
    часть статьи состоит из названия часть, если требуется, изображения(если есть) и текстовой части
    внизу после всего стоит дата написания, редактирования
    состояние post содержит в себе объект из JSON 
    */ 
    if (post){
        parts_of_article = ()=>{
            
            return Object.keys(post['part_of_article']).map((i)=>{
                
                return <div className='paragraph-container'>
                    <h4 className='paragraph-header'>{post['part_of_article'][i]['header']}</h4>
                    <p className='paragraph-content'>{post['part_of_article'][i]['content']}</p>
                </div>
            })
        }
        article = <div className='article'>
            <p className='article-header'>{post['name']}</p>
            <div className='article-content'>{parts_of_article()}</div>
            <p className='article-date-wrote'>Дата написания:{post['date_wrote']}</p>
            <p className='article-date-change'>Дата изменения:{post['date_of_change']}</p>
            
        </div>
    }
    
    
    return <div className='article-container'>{article}</div>
    
}