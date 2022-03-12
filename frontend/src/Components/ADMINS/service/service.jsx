import axios from 'axios';
import React from 'react';
import {useState , useEffect} from 'react';
import './service.css';


function Service() {
    const [reload, setreload] = useState(false)

    const [input, setinput] = useState({
        item:'',
        location:'',
        contact:''
    })
    
  const  handleChange=(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
        axios.post('http://localhost:8008/admin/addService',input).then((result)=>{
            console.log(result)
            alert("added")
        })
    }

    useEffect(() => {
        
       }, [reload])

  
  
    
  return (
    <div className="container" >
        <h2>Add here!!!</h2>
        <div className='demo'>
            <input type="text" name="item" placeholder="item" onChange={handleChange} />
        </div>
        <div className='demo1'>
            <input type="text" name="location" placeholder="location" onChange={handleChange}  />
        </div>
        <div className='demo2'>
            <input type="text" name="contact" placeholder="contact" onChange={handleChange} />
        </div>
        <br />
        <div>
            <input type="button" value="submit" onClick={handleSubmit} />
        </div>

        <div>

            
        </div>
        
    </div>
  )
}

export default Service