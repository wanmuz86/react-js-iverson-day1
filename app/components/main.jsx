"use client"
import React, {useState} from 'react'
import Counter from './counter'
import UserInfo from './user_info';
import UserList from './user_list';
import MyForm from './user_form';
export default function Main() {
    const currentUser = {
        id:1,
        name:'John Doe',
        age:25
    }
    // const userList = [
    //     { id: 1, name: 'John Doe', age: 25 },
    //     { id: 2, name: 'Jane Doe', age: 30 },
    //     { id: 3, name: 'Bob Smith', age: 22 },
    //   ];

    const [userList,setUserList] = useState([]);
    const handleAdd = (user) => {
        console.log(user)
        // Spread operator on an Array - > Adding item at the end of array
        // Spread operator on an object -> Overide add property id into the object user (passed from UserForm)
        // -> I add userId into the object, then I add the object at the end of the array
        setUserList([...userList, {...user,id:getNextUserId()}])
    }

    const getNextUserId = () => {
        if (userList.length == 0){
            return 1
        }
        else {
            return userList[userList.length-1].id +1
        }
    }
    
 
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
    <MyForm onAddUser={handleAdd}/>

    <UserList users={userList}/>
    <hr />
    {/* <UserInfo user={currentUser}/> */}

    </div>
        
  )
}
