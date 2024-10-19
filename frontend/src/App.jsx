import React from 'react'
import {Box} from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <div className=''>
      <Box minH={"100vh"}>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} ></Route>
          <Route path='/create' element={<CreatePage></CreatePage>} ></Route>
        </Routes>
      </Box>
    </div>
  )
}

export default App;