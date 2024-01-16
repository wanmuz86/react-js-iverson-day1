import React from 'react'
import Counter from './counter'
import UserInfo from './user_info';
import UserList from './user_list';
import UserForm from './user_form';
export default function Main() {
    const currentUser = {
        id:1,
        name:'John Doe',
        age:25
    }
    const userList = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Doe', age: 30 },
        { id: 3, name: 'Bob Smith', age: 22 },
      ];
 
  return (
    <div>
        <h2>Main</h2>
        <p className="bg-red">
            Lorem ipsum, dolor <span style={{backgroundColor:'green', color:'yellow', fontSize:16}}>sit amet consectetur adipisicing elit.</span> Similique beatae, architecto, culpa dolore debitis atque excepturi minima voluptatibus ullam provident quaerat voluptatum aliquid animi consequuntur corporis tenetur quos temporibus odit.</p>
        <hr/>
    <Counter initialValue={10}/>
    <Counter initialValue={3}/>
    <Counter initialValue={7}/>

<hr/>
    <UserForm/>
    
    <UserList users={userList}/>
    <hr />
    <UserInfo user={currentUser}/>

    </div>
        
  )
}
