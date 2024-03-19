import React,{useState,useEffect} from 'react'
import '../index.css'
import '../styles/Admin.css'
import  axios from 'axios'
export const Admin = () => {
    const[post,setPost]=useState([])
    const[id,setId]=useState()
    const[name,setName]=useState('')
    const[age,setAge]=useState()
    const[img,setImg]=useState()

    useEffect(()=>{
        axios.get('http://localhost:3001/users1')
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id == null || name == null || age == null||img==null)
        alert("Enter valid Data")
    else
        axios.post(`http://localhost:3001/users1`,{"id":id,"name":name,"age":age,"image":img})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const handleDelete=(id) => {
        axios.delete(`http://localhost:3001/users1/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const[popup,setPopup]=useState(false)
    const[id1,setId1]=useState()
    const[name1,setName1]=useState('')
    const[age1,setAge1]=useState()
    const[img1,SetImg1]=useState()


    const openpopup=(datas)=>{
        setPopup(true)
        setId1( datas.id)
        setName1( datas.name)
        setAge1(datas.age)
        SetImg1(datas.image)

    }
    let handleupdate = () =>{
        axios.put(`http://localhost:3001/users1/${id1}`,{
            "id":id1,
            "name":name1,
            "age":age1,
            "image":img1
          })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div  className='admin-form'>
        <form  onSubmit={handleSubmit}><center>
            <label>Event Name</label><br></br>
            <br></br>
            <input className=''  type="text" value={id} onChange={(e)=>setId(e.target.value)}/><br></br><br></br>
            <label>Name</label><br></br>
            <br></br>
            <input className=''  type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
            <label>Phone Number</label><br></br>
            <br></br>
            <input className=''  type="number" value={age} onChange={(e)=>setAge(e.target.value)}/><br></br><br></br>
             <label>Give FeedBack</label><br></br>
             <br></br>
            <input className=''  type="text" value={img} onChange={(e)=>setImg(e.target.value)}/><br></br><br></br>
            <br></br>
            <button type='submit'>submit</button>
            <br></br>
            </center>
        </form>

         {popup && 
         <div>  
            <form>
            <button onClick={()=>{setPopup(false)}}>X</button>
            <label>Rollno:</label>
            <input type="number" value={id1} onChange={(e)=>setId1(e.target.value)}/><br></br>
            <label>Name:</label>
            <input type="text" value={name1} onChange={(e)=>setName1(e.target.value)}/><br></br>
            <label>ph</label>
            <input type="number" value={age1} onChange={(e)=>setAge1(e.target.value)}/><br></br>
            <label>Give FeedBack</label>
            <textarea type="text" value={img1} onChange={(e)=>SetImg1(e.target.value)}></textarea><br></br>
            <button type='submit' onClick={handleupdate}>submit</button>
        </form >
        </div>}    
    </div>
  )
}