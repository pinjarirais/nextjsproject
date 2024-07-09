import getdata from "../../../../services/getdata";

const UserDetail = async (props) => {
    const userlist = await getdata();
    const users = await userlist;
    const currentuser = props.params.userid;
    const currentuserdata = users[currentuser-1];

       
  return (
    <div className='p-4'>
      <h1 className='pb-4'>User Details Page</h1>

       <h4>{currentuserdata.id}</h4>
       <h4>{currentuserdata.firstName}</h4>
       <h4>{currentuserdata.lastName}</h4>


    </div>
  )
}

export default UserDetail;


export async function generateStaticParams(){
    const userlist = await getdata();
    const users = await userlist;
    return users.map((user)=>({
        userid:user.id.toString()
    }))
}
