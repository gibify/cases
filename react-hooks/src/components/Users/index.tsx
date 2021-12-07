import { useEffect, useState } from "react"
import { api } from "../../services/api";

type UserProps = {
  id: string;
  name: string;
  userName: string;
}

export function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);
  console.log(users)

  useEffect(() => {
    async function loasUsers() {
      const { data } = await api.get('/users');
      setUsers(data);
    }

    loasUsers();

    return () => console.log('desmontou')
  }, []);



  return (
    <ol>
      {users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ol>
  )
}