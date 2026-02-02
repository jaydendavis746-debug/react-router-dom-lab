


import NavBar from './components/NavBar/NavBar'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'

import { Route, Routes } from 'react-router'
import { useState } from 'react'

const App = ()=> {

const [mailboxes, setMailboxes] = useState([])


const addMailbox = (newMailboxData)=>{

newMailboxData._id = mailboxes.length + 1 

setMailboxes([...mailboxes, newMailboxData])

 }

  return (
    <>

    <NavBar />
    <Routes>
    <Route path='/'  element={<main><h1>Post Office</h1></main>}  ></Route>
    <Route path='/mailboxes'  element={<MailboxList mailboxes={mailboxes} /> } ></Route>
    <Route path='/new-mailbox'  element={ < MailboxForm   addMailbox = {addMailbox}  /> }  ></Route>
    <Route path='/mailboxes/:mailboxId'  element={< MailboxDetails mailboxes={mailboxes} />} ></Route>
    <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
    </Routes>
     
    </>
  )
}

export default App
