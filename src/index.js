import express from 'express';
import userService from './services/user.service.js';

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.json({
    data: null,
    status: 'success',
    message: 'It Works',
  });
});

app.get(
  '/api/user',
  userService.getAll,
);

app.get(
  '/api/user/:id',
  userService.getDetail,
);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log('service running at', PORT);
});

export default app;
