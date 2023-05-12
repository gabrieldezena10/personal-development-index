import React from 'react';
import { useParams  } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import styles from './store-application-feature-game-details.module.scss';


export const StoreApplicationFeatureGameDetails = () => {
  const { id } = useParams<{id: string}>()

  return (
    <div className="container">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default StoreApplicationFeatureGameDetails;
