import React from 'react'
import {Box, Button} from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <Box minH={"100vh"}>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/create' element={<Create></Create>} ></Route>
        </Routes>
      </Box>
    </div>
  )
}

export default App;