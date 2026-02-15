// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from 'react-router';


const MailboxDetails = (props)=>{


  const {mailboxId} = useParams();
  console.log('mailboxId', mailboxId);

  const singleMailbox = props.mailboxes.find((box)=>(
    box._id === Number(mailboxId)
  ))
console.log('Mailbox Object ', singleMailbox)

  if (!singleMailbox) {
    return <h2>No mailbox found</h2>;
  }

return(

<>

<h1>Mailbox {singleMailbox._id} </h1>
<h2>Details</h2>
<dl>
        <dt>Box Owner:</dt>
        <dd> {singleMailbox.owner} </dd>
        <dt>Box Size :</dt>
        <dd>{singleMailbox.size} </dd>
      </dl>

</>

)

}

export default MailboxDetails