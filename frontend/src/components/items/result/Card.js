import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Skeleton from '@material-ui/lab/Skeleton';

export const JobCard = props => {
  return (
    <div>
      {props.company.results && props.company.results.map((val,idx) => {
        return (
          <Card className='mb-4' key={idx}>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={val.logo}/>}
              title={val.name}
              subheader={val.industry}
            />
            <CardActions className='px-3'>
              <FormControlLabel
                control={<Checkbox checked={props.job.checked_companies.indexOf(val.id) !== -1} onChange={e => props.jobDispatch.checkCompany(e, idx)} value={val.id} />}
                label="気になる"
              />
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}

export const OpenWorksCard = props => {
  return (
    <div>
      {props.company.results && props.company.results.filter(val => props.job.checked_companies.indexOf(val.id) !== -1).map((val, idx) => {
        return (
          <Card className='mb-4' key={idx}>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={val.logo}/>}
              title={val.name}
              subheader={val.industry}
            />
            <CardActions className='px-3'>
              <Button size="small" onClick={() => window.open(val.link)} color='primary'>
                OpenWorksで見る
              </Button>
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}
export const SkeletonCard = () => {
  return (
    Array.from(Array(3)).map((v, i) => {
      return (
        <Card className='mb-4' key={i}>
          <CardHeader
            avatar={<Skeleton variant="circle" width={40} height={40}/>}
            title={<Skeleton height={10} width="50%"/>}
            subheader={<Skeleton height={10} width="70%"/>}
          />
          <CardActions>
            <Button size="small">
              <Skeleton height={30} width="100%" />
            </Button>
          </CardActions>
        </Card>
      )
    })
  )
}
