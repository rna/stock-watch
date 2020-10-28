import React from 'react';
import PropTypes from 'prop-types';

const NewsComponent = ({ news }) => (
  <div>
    <a href={news.url} target="_blank" rel="noreferrer">
      <img src={news.image} alt={news.symbol} />
    </a>
    <div>
      <a href={news.url} target="_blank" rel="noreferrer">
        <h4>{news.title}</h4>
      </a>
      <p>{news.site}</p>
    </div>
  </div>
);

NewsComponent.propTypes = {
  news: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
  }).isRequired,
};
export default NewsComponent;
