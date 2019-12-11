import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { Container } from 'reactstrap'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { JobCard } from '../items/result/Card.js'
import { JobsList } from '../items/result/List.js'
import { SkeletonCard } from '../items/result/Card.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px',
    padding :'0'
  },
}))

export const OpenWorksView = props => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography variant="h6" className="text-muted text-center" gutterBottom>
        詳細を見たい企業をクリックしてください
      </Typography>
      <Typography variant="subtitle1" className="text-center mb-4" gutterBottom>
        OpenWorksの企業情報ページに飛びます
      </Typography>
      {props.company.isLoading &&
        <SkeletonCard/>
      }
      <JobCard {...props}/>
      <div>
        <Button onClick={()=>props.stepBackward()}>
          戻る
        </Button>
        <Button variant="contained" color="primary" disabled={false} onClick={()=>props.stepForward()}>
          結果を見る
        </Button>
      </div>
    </Container>
  );
}
