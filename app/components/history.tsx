'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import css from './history.module.css'


interface LinkItem{
  id:string;
  slug:string;
  url:string
  userId:string;
}

const History=()=>{
  const [history,setHistory]=useState<LinkItem[]>([])

   useEffect(()=>{
    const fetchHistory  = async () => {
       try{
           const response =await axios.get('/api/shorten')
          if (response.status===200){
              setHistory(val=>response.data)
             
          }
        
        } catch(err){
        console.error(err)
      }
    
    }
      fetchHistory()
      
      
      })
/*
      if(!loading){
        return(
          <div>
            Loading...
          </div>
        )
      }
     
*/
  return(
    <div>
      <ul className={css.orederedLink}>
        {
          
          history?.map((link,i)=>(
              <li key={link.id}>
                <Link href={`/dashboard/${link.slug}`} className={css.myLink}>
                {window.location.host}/dashboard/{link.slug}
                </Link>
              </li>
          ))
        }
      
      </ul>
    </div>
  )
}

export default History