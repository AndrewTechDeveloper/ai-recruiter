import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'block',
    marginTop: '12px',
    marginBottom: '12px',
  },
  avatar: {
    width: '100px',
    height: '30px',
    objectFit: 'contain',
    marginRight: '20px',
  }
}));

export const JobsList = props => {
  const classes = useStyles();
  return (
    <List>
      {props.company.jobs.map((val,idx) => {
        return (
          <div key={idx}>
            <ListItem className={classes.list}>
              <ListItemAvatar>
                <img className={classes.avatar} src={val.logo}/>
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
              <Button
                variant="contained"
                color="primary"
                startIcon={<CheckIcon />}
                onClick={() => window.open(val.link)}
              >
                気になる
              </Button>
            </ListItem>
            <Divider />
          </div>
        )
      })}
      <Divider variant="inset" component="li" />
    </List>
  );
}
