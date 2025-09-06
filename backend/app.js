import env from 'dotenv';
import 'dotenv/config';
import express from 'express';
import bodyparser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


env.config();

const app = express();
const PORT = process.env.PORT || 8080;
// For later implementation of users and passwords
const salt = 10;

const __dirname = path.dirname(fileURLToPath(import.meta.url))


app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.urlencoded({limit:"25mb"}));
app.use(bodyparser.json({limit:"25mb"}));
app.use(express.static('public'));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use(express.static(path.join(__dirname, "../frontend/dist")));

function sendMail({sender, subject, message}) {
    return new Promise((resolve, reject) => {
        const transport = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            port: 465 || 995,
            auth:{
                user: process.env.GOOGLE_MAIL,
                pass: process.env.GOOGLE_APP_PASS,
            },
            html: `<p>${message}</p>`,
        });

        const mailConfig = {
            address: sender,
            to: process.env.GOOGLE_MAIL,
            subject: subject,
            text: message,
        };

        transport.sendMail(mailConfig, (error, info) => {
            if (error) {
                console.log(error);
                return reject({message: "An error has occured"});
            } else {
                return resolve({message: "Email sent successfully"})
            }
        })

    });
}

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
// });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
    sendMail()
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.get("/quote", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.post("/send-quote", (req, res) => {
    sendMail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});

app.listen(PORT, () => {
    console.log(`This server is running on http://localhost:${PORT}`);
    
});