import { Routes, Route} from 'react-router-dom'
import { Users} from '../components/Users/Users'
import { UserInfo } from '../components/Users/UserInfo'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/user-info" element={<UserInfo/>}/>
    </Routes>
  )
}

export default Router;