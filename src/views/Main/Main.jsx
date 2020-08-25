import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://quotes.rest/qod');

        setQuote(result.data.contents.quotes[0].quote);
      } catch (e) {
        setQuote(
          'The best thing about a boolean is even if you are wrong, you are only off by a bit.'
        );
      }
    };
    fetchData();
  }, []);
  return (
    <Grid container className={classes.root}>
      <div>
        <Typography variant="h1">Butterflies</Typography>
      </div>
      <Grid item container className={classes.quoteBox}>
        <Typography variant="body1">{quote}</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.cardBox}
      >
        {Data.map((item) => {
          return (
            <Grid item key={item.id}>
              <Card image={item.imgUrl} name={item.name} />
            </Grid>
          );
        })}{' '}
      </Grid>
    </Grid>
  );
};

export default Main;
