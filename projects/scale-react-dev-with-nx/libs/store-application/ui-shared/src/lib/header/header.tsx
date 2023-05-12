import styles from './header.module.scss';
import { Theme, AppBar, Toolbar, Typography, createStyles } from '@mui/material';
import { styled } from '@mui/material/styles';


/*
const useStyles = styled((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
*/


const MyTypography = styled(Typography)({
  flexGrow: 1,
});

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <MyTypography variant="h6" >
          Board Game Hoard
        </MyTypography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
