import React, {  useState } from 'react'
import Slider from '../components/Slider'
function Home() {
  // const [val,setVal]=useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Handle change for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Spread previous state
      [name]: value, // Update specific field
    }));
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // }
  return (
    <>
      {/* <p>{val}</p>
    <button onClick={()=>setVal(val+1)}>click</button> */}
      {/* <form onSubmit={handleClick}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter Age"
        />
        <button type="submit">Submit</button>
      </form> */}
      <Slider />

     
    </>
  )
}

export default Home
