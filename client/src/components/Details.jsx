import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'





const Details = () => {
    const [pet, setPet] = useState("")
    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res) => setPet(res.data))
        .catch((err) => console.log('This is our detail page: ' + err))
    }, [id])

    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:8000/api/pet/${id}`)
        .then((res) => {
            console.log(`Deleting Pet ${id}`, e)
            navigate('/')
        })
        .catch((err) => {console.log(err)})
    }

  return (
    <div>
        <button><Link to={'/'}>Back to Home</Link></button>
        <h1>Details about {pet.name}</h1>
        <h3>Pet type: {pet.type}</h3>
        <h3>Description: {pet.description}</h3>
        <h3>Skill 1: {pet.skill_1}</h3>
        <h3>Skill 2: {pet.skill_2}</h3>
        <h3>Skill 3: {pet.skill_3}</h3>
        <button  onClick={(e) => {handleDelete(e, pet._id)}}>Adopt {pet.name}</button>
    </div>
  )
}

export default Details