import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { IndustryCategoryData } from '../Data.js'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Skeleton from '@material-ui/lab/Skeleton';

export const JobCard = props => {
  const loading = props.job.isLoading
  return (
    <div>
      {props.company.jobs.map((val,idx) => {
        return (
          <Card className='mb-4' key={idx}>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={val.logo}/>}
              title={val.name}
              subheader={IndustryCategoryData[val.category]}
            />
            <CardActions className='px-3'>
              <FormControlLabel
                control={<Checkbox checked={props.job.checked_companies.indexOf(val.id) !== -1} onChange={e => props.checkCompany(e, idx)} value={val.id} />}
                label="気になる"
              />
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
