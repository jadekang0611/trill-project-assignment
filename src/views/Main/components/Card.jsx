import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';

import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: { borderRadius: '15px' },
  butterflyName: {
    textTransform: 'capitalize',
    textAlign: 'center',
    margin: '25px',
  },
}));

const Card = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img
          src={props.image}
          alt={props.name}
          width={300}
          height={300}
          className={classes.image}
        />
      </div>
      <Typography variant="h2" className={classes.butterflyName}>
        {props.name}
      </Typography>
    </div>
  );
};
export default Card;
