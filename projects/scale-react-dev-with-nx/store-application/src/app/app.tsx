// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import styles from './app.module.scss';
import { Card, CardActionArea, CardContent, CardMedia, Switch, Typography } from '@mui/material';
import { getAllGames } from './fake-api';
import { Header } from '../../../libs/store-application/ui-shared/src/index'
import { formatRating } from '../../../libs/store-application/util-formatters/src/index'

import { Route, Routes, useNavigate } from 'react-router-dom';

import { StoreApplicationFeatureGameDetails } from '../../../libs/store-application/feature-game-details/src/index';

export function App() {
  const navigate = useNavigate();

  return (
    <>
    <Header />
      <div className={styles.container}>
        <div className={styles.gamesLayout}>
          {getAllGames().map((x) => (
            <Card 
              key={x.id} 
              className={styles.gameCard}
              onClick={() => navigate(`/game/${x.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  className={styles.gameCardMedia}
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {x.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="game-rating"
                  >
                    <strong>Rating:</strong> {formatRating(x.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/game/:id" element={<StoreApplicationFeatureGameDetails />} />
      </Routes>
    </>
  );
}

export default App;
