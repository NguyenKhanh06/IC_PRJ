import React from 'react';
import '../../styles/home.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ColorButton } from '../../styles/button';



function News(props) {
    return (
        <>
        <p className="title-section">News</p>
        <div className="card-group">
        <Card sx={{ maxWidth: 345, height: 'fit-content' }} >
        <CardActionArea>
          <CardMedia
            style={{objectFit: 'cover', width: 345, height: '300px'}}
            component="img"
            height="431.5"
            image="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/317558216_584605570137766_6372225629746066264_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JTE7W7CT0EUAX9orkym&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAyYRbF9fzG39qqLg8u3svCQLqHa1tzFJ5nReiuQMHQ1w&oe=63B8CFA2"
            alt="green iguana"
          />
          <CardContent style={{textAlign: 'left'}}>
            <Typography gutterBottom variant="h5" component="div">
            English overseas 6
            </Typography>
            <Typography variant="body2" color="text.secondary" className='card-info'>
            This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <ColorButton variant="contained" style={{paddingLeft: 30, paddingRight: 30}}>Detail</ColorButton>

        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, height: 'fit-content' }} >
        <CardActionArea>
          <CardMedia
            style={{objectFit: 'cover', width: 345, height: '300px'}}
            component="img"
            height="431.5"
            image="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/317558216_584605570137766_6372225629746066264_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JTE7W7CT0EUAX9orkym&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAyYRbF9fzG39qqLg8u3svCQLqHa1tzFJ5nReiuQMHQ1w&oe=63B8CFA2"
            alt="green iguana"
          />
          <CardContent style={{textAlign: 'left'}}>
            <Typography gutterBottom variant="h5" component="div">
            English overseas 6
            </Typography>
            <Typography variant="body2" color="text.secondary" className='card-info'>
            This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <ColorButton variant="contained" style={{paddingLeft: 30, paddingRight: 30}}>Detail</ColorButton>

        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, height: 'fit-content' }} >
        <CardActionArea>
          <CardMedia
            style={{objectFit: 'cover', width: 345, height: '300px'}}
            component="img"
            height="431.5"
            image="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/317558216_584605570137766_6372225629746066264_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JTE7W7CT0EUAX9orkym&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAyYRbF9fzG39qqLg8u3svCQLqHa1tzFJ5nReiuQMHQ1w&oe=63B8CFA2"
            alt="green iguana"
          />
          <CardContent style={{textAlign: 'left'}}>
            <Typography gutterBottom variant="h5" component="div">
            English overseas 6
            </Typography>
            <Typography variant="body2" color="text.secondary" className='card-info'>
            This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <ColorButton variant="contained" style={{paddingLeft: 30, paddingRight: 30}}>Detail</ColorButton>

        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, height: 'fit-content' }} >
        <CardActionArea>
          <CardMedia
            style={{objectFit: 'cover', width: 345, height: '300px'}}
            component="img"
            height="431.5"
            image="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/317558216_584605570137766_6372225629746066264_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JTE7W7CT0EUAX9orkym&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAyYRbF9fzG39qqLg8u3svCQLqHa1tzFJ5nReiuQMHQ1w&oe=63B8CFA2"
            alt="green iguana"
          />
          <CardContent style={{textAlign: 'left'}}>
            <Typography gutterBottom variant="h5" component="div">
            English overseas 6
            </Typography>
            <Typography variant="body2" color="text.secondary" className='card-info'>
            This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <ColorButton variant="contained" style={{paddingLeft: 30, paddingRight: 30}}>Detail</ColorButton>

        </CardActions>
      </Card>
        </div>
        <ColorButton variant="contained" style={{paddingLeft: 60, paddingRight: 60, marginTop: 40}}>See more</ColorButton>

        </>
    );
}

export default News;