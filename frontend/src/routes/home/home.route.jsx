import { Outlet } from 'react-router-dom'
import HomeComponent from '../../components/home/home.component'

const Home = () => {
  return (
    <div>
      <Outlet />
      <HomeComponent />
    </div>
  )
}

export default Home
