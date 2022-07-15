import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating, Badge, Chip } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack, Reviews, QuestionAnswer } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useGetMovieQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcons from '../../assets/genres';
import useStyles from './styles'
function MovieInformation() {
  const { id } = useParams()
  const { data, isFetching, error } = useGetMovieQuery(id)
  const classes = useStyles()
  const dispatch = useDispatch()

  if (isFetching) {
    return (
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <CircularProgress size="8rem" />
      </Box>
    )
  }

  if (error) {
    return (
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Link to="/">Something has gone wrong, go back to homepage</Link>
      </Box>
    )
  }

  console.log(data)
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant='h3' align='center' gutterBottom>{data?.title} ({data.release_date.split('-')[0]}) </Typography>
        <Typography variant='h5' align='center' gutterBottom>{data?.tagline} </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" alignContent="center">
            <Rating readOnly value={data.vote_average / 2} />

            <Typography variant="subtitle1" gutterBottom style={{ marginLeft: '10px' }}>
              {data?.vote_average} /10
            </Typography>
            {/* <Chip color="info" label={data.vote_count} size="small" /> */}
          </Box>
          <Typography variant='h6' align='center' gutterBottom>
            {data?.runtime} min {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : ''}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link key={genre.name} className={classes.links} to="/" onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <img src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieInformation;
