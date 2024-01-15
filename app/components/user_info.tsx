import React from 'react'
import { UserProps } from '../interfaces/user_props';

 const UserInfo: React.FC<{user:UserProps}> = ({user}) => {
// export default function UserInfo({user}) {
    
    const {id, name, age} = user; // Array or object destructuring

  return (
    <div>
        <p>User Id: {id}</p>
        <p>Name: {name} </p>
        <p>Age: {age} </p>
        {
            age < 18 ?
            <p>Parent consent required</p>
            :
            <p>Welcome to the website</p>
            }
    </div>
  )
}
export default UserInfo;
