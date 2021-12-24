import * as React from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { toggleDrawer, toggleHideNumbers } from '../../store/settings';
import { styled, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function PrimarySearchAppBar() {
  // const numbersHidden = useSelector((state) => state.settings.numbersHidden);
  // const targetUnit = useSelector((state) => state.user.targetUnit);
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const location = useLocation();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const links = [
    { path: '/', name: 'Home' },
    { path: '/resume', name: 'Resume' },
    { path: '/stats', name: 'Stats' },
  ];

//   <Button color={location.pathname === '/' ? 'secondary' : 'inherit'} component={Link} to={'/'} sx={{ padding: '24px', display: 'flex', 
//   borderBottom: '4px solid', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }}>Home</Button>
// <Divider orientation="vertical" variant="middle" flexItem sx={{marginTop: '16px', marginBottom: '16px',}} />
// <Button color={location.pathname === '/resume' ? 'secondary' : 'inherit'}  component={Link} to={'/resume'} sx={{ padding: '24px', display: 'flex' }}>Resume</Button>
// <Divider orientation="vertical" variant="middle" flexItem sx={{marginTop: '16px', marginBottom: '16px'}} />
// <Button color={location.pathname === '/stats' ? 'secondary' : 'inherit'}  component={Link} to={'/stats'} sx={{ padding: '24px', display: 'flex' }}>Stats</Button>


  return (
    <>
      <AppBar position="fixed" elevation={0} color="transparent" sx={{ backgroundColor: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      {/* <AppBar elevation={0} position="static" color="transparent" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}> */}
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: {xs: 'block', md: 'none'} }}
            onClick={() => dispatch(toggleDrawer())}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', md: 'block' }, lineHeight: 1, letterSpacing: '0.0001em', fontFamily: "'Open Sans', sans-serif;", fontWeight: 300 }}
          >
            CAGLA<br />ISTANBULLUOGLU
          </Typography> */}
          <Avatar sx={{ width: 32, height: 32 }} src="/favicon.png" />
          <Box 
            sx={{ 
              margin: 'auto', height: '100%', justifyContent: 'center', width: '50%', left: '25%', position: 'absolute', textAlign: 'center', 
                display: {xs: 'flex', md: 'flex'}
            }}
          >
            {links.map(l => {
              const isSelected = location.pathname === l.path;
              return (
                <Button 
                  key={l.name}
                  color={isSelected ? 'secondary' : 'inherit'} 
                  component={Link} 
                  to={l.path} 
                  sx={{ 
                    padding: '24px', 
                    display: 'flex', 
                    borderBottom: isSelected ? '4px solid' : 0, 
                    borderBottomRightRadius: '5px', 
                    borderBottomLeftRadius: '5px',
                    borderBottomColor: '#BD1E51',
                  }}
                >
                  {l.name}
                </Button>
              )
            })}
            {/* <Button sx={{ my: 2,  display: 'block' }}>Test2</Button> */}
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              margin: 'auto', width: '50%', left: '25%', position: 'absolute', textAlign: 'center', display: {xs: 'block', md: 'none'}
            }}
          >
            
          </Typography> */}
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          {/* <Search style={{margin: 'auto'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <Tooltip title={numbersHidden ? "Show numbers" : "Hide numbers"}>
              <IconButton size="large" aria-label="hide numbers" color="inherit" onClick={() => dispatch(toggleHideNumbers())}>
                {numbersHidden ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </Tooltip> */}
            {/* <Button
                sx={{ my: 2,  display: 'block' }}
              >
                Test
            </Button>
            <Button
                sx={{ my: 2,  display: 'block' }}
              >
                Test
            </Button>
            <Button
                sx={{ my: 2,  display: 'block' }}
              >
                Test
            </Button> */}
            {/* <FormControl fullWidth> */}
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              {/* <Select
                sx={{ml: 1}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={targetUnit}
                // onChange={(ev) => dispatch(updateTargetUnit(ev.target.value))}
                input={<InputBase />}
              >
                {UnitList.map(unit => <MenuItem key={unit} value={unit}>{unit}</MenuItem>)}
              </Select> */}
              
            {/* </FormControl> */}

            {/* <Autocomplete label="Account unit" options={unitList} value={{title: targetUnit}} onChange={(value) => dispatch(updateTargetUnit(value.title))}/> */}
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </Box>
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}

export default PrimarySearchAppBar;