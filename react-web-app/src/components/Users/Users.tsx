/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/users';
import { api } from '../../services/api';
import styles from '../../styles/user.module.scss';

export function Users() {
const { users, setUsers } = useUser();
const navigate = useNavigate();

useEffect(() => {
  async function loadUsers() {
    const response = await api.get('/users');
    setUsers(response.data)
  }
  loadUsers();
}, [])

  return (
    <div className={styles.container}>
      <h1>Users List</h1>
      <ol> 
        <li>Users</li>
        {users.map((user) => {
          return (
            <li className={styles.list} key={user.id}>
              <strong>{user.name}</strong>
              <button onClick={() => navigate(`/details/${user.id}`)} className={styles.button}>Learn More</button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
