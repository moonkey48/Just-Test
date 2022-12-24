import React from 'react';

type UserListProps = {
    users:string[]
}
const UserList = ({users}:UserListProps) => {
    return (
        <>
        {
            users.map((user,idx)=>{
                return <li key={idx}>{user}</li>
            })
        }
        </>
    )
}
// export default UserList;
export default React.memo(UserList);