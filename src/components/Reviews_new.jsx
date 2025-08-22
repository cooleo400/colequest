import React, { PureComponent } from 'react';
import Headline, { headlineTypes } from './Headline';
import Columns from './Columns';
import Quote from './Quote';
import reviewsData from '../data/reviews.json';

class Reviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderReviews(reviewQuotes) {
    const pairs = [];
    for (let i = 0; i < reviewQuotes.length; i += 2) {
      pairs.push({
        left: reviewQuotes[i],
        right: reviewQuotes[i + 1] || null
      });
    }

    return pairs.map((pair, index) => (
      <Columns
        key={index}
        leftColumnChildren={
          pair.left ? (
            <div className="text-center">
              <Quote 
                author={pair.left.author || ""} 
                attribution={pair.left.attribution} 
                attributionLink={pair.left.attributionLink}
              >
                {pair.left.quote}
              </Quote>
            </div>
          ) : null
        }
        rightColumnChildren={
          pair.right ? (
            <div className="text-center">
              <Quote 
                author={pair.right.author || ""} 
                attribution={pair.right.attribution} 
                attributionLink={pair.right.attributionLink}
              >
                {pair.right.quote}
              </Quote>
            </div>
          ) : null
        }
      />
    ));
  }

  render() {
    // Combine all quotes into a single array for alternating layout
    const allQuotes = [
      ...reviewsData.quotes.leftColumn,
      ...reviewsData.quotes.rightColumn
    ];

    return (
      <div>
        <Headline type={headlineTypes.PRIMARY}>Reviews</Headline>
        {this.renderReviews(allQuotes)}
      </div>
    );
  }
}

export default Reviews;
