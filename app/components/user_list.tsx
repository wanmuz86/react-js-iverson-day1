import { UserProps } from "../interfaces/user_props";
import UserInfo from "./user_info";

const UserList: React.FC<{ users: Array<UserProps> }> = ({ users }) => {
   return (
     <div>
       <ul>
         {users.map((user) => (
           // Assigning a unique key to each user for efficient rendering
           <li key={user.id}>
        {/* For each row we will call back the UserInfo component */}
            <UserInfo user={user} /> 
           </li>
         ))}
       </ul>
     </div>
   );
 };
 export default UserList;

