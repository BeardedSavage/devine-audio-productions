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
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

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
    }, []);

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeFilledIcon />
                <Button color="inherit">
                    <Link to="/" className="home" reloadDocument>
                    Home
                    </Link>
                </Button>
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Button color="inherit">
                    <Link to="/contact" className="contact" reloadDocument>
                    Contact Us
                    </Link>
                </Button>
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Button color="inherit">
                    <Link to="/quote" className="quote" reloadDocument>
                    Get Quote
                    </Link>
                </Button>
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>  
            <ListItemIcon>
              <Button onClick={toggleDrawer(false)}>
                <CancelRoundedIcon />
                Exit Menu
              </Button> 
                  </ListItemIcon>
              </ListItemButton>
              </ListItem>
      </List>
    </Box>
    );

    return (
        <BrowserRouter>
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
                        onClick={toggleDrawer(true)}
                    >
                            <MenuIcon />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {currentPage}
                    </Typography>
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