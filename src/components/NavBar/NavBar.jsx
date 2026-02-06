import { Link } from "react-router";

const NavBar = ()=>{


    return(
    <nav>
    <p className="link" ><Link to='/' >Home</Link></p>
    <p className="link" ><Link to='/mailboxes' >Mailboxes</Link></p>
    <p className="link" ><Link to='/new-mailbox' >Add Mailbox</Link></p>
    </nav>
    )
}


export default NavBar;