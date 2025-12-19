import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@mui/material";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((res) => setProduct(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Box sx={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography>Loading...</Typography>
      </Box>
    );

  if (error || !product)
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4">Product Not Found!</Typography>
      </Box>
    );

  return (
    <Container sx={{ py: 5, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 500 }}>
        {/* MAIN IMAGE */}
        <CardMedia component="img" height="250" image={product.thumbnail} alt={product.title} />

        <CardContent>
          <Typography gutterBottom variant="h5">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            Price: ${product.price}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Brand: {product.brand}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Category: {product.category}
          </Typography>


          {product.images && product.images.length > 0 && (
            <Grid container spacing={1} sx={{ mt: 2 }}>
              {product.images.map((img, index) => (
                <Grid item xs={4} key={index}>
                  <CardMedia component="img" height="80" image={img} alt={`${product.title} ${index}`} />
                </Grid>
              ))}
            </Grid>
          )}
        </CardContent>

        <CardActions>
          <Button size="small" variant="contained" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default SingleProduct;
