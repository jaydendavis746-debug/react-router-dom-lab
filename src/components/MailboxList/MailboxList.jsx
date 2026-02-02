import { Link } from "react-router";

const MailboxList = (props) =>{

console.log('This is the prop', props)

    return (
        <>
        <h1>MailboxList</h1>
        <div>
            {props.mailboxes.map((currentMailbox)=>(
               <Link to={`/mailboxes/${currentMailbox._id}`}  className="mail-box" > <strong  key={currentMailbox._id} > Mailbox {currentMailbox._id}</strong></Link>
                
            ))}
        </div>
        </>

    )
}

export default MailboxList;