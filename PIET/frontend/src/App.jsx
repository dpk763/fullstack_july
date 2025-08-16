import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './components/Slider'
import Card from './components/Card'
function App() {
  const students = [
    {
      title:"Heading 1",
      desc:"This is desc 1",
      src:"https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
    },
     {
      title:"Heading 2",
      desc:"This is desc 2",
      src:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
    },
     {
      title:"Heading 3",
      desc:"This is desc 3",
      src:"https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
    },
     {
      title:"Heading 4",
      desc:"This is desc 4",
      src:"https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
    }
  ];

  const msg = (a)=>{
    alert(a);
  }

  return (
    <>
      <NavBar/>
      <Slider/>
     
     <div className="container my-4">
        <div className="row">
         {students.map((item, index)=>{
            return(
              <div className="col">
                <Card item={item} fun={msg}/>
              </div>
            )
         })}
        </div>
     </div>
    </>
  )
}

export default App
