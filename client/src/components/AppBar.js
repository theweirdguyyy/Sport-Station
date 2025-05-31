import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import '../index.css';
import { useCart } from '../context/cart_context';
import logo from '../resources/Sport Station.png';
import axios from 'axios';
const pages = ['Products', 'Pricing','Login'];
const settings = ['Profile', 'Orders'];

function ResponsiveAppBar() {
  const [user,setUser] = React.useState('');
  const [role,setRole] = React.useState('');
  // const [cart,setCart] = useCart();
  React.useEffect(()=>{
    axios.get('http://localhost:3305')
      .then(res=>{
        if(res.data.valid){
          setUser(res.data.user);
          setRole(res.data.role);
          console.log('Appbar');
        }
        // else{
        //   navigate('/');
        // }
      })
      .catch(err=>console.log(err));
  });
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  axios.defaults.withCredentials = true;
  const handleLogout =()=>{
    axios.get('http://localhost:3305/logout')
    .then(res=>{
      window.location.reload();
    })
    .catch(err=>console.log(err));
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4DB768'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Logo" height='50px' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to={page.toLowerCase()} className='lnk'>{page}</Link></Typography>
                </MenuItem>
                
              ))}
              {role===1 &&<MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to='/addproduct' className='lnk'>Add Product</Link></Typography>
                </MenuItem>}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              // backgroundColor: '#f44336',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src={logo} alt="Logo" height='50px' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.toLowerCase()} className='lnk'>{page}</Link>
              </Button>
            ))}
            {role===1&&<Button><Link to='/addproduct' className='lnk'>Add Product</Link></Button>}
          </Box>

          {user&&<Box sx={{ flexGrow: 0 }}>
            <span className='lnk'>{user}</span>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircle fontSize='large'/>
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
              
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link to={setting.toLowerCase()} className='lnk'>{setting}</Link></Typography>
                </MenuItem>
              ))}
                {/* {role===0&&<MenuItem onClick={handleCloseUserMenu}>
                 <Typography textAlign="center"><Link to='/cart' className='lnk'>Cart{cart.length}</Link></Typography>
                </MenuItem>} */}
                <MenuItem onClick={handleCloseUserMenu}>
                 <Typography textAlign="center"><Link onClick={handleLogout} className='lnk'>Logout</Link></Typography>
                </MenuItem>
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;