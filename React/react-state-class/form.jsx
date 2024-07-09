import { useState } from "react"

export default function Form() {
    
    
     
 let [formData, setFormData] = useState({fullName:"", username:"", pasward:"",});
   
 let handelInputChange = (event) => {
    setFormData((curData) => {
        return {...curData,[ event.target.name]: event.target.value };
  });
 };

 
 let handelSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName: "",
        username: "",
        pasward: "",
    });

 };
        
  

    return (
    <form onSubmit={handelSubmit}>
    <label htmlFor="Full Name">Full Name</label>
    &nbsp;
    <input placeholder="enter full name"
     type="text" value={formData.fullName} 
     onChange={handelInputChange}
     id="Full Name"
     name="fullName"/>
    <br></br>
    <br></br>
    
     <label htmlFor="UserName">UserName</label>
    &nbsp;
    <input placeholder="enter username"
     type="text" value={ formData.username} 
     onChange={handelInputChange}
     id="UserName"
     name="username"/>
     &nbsp;
    <br>
    </br>
    <br></br>
    <label htmlFor="pasward">Pasward</label>
    &nbsp;
    <input placeholder="enter pasward"
     type="pasward" value={ formData.pasward} 
     onChange={handelInputChange}
     id="pasward"
     name="pasward"/>
     <br></br>
     <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button >submit</button>

    </form>
    )
}
