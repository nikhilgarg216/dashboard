import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const feedbacks = [
  {
    name: 'Jenny Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 4,
    feedback:
      'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5,
    feedback:
      'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 4,
    feedback:
      'Normally wings are wings, but theirs are lean, meaty and tender, and the sauces are top-notch. Highly recommend the garlic parmesan.',
  },
];

const FeedbackItem = ({ name, avatar, rating, feedback }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
    <Avatar alt={name} src={avatar} sx={{ mr: 2 }} />
    <Box>
      <Typography variant="h6" sx={{ color: '#fff' }}>
        {name}
      </Typography>
      <Rating value={rating} readOnly sx={{ color: '#fdd835' }} />
      <Typography variant="body2" sx={{ color: '#fff' }}>
        {feedback}
      </Typography>
    </Box>
  </Box>
);

FeedbackItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
};

const FeedbackList = () => (
  <ThemeProvider theme={theme}>
    <Paper sx={{ p: 2, borderRadius: 1, backgroundColor: '#1F2029' }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#fff' }}>
        Customer's Feedback
      </Typography>
      {feedbacks.map((feedback, index) => (
        <FeedbackItem key={index} {...feedback} />
      ))}
    </Paper>
  </ThemeProvider>
);

export default FeedbackList;
