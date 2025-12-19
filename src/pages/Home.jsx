import { Alert, Box, CircularProgress, Grid, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MediaCard from '../compunents/Card';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100') 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); 
        console.log(data.products);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {error && (
        <div className="text-center">
          <Alert variant="filled" severity="error">
            Products Not Found
          </Alert>
        </div>
      )}

      {loading && (
        <Box
          sx={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress size="3rem" />
        </Box>
      )}

      <Container sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {products.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <MediaCard
                thumbnail={item.thumbnail}
                description={item.description}
                title={item.title}
                id={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
