import { Routes, Route } from 'react-router-dom'

import Nav from './components/nav/nav.component'
import Home from './routes/home/home.route'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='add' element={<div>add</div>} />
      </Route>
    </Routes>
  )
}

export default App
