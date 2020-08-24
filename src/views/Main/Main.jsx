import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';

import { Grid, Typography } from '@material-ui/core';

import Data from './data1';

import Card from './components';

const useStyles = makeStyles((theme) => ({
  root: { padding: '64px 85px' },
  quoteBox: { margin: '22px 0px 70px 0px' },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <div>
        <Typography variant="h1">Butterflies</Typography>
      </div>
      <Grid item container className={classes.quoteBox}>
        <Typography variant="body1">
          Magna do consectetur ea minim pariatur consectetur elit.
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.cardBox}
      >
        {Data.map((item) => {
          console.log(item);
          return (
            <Grid item>
              <Card key={item.id} image={item.imgUrl} name={item.name} />
            </Grid>
          );
        })}{' '}
      </Grid>
    </Grid>
  );
};

export default Main;
