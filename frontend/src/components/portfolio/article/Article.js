import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Article.scss'
import { Link} from "react-router-dom";

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
        
        function parts_of_article(){
            
            return Object.keys(post['part_of_article']).map((i)=>{
                console.log(post['part_of_article'][0]['image'])
                return <div className='paragraph-container'>
                    <h4 className='paragraph-header'>{post['part_of_article'][i]['header']}</h4>
                    <p className='paragraph-content'>{post['part_of_article'][i]['content']}</p>
                </div>
            })
        }
        article = <div className='article'>
            <p className='article-header'>{post['name']}</p>
            <img src={'http://127.0.0.1:8000/'+post['part_of_article'][0]['image']}/>{/*КОСТЫЛЬ!!!*/}
            {/*Суть костыля:
            костыль находится в конкатекации с URL- django
            без него React ищет картинку на своём localhost:3000 и естественно
            он его там не находит, при объединении портов всё работает ровно до того момента, 
            пока не произойдёт rerender страницы, тогда мы теряем связь с React-router и получаем 404 от django
            прописать в urls перенаправления не удалось, 
            
            БОЛЬШОЙ + костыля в том, что это только для разработки, перед выполнением npm run build
            необходимо убрать костыль, иначе поломается*/}
            <div className='article-content'>{parts_of_article()}</div>
            <p className='article-date-wrote'>Дата написания:{post['date_wrote']}</p>
            <p className='article-date-change'>Дата изменения:{post['date_of_change']}</p>
            
        </div>
    }
    
    
    return <div className='article-container'>
                <Link className='return-to-back' to='..' relative="path"><p>НАЗАД</p></Link>
                {article}
            </div>
    
}