import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Createcontan({data,setdata,Changer,newContact,add}) {
   
    
  return (

    <div>
     
      <div>
    
                   
                <div className='navcreate'>
                <Container>
                <Link to="/" className='can'>Cancel</Link>
                    <h5 ><i> New Contact </i></h5>
                    <button className='bt' onClick={()=>add(newContact)}>Done</button>
                    </Container>
                </div>
                <div>
                  <Container>
                    <input className='input' required type="text" placeholder='Nom' name="name" value={newContact.name} onChange={Changer}  /> 
                    <input className='input' required type="text" placeholder='Tele'name="phone" value={newContact.phone} onChange={Changer} />
                    <input className='input' required type="text" placeholder='Ville'name="ville" value={newContact.v} onChange={Changer}  /> 
                    {console.log(newContact)}
                    </Container>
                </div>
            </div>

    </div>
    
  )
 
}

export default Createcontan
