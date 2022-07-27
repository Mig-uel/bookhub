import { Routes, Route } from 'react-router-dom'

import Nav from './components/nav/nav.component'

// routes
import Home from './routes/home/home.route'
import AddBook from './routes/add-book/add-book.route'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='add' element={<AddBook />} />
      </Route>
    </Routes>
  )
}

export default App
