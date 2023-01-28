import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link} from 'react-router-dom'



const Update = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill_1, setSkill_1] = useState("")
    const [skill_2, setSkill_2] = useState("")
    const [skill_3, setSkill_3] = useState("")

    const [errors, setErrors] = useState([]); 

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + id)
        .then((res) => {
            console.log("This is my update get request: " + res.data)
            const pet = res.data
            setName(pet.name)
            setType(pet.type)
            setDescription(pet.description)
            setSkill_1(pet.skill_1)
            setSkill_2(pet.skill_2)
            setSkill_3(pet.skill_3)
        })
        .catch(err => console.log("This my update request error: ", err))
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault()
        const petObj ={name, type, description, skill_1, skill_2, skill_3}
        axios.put(`http://localhost:8000/api/pet/${id}`, petObj)
        .then((res) => {
            navigate("/")
        })
        .catch(err =>{
            console.log("This is our create page catch error:", err)
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })            
    }




  return (
    <div>
        <h3>Edit</h3>
        <button><Link to={'/'}>Back to Home</Link></button>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Pet Name:</label>
                <input type="text" onChange={(e) => {setName(e.target.value)}} value={name}></input>
            </div>
            <div>
                <label>Pet Type:</label>
                <input type="text" onChange={(e) => {setType(e.target.value)}} value={type}></input>
            </div>
            <div>
                <label>Description:</label>
                <input type="text" onChange={(e) => {setDescription(e.target.value)}} value={description}></input>
            </div>
            <div>
                <label>Skill 1: </label>
                <input type="text" onChange={(e) => {setSkill_1(e.target.value)}} value={skill_1}></input>
            </div>
            <div>
                <label>Skill 2: </label>
                <input type="text" onChange={(e) => {setSkill_2(e.target.value)}} value={skill_2}></input>
            </div>
            <div>
                <label>Skill 3: </label>
                <input type="text" onChange={(e) => {setSkill_3(e.target.value)}} value={skill_3}></input>
            </div>
            <button type="submit">Edit Pet</button>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </form>
    </div>
  )
}

export default Update