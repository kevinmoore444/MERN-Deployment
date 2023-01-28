import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Display = () => {
    const[petList, setPetList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then((res) => {
            console.log(res.data)
            setPetList(res.data)
        })
        .catch((err) => {console.log(err)})
    }, [])




  return (
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    petList.map((pet, idx) => {
                        return(
                            <tr key={idx}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><button><Link to={`/details/${pet._id}`}>Details</Link></button> | <button><Link to={`/update/${pet._id}`}>Edit</Link></button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <button><Link to={'/create'}>Add a pet to the Shelter</Link></button>
    </div>
  )
}

export default Display