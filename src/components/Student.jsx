import React, { useState } from "react";
import './Student.css'
const Student = ()=>{
    const [Details, setDetails] = useState({
        First:"",
        Last:"",
        Email:"",
        Gender:"",
        Age:"",
        Tenth:"",
        Twelth:"",
        Law:"",
    })
    const [Record, setRecord] = useState([])
    const handleInput = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setDetails({...Details,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const newRecord = {...Details, id:new Date().getTime().toString()}
        setRecord([...Record,newRecord])
        setDetails({First:"",Last:"",Email:"",Gender:"",Age:"",Tenth:"",Twelth:"",Law:"",})
    }
    return(
    
            <div className="main_div">
            <div className="school">
            <div className="school_image"><img src="https://www.transparentpng.com/thumb/school/zUM2gk-school-icon-clipart.png" alt=""/></div>
            <div  className="Details">
               <form onSubmit={handleSubmit}>
                   <div>
                       <label>Firstname</label>
                       <input required="true" type="text" name="First" value={Details.First} onChange={handleInput}/>
                   </div>
                   <div>
                       <label>Last Name</label>
                       <input type="text" name="Last" value={Details.Last} onChange={handleInput}/>
                   </div>
                   <div>
                       <label>Email</label>
                       <input required="true" type="text" name="Email" value={Details.Email} onChange={handleInput}/>
                   </div>
                   <div>
                       <label>Gender</label>
                       <input required="true" type="text" name="Gender" value={Details.Gender} onChange={handleInput}/>
                   </div>
                   <div>
                       <label>Age</label>
                       <input required="true" type="Number" name="Age" value={Details.Age} onChange={handleInput}/>
                   </div>
                   <div>
                       <label>Tenth Score</label>
                       <input required="true" type="Number" name="Tenth" value={Details.Tenth} onChange={handleInput}/>
                   </div>
                   <div>
                       <label>Twelth Score</label>
                       <input required="true" type="Number" name="Twelth" value={Details.Twelth} onChange={handleInput}/>
                   </div>
                   <div>
                       <label>Law</label>
                       <input required="true" type="text" name="Law" value={Details.Law} onChange={handleInput}/>
                   </div>
                   <button type="submit">Submit</button>
               </form>
            </div>
            <div className="school_name"><span>Tracking System</span><br/><span>of</span><br/><span>Student</span><br/></div>
            </div>
            
            <div className="all_data_heading">
                <table>
                    <thead>
                        <tr>
                            <td><p>First Name</p></td>
                            <td><p>Last Name</p></td>
                            <td><p>Email</p></td>
                            <td><p>Gender</p></td>
                            <td><p>Age</p></td>
                            <td><p>Tenth Score</p></td>
                            <td><p>Twelth Score</p></td>
                            <td><p>Law</p></td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="all_data">
                {
                    Record.map((val)=>{
                        return(
                            <div>
                            <table>
                                <thead>
                                <tr>
                                    <td><p>{val.First}</p></td>
                                    <td><p>{val.Last}</p></td>
                                    <td><p>{val.Email}</p></td>
                                    <td><p>{val.Gender}</p></td>
                                    <td><p>{val.Age}</p></td>
                                    <td><p>{val.Tenth}</p></td>
                                    <td><p>{val.Twelth}</p></td>
                                    <td><p>{val.Law}</p></td>
                                </tr>
                                    
                                </thead>
                            </table>           
                            </div>
                        )
                    })
                }
            </div>
            </div>
    )
}

export default Student