import { Link } from "react-router";

const MailboxList = (props) =>{

console.log('This is the prop', props)

    return (
        <>
        <h1>MailboxList</h1>
        <div>
            {props.mailboxes.length === 0 ? (
                <h2>No mailboxes found</h2>
            ) : (
                props.mailboxes.map((currentMailbox)=>(
               <Link to={`/mailboxes/${currentMailbox._id}`}  className="mail-box link "   > <strong  key={currentMailbox._id} > Mailbox {currentMailbox._id}</strong></Link>
                ))
            ) }




            
        </div>
        </>

    )
}

export default MailboxList;