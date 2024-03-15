import React, {useEffect, useState} from "react";
import axios from 'axios'
import Anounce from "./Anounce/Anounce";
import {NavLink, Outlet, Link} from 'react-router-dom'
import './Portfolio.scss'

export default function Portfolio (){
    const [anounce, setAnounce] = useState(false)
    const [rend, setRend] = useState(false)
    useEffect(() => {
        console.log('привет из Portfolio -> useEffect')
        axios.post('http://127.0.0.1:8000/publications/getanounce/', ).then((data) => {setAnounce(data.data)
            Object.keys(data.data).map((e)=>{console.log(e)})
            console.log(data.data[0]['name'])
        })
    }, [rend,])

    function anounces(){
        // setRend(!rend)
        console.log('Внутри function anounces')
        // return <p>s;gkjdfk</p>
        if(anounce){
            console.log('Внутри function anounces в условии')
            return Object.keys(anounce).map((e)=>{
                console.log(e)
                return <div className="anounce-link" ><NavLink  to={(anounce[e]['id']+"/")}><Anounce data={anounce[e]}/></NavLink></div>
                // return Object.keys(anounce[e]).map((ee)=>{
                //     console.log(ee)
                   
                // })
                // console.log('Внутри function anounces в условии в return ${e["id"]}'+e['id']+"/")
                // return <NavLink to={(e+"/")}><Anounce data={e}/></NavLink>
            })
        }
    }
    
    return <div className="Portfolio">{anounces()}
    
    </div>
}