import { useEffect, useState } from 'react';
import TitleComp from './Title';
import UserList from './UserList';

function LearnUseEffect() {
  const [state, setState] = useState<number>(0)
  const [users, setUsers] = useState<string[]>([
    'austin', 'moonkey', 'moon', 'seungui'
  ])
  const [titleOrNot, setTitleOrNot] = useState<boolean>(true)
  useEffect(()=>{
    console.log('[App] call every re-rendering')
  })
  useEffect(()=>{
    console.log('[App] call just once when component mounted')
    return ()=>{ 
      console.log('[App] call when component will unmount')
    }
  },[])
  useEffect(()=>{
    console.log('[App] call when state is changed')
    return ()=>{ 
      console.log('[App] call when state will unmount')
    }
  },[state])

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>setState(state=>state+1)}>+</button>
      <UserList users={users} />
      {/* {titleOrNot && <TitleComp/>}
      <button onClick={()=>setTitleOrNot(!titleOrNot)} >delete Title</button> */}
    </div>
  );
}

export default LearnUseEffect;
