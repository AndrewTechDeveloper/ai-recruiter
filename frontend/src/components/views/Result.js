import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { Container } from 'reactstrap'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { JobCard } from '../items/result/Card.js'
import { SkeletonCard } from '../items/result/Card.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px',
    padding :'0'
  },
}))

export const ResultView = props => {
  const classes = useStyles()
  const validation = job => {
    return job.checked_companies.length === 0
  }
  return (
    <Container className={classes.container}>
      <Typography variant="h6" className="text-center" gutterBottom color='primary'>
        {props.company.results.length === 0 && !props.company.isLoading ? (
          "条件に合う会社が見つかりませんでした"
        ) : (
          "あなたにおすすめの会社はこちらです！"
        )}
      </Typography>
      <Typography variant="subtitle1" className="text-muted text-center mb-4" gutterBottom>
        {props.company.results.length === 0 && !props.company.isLoading ? (
          "条件を変えて再度お試しください"
        ) : (
          "気になる会社にチェックしてください(複数選択可)"
        )}
      </Typography>
      {props.company.isLoading &&
        <SkeletonCard/>
      }
      <JobCard {...props}/>
      <div>
        <Button onClick={()=>props.jobDispatch.stepBackward()}>
          戻る
        </Button>
        <Button variant="contained" color="primary" disabled={validation(props.job)} onClick={()=>props.jobDispatch.stepForward() & props.jobDispatch.submitData(props)}>
          選択完了
        </Button>
      </div>
    </Container>
  );
}
