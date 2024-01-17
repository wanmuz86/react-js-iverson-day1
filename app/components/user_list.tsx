import { UserProps } from "../interfaces/user_props";
import UserInfo from "./user_info";

interface UserListProp {
  users:Array<UserProps>,
  onDeleteUser:(id:number)=>void
}

const UserList: React.FC<UserListProp> = ({ users, onDeleteUser }) => {
  
  const handleDelete = (id: number) => {
    console.log(`id ${id} from user_list`)
    onDeleteUser(id);
  }

   return (
     <div>
       <ul>
        {/* Specify user data type as object with id(number), name(string), age (number)*/}
         {users.map((user:{id:number,name:string,age:number}) => (
           // Assigning a unique key to each user for efficient rendering
           <li key={user.id}>
        {/* For each row we will call back the UserInfo component */}
            <UserInfo user={user} onDeleteUser={handleDelete}/> 
           </li>
         ))}
       </ul>
     </div>
   );
 };
 export default UserList;

