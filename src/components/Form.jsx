
import {useState} from "react"

export const Form = () => {
    const[formData, setFormData] = useState({
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        martialStatus:"",
        email:""
    });

    const handleChange = (e) =>{
        console.log(e.target.id)
        // if(e.target.id === "username"){                      //Its a long method 
        //     setFormData({
        //         ...formData,
        //         username:e.target.value,
        //     })
        // }
        // if(e.target.id === "age"){
        //     setFormData({
        //         ...formData,
        //         username:e.target.value,
        //     })
        // }

        //short cut

        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("data:",formData)
        fetch("http://localhost:8080/formData",{
            method:"POST",
            headers:{"content-type":"application/json",},
            body:JSON.stringify(formData)
        })
    }
    return(
        <form onSubmit = {handleSubmit}>
  
          <input onChange={handleChange} value={formData.name} type="text"
          id="name" placeholder="enter your name" />

          <input onChange={handleChange} value={formData.age} type="number" 
          id="age" placeholder="age" />

          <input onChange={handleChange} value={formData.address} type="text" 
          id="address" placeholder="enter address" />

          {/* <input onChange={handleChange} value={formData.department} type="select" 
          id="department"  /> */}

          <select onChange={handleChange} name="Department"  id="department">
           <option value="frontend">Frontend</option>
           <option value="backend">Backend</option>
           <option value="marketing">Marketing</option>
           <option value="design">Design</option>
          </select>

          <input onChange={handleChange} value={formData.salary} type="text" 
          id="salary" placeholder="enter salary" />

          {/* <input onChange={handleChange} value={formData.martialStatus} type="text" 
          id="martialStatus" placeholder="enter martialStatus" /> */}

          <select onChange={handleChange} name="martialStatus"  id="martialStatus">
           <option value="married">Married</option>
           <option value="unmarried">Unmarried</option>
          </select>

          <input onChange={handleChange} value={formData.email} type="text" 
          id="email" placeholder="enter email" />

  
          <input type="submit" value="Submit" />
        </form>
    )
}
