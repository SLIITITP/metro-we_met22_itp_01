import React, { useEffect, useState }from 'react'
import axios from "axios";
import Loader  from "../Components/Loader";
import Error from "../Components/Error";
import Success from '../Components/Success';

export default function ViewUsers() {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get('http://localhost:8070/users/getallusers')).data
                setusers(data);
                setloading(false);
            } catch (error) {
                console.log(error);
                setloading(false);
                seterror(true);
            }
        }
        fetchData();
    }, [])

    return (
        <>
        <div className="row">
            <div className="col-md-12">
                <h1 style={{marginTop:"75px"}}>View Customers</h1>
                {loading && (<Loader />)}
                <table class="table table-striped table-dark" style={{marginLeft:"250px",width:"75%"}}>
                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && (users.map(user => {
                            return <tr>
                                <td scope="row">{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>

            </div>
        </div>
    </>

  )
}

