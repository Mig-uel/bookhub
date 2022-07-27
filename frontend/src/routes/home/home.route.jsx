import { Outlet } from 'react-router-dom'
import HomeComponent from '../../components/home/home.component'

const Home = () => {
  return (
    <>
      <Outlet />
      <HomeComponent />
    </>
  )
}

export default Home
