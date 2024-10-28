import React from 'react';
import useFetchUser from './hoock-peprsonalizado';
import '../css/tarjeta.css'

const UserCard = () =>{
    const {data: users, loading} = useFetchUser('https://jsonplaceholder.typicode.com/users');

    if(loading){
        return <p>Loading ...</p>;
    }

    return (
        <div className='contenedor_general'>
            <h1 className='titulo'>Lista de Usuarios</h1>
            {users.map((user)=> (
                <div key={user.id} className='card'>
                    <h2>{user.name}</h2>
                    <p>{user.company.catchPhrase}</p>
                </div>
            ))}
        </div>
    )
};

export default UserCard;