import { CssBaseline, Grid } from '@mui/material';
import LoginForm from '../components/LoginForm';
import logo from '../images/Logo-projeto.jpg';

export default function Login() {
  return (

    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={ { height: '100vh', backgroundColor: '#FFF3E0' } }
    >
      <CssBaseline />
      <img src={ logo } alt="logo do app de delivery" />
      <LoginForm />
    </Grid>
  );
}
