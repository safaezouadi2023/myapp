import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FaUserTimes,FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Nav({data,delet,setdata,hm}) {
    const [serch,setserch]=useState('')
  return (
   < >
   <div className="backghround">
   <div className="">
                <h1 className='h1' > CONTACT BOOK </h1>
                <div >

                <Form.Control 
              type="search"
              placeholder=  "Search "
              className="serach"
              aria-label="Search"
              onChange={(e)=>setserch(e.target.value)}
              />
              
              </div>
              <div className=''>
                  <Link to="/create" className='add'>Add</Link>
                </div>
              <div className='line'></div>
              <div className='infouser'>
                
                <div>
                    
                </div>
              </div>
              <div >
               {
                data.filter((item)=>{
                    return serch.toLocaleLowerCase()==="" ? item :item.ville.toLocaleLowerCase().includes(serch);
                }).map((t)=>{
                    return(
                        <div key={t.id} className='linee'>
                <h1> {t.nom} </h1>
                <h1>{t.tel}</h1>
                <h1> {t.ville}</h1>
                <FaUserTimes  onClick={() => delet(t.id)}/>
                
               </div>
                    )
                })
               }
            
              </div>
            </div>
            </div>
   </>
  )
}

export default Nav
