import React from 'react'
import { useState } from 'react'
const axios = require('axios');
const CodechefDetails = () => {
    const [id, setid] = useState('')
    const [kk, setkk] = useState([])
    const [loading, setloading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(id)
        const res = await axios.get(`http://localhost:5000/codechef/details/${id}`);
        if(res.statusText==="OK"){
            // console.log(res.data)
            setkk(kk => [...kk,res.data]);
            setloading(true)
            // console.log(kk)
            setid('');
        }
    }
    return (
        <div>   
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="id" value={id} onChange={(e)=> setid(e.target.value)}/>
                <input type="submit" value="submit" />
            </form>
            {loading &&
                <div>
                    {kk.map((item,index) => (
                            <div key={index}>
                                <h3>User: {item.name}</h3>
                                <h3>Rating: {item.rating}</h3>
                                <h3>{item.highest_rating}</h3>
                                <hr/>
                            </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default CodechefDetails
