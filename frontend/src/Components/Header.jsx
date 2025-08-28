import React, {useState, useEffect} from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import GetQuote from "./GetQuote";
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Heading() {

    const [currentPage, setCurrentPage] = useState('');


    useEffect(() => {
        switch (location.pathname) {
            case '/': setCurrentPage("Home");
                break;
            case '/contact': setCurrentPage("Contact");
                break;
            case '/quote': setCurrentPage("Get Quote");
                break;
            default: console.log("No path given");
                break;
        }
    }, [])

    return (
        <BrowserRouter forceRefresh={true}>
            <div className="topPage">
                <img src="/images/DivineAudio.jpg" alt="logo" className="logo" />
                <h1>Devine Audio Productions</h1>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {currentPage}
                    </Typography>
                        <Button color="inherit">
                            <Link to="/" className="home">
                            Home
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/contact" className="contact">
                            Contact Us
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/quote" className="quote">
                            Get Quote
                            </Link>
                        </Button>
                        
                    </Toolbar>
                </AppBar>
            </Box>
            <Routes>
                <Route exact path="/" element={<Home /> } />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/quote" element={<GetQuote /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Heading;