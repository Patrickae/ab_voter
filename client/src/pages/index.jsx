import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import '../App.css';
import Button from '@mui/material/Button';
import {
  CircularProgress, Card, CardContent,
} from '@mui/material';
import { getLogin } from '../api/authRequests';

function App() {
  const loginQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getLogin,
  });

  console.log(loginQuery.data);
  if (loginQuery.status === 'loading') {
    return (
      <CircularProgress color="secondary" />
    );
  }
  if (loginQuery.status === 'error') {
    return (
      <Card>
        <CardContent>{loginQuery.status}</CardContent>
        <CardContent>{loginQuery.error.message}</CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardContent>Success!</CardContent>
      <CardContent>{loginQuery.data.loginGet}</CardContent>
    </Card>
  );
}

export default App;
