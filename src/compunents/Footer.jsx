import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#1976d2", 
        color: "white",
        py: 2,
        mt: 5,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
       
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          BuyZar
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/")}
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#ffeb3b" }, 
              fontWeight: 500,
            }}
          >
            Home
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/product")}
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#ffeb3b" },
              fontWeight: 500,
            }}
          >
            Product
          </Link>
        </Box>
      </Container>

      
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 1, fontSize: "0.85rem" }}
      >
        © {new Date().getFullYear()} BuyZarr. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
