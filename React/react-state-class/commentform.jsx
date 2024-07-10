import { useState } from "react";

export default function CommentsForm() {
 let [formData,setFormData] = useState({
    username: "",
    remarks: "",
    rating: "5",
 });
 let handelInputChange = (event) => {
    setFormData((curData) => {
        return{...curData ,[event.target.name] : event.target.value};
    });
 }
 let handleSumit =(event) => {
    console.log(formData);
    event.preventDefault();
 }

    return (
        <div>
        <h4>Give me a comment</h4>
        <form onSubmit={handleSumit}>
             <label htmlFor="username">Username</label>
             &nbsp;&nbsp;&nbsp;
            <input placeholder="username"
             type="text"value={formData.username} 
             onChange={handelInputChange}
             id="username"
             name="username"></input>

            <br></br> <br></br>
            <label htmlFor="remarks">Remarks</label>
            &nbsp;&nbsp;&nbsp;
            <textarea placeholder="add few remarks"
             value={formData.remarks}
              onChange={handelInputChange}
              id="remarks"
              name="remarks">Remarks</textarea>

            <br></br> <br></br>
            <label htmlFor="rating">Rating</label>
            &nbsp;&nbsp;&nbsp;
            <input placeholder="rating" type="number" 
            min={1}
            max={5}
             value={formData.rating}
             onChange={handelInputChange}
             id="rating"
             name="rating"></input>

            <br></br> <br></br>
            <button>Add Comment</button>
        </form>
        </div>
    );
}
