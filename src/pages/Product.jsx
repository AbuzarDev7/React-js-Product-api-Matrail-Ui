import { Alert, Box, CircularProgress, Grid, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MediaCard from '../compunents/Card';
const Product = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=50')
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.products)
        console.log(res.products);
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  return (
    <div>
      {error && <div className=' text-center'><Alert variant="filled" severity="error">
        Not Found Products
      </Alert></div>}
      {loading && <Box sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}><CircularProgress enableTrackSlot size="3rem" /></Box>}

      <Container sx={{ py: 5 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {product &&
            product.map((item) => (
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
  )
}

export default Product