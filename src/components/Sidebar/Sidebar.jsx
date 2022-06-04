import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';

const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const categories = [
  { lable: 'Popular', value: 'popular' },
  { lable: 'Top Rated', value: 'top_rated' },
  { lable: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { lable: 'Comedy', value: 'comedy' },
  { lable: 'Action', value: 'action' },
  { lable: 'Horror', value: 'horror' },
  { lable: 'Animation', value: 'animation' },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt="Filmpire logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ lable, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImage} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={lable} />
            </ListItemButton>
          </Link>
        ))}
      </List>

      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ lable, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImage} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={lable} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
