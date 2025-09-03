import React, {useState} from "react";
import axios from "axios";
import {CircularProgress} from '@mui/material';
import {Box} from '@mui/material';

function GetQuote() {

    const [sender, setSender] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function sendMail() {
        if (sender && subject && message) {
            axios.post("http://localhost:3000/send-quote", {
                sender,
                subject,
                message,
            }).then(() => alert("Message sent successfully"))
            .catch(() => alert("Ooops, something went wrong"));
            return;
        }
        
        return alert("Fill out the form and continue.")
    }

    function handleSubmit() {
        setIsLoading(true);
        sendMail();
        setIsLoading(false);
    };

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <input className="input-area" type="email" placeholder="Email here" name="sender" onChange={(e) => setSender(e.target.value)} required />
                <br />
                <input className="input-area" type="text" placeholder="Your Subject" name="subject" onChange={(e) => setSubject(e.target.value)} required />
                <br />
                <textarea className="text-area" type="text" placeholder="Enter your message here" name="message" onChange={(e) => setMessage(e.target.value)} required />
                <br />
                {isLoading ? <button className="btn"><Box sx={{ display: 'flex' }}><CircularProgress color="inherit" /></Box></button> : <button className="btn" type="submit">Submit</button>}
                
            </form>
        </div>
    )
}

export default GetQuote;