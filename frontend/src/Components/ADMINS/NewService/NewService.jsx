import React from 'react'
import {Modal ,Button} from 'react-bootstrap'
import {useState ,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function NewService() {
  const history=useHistory()
  const [show, setShow] = useState(false);
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
      history.push('/adminhome')
    })
  }
  const handleClose = () => {
    setShow(false);
    history.push('/adminhome')
  }
  const handleShow = () => setShow(true);
useEffect(() => {

  handleShow()
        
}, [])
  return (
    <div>

<>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='demo'>
            <input type="text" name="item" placeholder="item" onChange={handleChange} />
        </div>
        <div className='demo1'>
            <input type="text" name="location" placeholder="location" onChange={handleChange}  />
        </div>
        <div className='demo2'>
            <input type="text" name="contact" placeholder="contact" onChange={handleChange} />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <div>
            <input type="button" value="submit" onClick={handleSubmit} />
        </div>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>

    </div>
  )
}

export default NewService