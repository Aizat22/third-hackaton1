import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useCart } from '../contexts/CartContextProvider';
import { useAuth } from '../contexts/AuthContextProvider';
import { ADMIN } from '../helpers/consts';


const pages = [
  { id: 1, title: 'shop', link: '/shop' },
  { id: 2, title: 'best seller', link: '/best' },
  { id: 3, title: 'gift & set', link: '/gift' },
  { id: 4, title: 'about us', link: '/about' },
  { id: 5, title: 'admin', link: '/admin' },


]
  
  function Navbar() {
    const {
      handleLogout,
      user: { email },
    } = useAuth();
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { getProductsCountInCart, addProductToCart } = useCart();
    const [badgeCount, setBadgeCount] = React.useState(0);
  
    React.useEffect(() => {
      setBadgeCount(getProductsCountInCart());
    }, [addProductToCart]);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <div>
      <ul className="container-for-navbar">
        <Link className="link" to={"/"}>
          <div className="cont-for-logo">
            <a href="" className="logo">
              Flower knowS
            </a>
          </div>
        </Link>
        <Link className="link" to={"/shop"}>
          <li>shop</li>
        </Link>
        <Link className="link" to={"/best"}>
          <li>best seller</li>
        </Link>
        <Link className="link" to={"/gift"}>
          <li>gift & set</li>
        </Link>
        <Link className="link" to={"/about"}>
          <li>about us</li>
        </Link>
        <Link className="link" to={"/admin"}>
          <li>admin</li>
        </Link>
        <Typography sx={{ color: 'white' }}>
            {email ? `Hello, ${email}` : 'Hello, Guest'}
      </Typography>
      <Link to={'/cart'}>
            <Badge badgeContent={badgeCount} color="success">
              <ShoppingCartIcon sx={{ color: 'white' }} />
            </Badge>
          </Link>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {email ? (
                <MenuItem
                  onClick={() => {
                    handleLogout();
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ) : (
                <Link to={'/auth'}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>
      </ul>
    </div>
    
  );
};

export default Navbar;
