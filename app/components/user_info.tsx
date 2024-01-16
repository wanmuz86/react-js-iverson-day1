import React from 'react'
import { UserProps } from '../interfaces/user_props';

interface UserInfoProps {
  user: UserProps;
  onDeleteUser: (id: number) => void; // Callback function to handle delete
}

 const UserInfo: React.FC<any> =({user, onDeleteUser}) => {

    const {id, name, age} = user; // Array or object destructuring
    
    const handleDelete = () => {
      
      onDeleteUser(id);
   
    }

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

          <button onClick={handleDelete}>Delete User</button>
    </div>
  )
}
export default UserInfo;
