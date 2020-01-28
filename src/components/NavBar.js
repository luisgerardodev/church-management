import React from 'react';
import { AppBar, Toolbar, Typography,IconButton, Button } from '@material-ui/core/';
import { Menu } from '@material-ui/icons'

const NavBar = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" >
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;