import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

interface IUser {
  id: string;
  name: string;
  company: {
    name: string;
  }
}
export function UserInfo() {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>({} as IUser);

  console.log(user)

  useEffect(() => {
    async function loadUserInfo() {
      const response = await api.get(`/users/${id}`);
      setUser(response.data)
    }
    loadUserInfo();
  }, [])

  return (
   <ul>
     <li><strong>ID: </strong>{user?.id}</li>
     <li><strong>NAME: </strong>{user?.name}</li>
     <li><strong>COMPANY NAME: </strong>{user?.company?.name}</li>
   </ul>
  )
}