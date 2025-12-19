import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const images = [
  "https://i.pinimg.com/1200x/99/36/dd/9936dd23129a84ab38877f1c306ae01d.jpg", 
  "https://i.pinimg.com/1200x/0c/48/f9/0c48f9da97ec133a2f7facb393b60bd8.jpg", 
  "https://i.pinimg.com/1200x/0b/eb/ae/0bebae6fadf2193021de86ab23fd64e2.jpg", 
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>

      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {images.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`Slide ${i}`}
            sx={{
              width: "100%",
              height: { xs: 250, sm: 350, md: 500 },
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ))}
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.3)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.3)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default Carousel;
