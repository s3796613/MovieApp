import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useGetActorDetailsQuery, useGetMoviesByActorQuery } from '../../services/TMDB';
import { MovieList } from '..'
import useStyles from './styles';

function Actors() {
  const { id } = useParams()
  const history = useHistory()
  const classes = useStyles()
  const { data, isFetching, error } = useGetActorDetailsQuery(id)
  const page = 1
  const { data: movies } = useGetMoviesByActorQuery({ id, page })
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
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
          Something has gone wrong, go back to homepage
        </Button>
      </Box>
    )
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="h2" gutterBottom>{data?.name}</Typography>
          <Typography variant="h5" gutterBottom>Born in {new Date(data?.birthday).toDateString()}</Typography>
          <Typography variant="body1" align="justify" gutterBottom>{data?.biography || 'No information about this actor'}</Typography>
          <Box
            marginTop="2rem"
            display="flex"
            justifyContent="space-around"
          >
            <Button variant='contained' color='primary' target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
              Go back
            </Button>

          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" align='center' gutterBottom>Casted in</Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
      </Box>
    </>
  );

}

export default Actors;
