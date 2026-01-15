import React, { useState } from 'react'
import "./navbar.css"
// import {Toggle} from "reactstrap"
import { Button, Slide, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
    const [isSearch, setSearch] = useState(false);
    return (
        <nav className="@container">
            <div className="grid grid-cols-12 md:px-20 pt-4">
                <div className="md:col-span-4 col-span-12">
                    <h1 className="text-3xl font-bold">
                        LOGO
                    </h1>
                </div>
                <div className="md:col-span-4 col-span-12 flex justify-center gap-10">
                    <a href="/">Home</a>
                    <a href="/">Shop</a>
                    <a href="/">About Us</a>
                    <a href="/">Contact Us</a>
                </div>
                <div className="md:col-span-4 col-span-12 flex justify-end">
                    <div>
                        <div className="flex items-center p-2 cursor-pointer" onClick={() => setSearch(!isSearch)}>
                            <SearchIcon className="text-2xl"/>
                        </div>
                        <div className="absolute">
                            <Slide direction="up" in={isSearch} mountOnEnter unmountOnExit>
                                <TextField className="search-bar" placeholder="Search" size="small" variant="outlined" />
                            </Slide>
                        </div>

                    </div>
                    <div>
                        <Button size='small'>Sign In</Button>
                        <Button size='small'>Sign Up</Button>
                    </div>
                    <div>
                        <AccountCircleIcon className="text-2xl"/>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar