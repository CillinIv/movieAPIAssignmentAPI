import express from 'express';
import {getMovieReviews} from '../tmdb-api.js';
import movieModel from './movieModel.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().sort({title: -1}).then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/upcoming', (req, res, next) => {
  movieModel.upComing().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/toprated', (req, res, next) => {
  movieModel.topRated().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/trending', (req, res, next) => {
  movieModel.trending().then(movies => res.status(200).send(movies)).catch(next);
});
 

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
    const id = parseInt(req.params.id);
    getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
  });
  

export default router;