import axios from 'axios';
import React, { useEffect, useState ,useContext} from 'react'
import './Change.css'
import {DataContext} from '../../Context/Context'
import {Table} from 'react-bootstrap'

function Change() {
    const [ref, setref] = useState(false)
    const { Users, Cartcount, AdminTrue } = useContext(DataContext)
    const [adminTrue, setadminTrue] = AdminTrue
    const [items, setitems] = useState([
        
    ])
    const getAdmindetails = () => {
        axios.get('http://localhost:8008/admin/').then((response) => {
          console.log(response);
          setitems(response.data.products)
        })
      }
      const deleteItem =(id)=>{
          alert
          ("deleted")
          axios.post(`http://localhost:8008/admin/delete-product/${id}`).then((res)=>{
              console.log(res);
              setref(true)
              setref(false)
          })
      }
      const deleteAllItem =()=>{
        alert("deleted")
          
          axios.get('http://localhost:8008/admin/delete-all-products').then((res)=>{
              console.log(res);
              setref(true)
              setref(false)
          })
      }
      useEffect(() => {
            getAdmindetails()
            setadminTrue(true)
      }, [ref])
    return (
        <div className='main-i' >
            
 <>
 <Table striped bordered hover variant="dark">
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Uploaded</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {items.map((i)=>(
            <tr>
            <td>{i.Name}</td>
            <td>{i.Price}</td>
            <td>{i.CreatedBy}</td>
            <td><button onClick={()=>deleteItem(i._id)} className='btn btn-danger' >Delete</button></td>
        </tr>

        ))}
        
       
        
    </tbody>
</Table>
<div className="dlt-btn">
<button className='btn btn-danger' onClick={deleteAllItem} >Delete All</button>
</div>
</>:
<div  className="no-item mt-4">
 
 </div>
 
 


            {/* <div class="container">
  
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Job Id</div>
      <div class="col col-2">Customer Name</div>
      <div class="col col-3">Amount Due</div>
      <div class="col col-4">Payment Status</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">42235</div>
      <div class="col col-2" data-label="Customer Name">John Doe</div>
      <div class="col col-3" data-label="Amount">$350</div>
      <div class="col col-4" data-label="Payment Status">Pending</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">42442</div>
      <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
      <div class="col col-3" data-label="Amount">$220</div>
      <div class="col col-4" data-label="Payment Status">Pending</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">42257</div>
      <div class="col col-2" data-label="Customer Name">John Smith</div>
      <div class="col col-3" data-label="Amount">$341</div>
      <div class="col col-4" data-label="Payment Status">Pending</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">42311</div>
      <div class="col col-2" data-label="Customer Name">John Carpenter</div>
      <div class="col col-3" data-label="Amount">$115</div>
      <div class="col col-4" data-label="Payment Status">Pending</div>
    </li>
  </ul>
</div> */}
        </div>
    )
}

export default Change
