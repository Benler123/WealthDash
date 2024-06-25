import React from 'react';

interface StarProps {
  type: 'full' | 'half' | 'empty';
}

const Star: React.FC<StarProps> = ({ type }) => {
  let color;
  switch (type) {
    case 'full':
      color = '#FFD700'; // Gold color for full star
      break;
    case 'half':
      return (
        <span>
          <span style={{ color: '#FFD700' }}>★</span>
          <span style={{ color: '#D3D3D3', position: 'absolute', marginLeft: '-1em' }}>★</span>
        </span>
      );
    case 'empty':
    default:
      color = '#D3D3D3'; // Light gray for empty star
  }
  return <span style={{ color, position: 'relative' }}>★</span>;
};

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <Star key={`full-${index}`} type="full" />
      ))}
      {halfStar > 0 && <Star key="half" type="half" />}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={`empty-${index}`} type="empty" />
      ))}
    </div>
  );
};

export default StarRating;