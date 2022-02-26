import React, { useEffect,useState } from 'react'
import Loading from './Loading';
import Users from './Users';

const Data = () => {
     
  const [users,setUsers] = useState([]);

  const [loading,setLoading] = useState(true);

  const getUsers = async () => {

    try{
      setLoading(false);
      const response=await fetch('https://api.github.com/users');
      const data = await response.json(); 
      setUsers(data);
    }catch(error){
          console.log("error:"+ error);
    } 
  }

  useEffect(() =>{
    getUsers();
  },[]);

  if(loading){
    return <Loading />
  }
  
  return (
    <>
     <Users users={users}/>
    </>
  )
}

export default Data