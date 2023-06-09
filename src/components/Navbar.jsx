import React from "react";
import { useState } from "react";
import { MenuIcon, YouTubeIcon, SearchIcon, MicIcon, NotificationsNoneOutlinedIcon, VideocamOutlinedIcon} from "../utils/constants";
import { Stack, Box, AppBar, Typography, Paper } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { useNavigate, Link } from "react-router-dom";


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }

  }

  return (
    <AppBar position="sticky" sx={{ background: "#1a1919"}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" p={2}
      >

        <Box sx={{ display: "flex", alignItems: "center"}}>
          <MenuIcon sx={{ color: "#fff", mr: "15px"}}/>
          <Link to="/" className="link-style">
            <YouTubeIcon sx={{ color: "red", fontSize: "40px", mr: "4px"}} />
            <Typography variant="h5" color="#fff" fontWeight="bold">
              Youtube
            </Typography>
          </Link>

        </Box>

        <Box>
          <Paper sx={{ 
              borderRadius: "5px",
              paddingTop: "3px", paddingBottom: "8px",
              display: "flex", alignItems: "center",
              borderRadius: "15px", outline: "0"
              }}
              component="form"
              onSubmit={handleSubmit}
            
          >
            <input placeholder="Search..." className="input-field" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <IconButton
              type="submit"
            >
              <SearchIcon sx={{ fontSize: "30px", color: "tomato"}}/>
            </IconButton>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }} gap={2} mr="5px">
          <VideocamOutlinedIcon sx={{ color: "#fff", fontSize: "35px"}} />
          <NotificationsNoneOutlinedIcon sx={{ color: "#fff", fontSize: "35px"}} />
          <div className="profile-image">
            Image here
          </div>
        </Box>

      </Stack>
    </AppBar>

  )
}

export default Navbar
