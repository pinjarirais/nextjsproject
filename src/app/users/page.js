import Link from "next/link";
import getdata from "../../../services/getdata";

const Users = async () => {
    const userlist = await getdata();
    const users = await userlist;
  return (
    <div className='p-4'>
      <h1 className="pb-4">Users List</h1>

        {
          users && users.map((item)=>(
            <h3 key={item.id}><Link className="text-blue-700" href={`/users/${item.id}`}>{item.firstName}</Link></h3>
          ))  
        }

    </div>
  )
}

export default Users;
