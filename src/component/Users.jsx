import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    // Delete user
    const handleDelete = (_id) => {
        console.log('delete id:', _id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffe-store-backend-three.vercel.app/users/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `Your user ${_id} has been deleted.`,
                                icon: "success"
                            });
                            setUsers(users.filter(user => user._id !== _id))
                        }
                        console.log(data);
                    })

            }
        });
    }
    return (
        <div>
            <h1 className="text-4xl">Users: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Last log in</th>
                            <th>Creation Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <th>{user._id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.lastSignInTime}</td>
                            <td>{user.creationTime}</td>
                            <td className='space-x-2'>
                                <button onClick={() => handleDelete(user._id)} className='btn btn-warning' title='Delete'>X</button>
                                <button className='btn btn-info' title='Edit'>Edit</button>
                            </td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;