import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: '100px',
    height: '30px',
    objectFit: 'contain',
    marginRight: '20px',
    cursor: 'pointer'
  }
}));

export const JobsList = props => {
  const classes = useStyles();
  return (
    <List>
      {props.company.jobs.map((val,idx) => {
        return (
          <ListItem alignItems="flex-start" key={idx}>
            <ListItemAvatar>
              <img className={classes.avatar} src={val.logo} onClick={() => window.open(val.link)}/>
            </ListItemAvatar>
            <ListItemText
              primary={val.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    レビュー数{val.review_nums}件
                  </Typography>
                  - 総合評価{val.total_rate}
                </React.Fragment>
              }
            />
          </ListItem>
        )
      })}
      <Divider variant="inset" component="li" />
    </List>
  );
}
