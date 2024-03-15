import React, { useState, useEffect } from 'react'


export default function Anounce(props){

    const [data, setData] = useState(null)
    const [header, setHeader] = useState(null)
    const [paragraph, setParagraph] = useState(null)
    const [content, setContent] = useState(null)
    useEffect(()=>{
        if (props.data){
            setData(props.data)
            setHeader(props.data.name)
            setParagraph(props.data.part_of_article[0].header)
            setContent(props.data.part_of_article[0].content)
        }
    })
    function handlerClick(){
        console.log('Нажали')
        console.log(data.name)
        console.log(data.part_of_article[0].header)
    }
    // function content(){
    //     if(data){
    //         setHeader(data.name)
    //     }
    // }
    
    return <div className='anounce'  onClick={handlerClick}>
                <h2 className='anounce-header'>{header}</h2>
                <h4 className='anounce-paragraph'>{paragraph}</h4>
                <p className='anounce-content'>{content}</p>
        </div>
}