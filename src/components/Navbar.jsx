import React from 'react'
import "./navbar.css"
import {} from 
import { TextField, ToggleButton } from '@mui/material'
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
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
                        <div className="flex items-center">
                            <IoSearchOutline />
                            <h1>Search</h1>
                        </div>
                        <div>
                            <ToggleButton>
<Drop
                            <TextField className="search-bar" placeholder="Search" size="small" variant="outlined" />
                            </ToggleButton>
                        </div>

                    </div>
                    <div>Profile</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar