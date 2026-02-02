

import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = (props) =>{



    const initialState = {
  owner: '',
  size: '',
};


const [formData, setFormData] = useState(initialState);

const navigate = useNavigate()



const handleSubmit = (e)=>{
    e.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate('/mailboxes')
    }


const handleChange = (e)=>{

setFormData({...formData, [e.target.name]: e.target.value });

}

    return (
    <main>
        <h2> Add Mailbox</h2>

        <form onSubmit={handleSubmit}>
            <label htmlFor="owner">Box Owner:</label>
            <input type="text"
                id="owner"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
            />


            <label htmlFor="size">Box Size:</label>
            <select  id="size" name="size"  value={formData.size} onChange={handleChange} >
                <option value="">Choose a size</option>
                <option value="Large"> Large</option>
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>

            </select>

            <button type="submit">Add Mailbox </button>
        </form>


     </main>

    )
}

export default MailboxForm;