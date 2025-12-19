import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export default function MediaCard({description,title,thumbnail,id}) {
  const navigate = useNavigate()
  return (
<Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}
    >
 
      <CardMedia
        component="img"
        height="180"
        image={thumbnail} 
        alt={title}
      />

     
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </CardContent>

  
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(`/singleProduct/${id}`)}
        >
          View More
        </Button>
      </CardActions>
    </Card>
  );
  
}
