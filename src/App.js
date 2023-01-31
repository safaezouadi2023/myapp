import React,{useState} from 'react'
import Contact from './componanets/contact'
import Createcontan from './componanets/Createcontact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  const [data,setdata]=useState([
  ])
  const [newContact, setNewContact] = useState({id:Math.random(), name: '', phone: '', ville: ''});


    const Changer = (event) => {
      setNewContact({ ...newContact, [event.target.name]: event.target.value });
     
      }

      const add= (newContact) => {
        if (!newContact.name || /^\s*$/.test(newContact.name) && !newContact.phone || /^\s*$/.test(newContact.phone)&&!newContact.ville || /^\s*$/.test(newContact.ville)) {
          return;
        }
        const newarr=[...data]
        const newob={}
        newob.id=Math.random()
        newob.nom=newContact.name
        newob.tel=newContact.phone
        newob.ville=newContact.ville
        newarr.push(newob)
        setdata(newarr)
        setNewContact({id:Math.random(), name: '', phone: '', ville: ''})

       
        
      }
      const delet=(id)=>{
        const newwarr=data.filter((item)=>{
          return item.id!==id
        })
        setdata(newwarr)
      }
      const hm=()=>{
        const neaarr=[...data]
        neaarr.sort((a, b) => {
     
            return a.nom.localeCompare(b.nom);
        }
        );
      
        
        setdata(neaarr)
       
    }
 
  return (
    <div >
      <BrowserRouter basename='contact'>
      <Routes>
      <Route path='/' element={<Contact data={data} delet={delet}  hm={hm} />} setdata={setdata} />  
      
      <Route path='/create' element={<Createcontan data={data} setdata={setdata} add={add}   newContact={newContact} Changer={Changer} />} />  
  

      </Routes>
      
      </BrowserRouter>
      
    </div>
  
    
  )
 
  
}

export default App