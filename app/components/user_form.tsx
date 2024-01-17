"use client"
import {ChangeEvent, FormEvent, useState} from 'react'

// Props to pass back the user, it will return a function ()=>void 
// with object user having name and age as parameter {}
interface AddUserProps {
    onAddUser : (
        user: {
            name:string;
            age:number
        }
    ) => void;
}
const MyForm: React.FC<AddUserProps> = ({onAddUser}) => {
    const [user, setUser] = useState({
        'name':'',
        'age':0
    });

    // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     // Updating the state , with the value entered by user (e.target.value)
    //     // state -> spread operator , existing user object with "name" property overwrite to e.target.value
    //     setUser({...user,name:e.target.value})
    // }

    // const handleAgeChange = (e:ChangeEvent<HTMLInputElement>) => {
    //     setUser({...user, age: parseInt(e.target.value)});
    // }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // the name and value here refer to the property of the form, 
        // is it 'age' or 'name' ? => name
        // the value is either value of 'name' or value of 'age'
        const {name, value} = e.target;

        //  set the user with ...
        // prevUser here refers to the old value of user , {name:'wan',age:0};
        // I'm setting the prevUser depending on scenario
        // If the field name is 'age' , it will go in parseInt(value)
        // if the field name is 'name', it will go in value
        setUser((prevUser)=> ({...prevUser, [name] : name === 'age' ? parseInt(value) : value}))
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(user.name)
        console.log(user.age)
        onAddUser(user)
        // Clear the form (In slide I create variable initialState for this)
        setUser({
            'name':'',
            'age':0
        })
    }

  return (
    <div>
        <h2>My Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Enter name</label>
            <input type="text" name="name" id="name" value={user.name} onChange={handleChange}/>
            <label htmlFor='age'>Enter name</label>
            <input type="number" name="age" id="age" value={user.age} onChange={handleChange}/>
            <button type="submit">Add Data</button>
        </form>

    </div>
  )
}
export default MyForm;