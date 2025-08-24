import React, { PureComponent } from 'react';
import { fetchBio } from '../actions';
import Loader from './Loader';

class Bio extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bioContent: '',
      loading: true
    };
  }

  componentDidMount() {
    fetchBio()
      .then(bioDescription => {
        this.setState({ 
          bioContent: bioDescription, 
          loading: false 
        });
      })
      .catch(() => {
        // Fallback to default content if Contentful fails
        this.setState({ 
          bioContent: this.getDefaultBio(), 
          loading: false 
        });
      });
  }

  getDefaultBio() {
    return `<p>Cole Quest and The City Pickers are not your average bluegrass band. Led by the charismatic and talented Cole Quest, grandson of the folk icon Woody Guthrie, this group of New York City musicians is united by their love of bluegrass and their passion for bringing a fresh, innovative sound to the traditional genre.</p>

<p>With their infectious energy and high-spirited talent, The City Pickers have become a mainstay on the local scene and have gained recognition from industry professionals and fans alike. Their debut album, recorded at NYC's renowned Magic Shop studio, was released in 2017 to critical acclaim, and in April 2021, they released their first EP, <strong>Self [En]Titled</strong> on <a href="http://omnivorerecordings.com/" target="_blank">Omnivore Records</a>. Their latest full length LP, <strong>Homegrown</strong> on <a href="http://jalopyrecords.org" target="_blank">Jalopy Records</a>, was released on July 18th with the help of Grammy award-winning producer and engineers including Steve Rosenthal.</p>

<p>But what really sets Cole Quest and The City Pickers apart is their unique musical approach. Blending original tunes with traditional favorites, they infuse each song with a special brand of high-spirited energy and a high lonesome sound that'll leave you wanting more. Their music is inspired by the stories and emotions of everyday life, and their instrumentation and vocal style are second to none.</p>

<p>Over the years, The City Pickers have shared bills with some of the biggest names in bluegrass and Americana music, including Billy Strings, Sierra Hull, Sarah Jaroz, Della Mae, The Brothers Comatose, The Lil Smokies, Whiskey Shivers, Old Salt Union, The Lonely Heartstring Band, Willie Watson, Blind Boy Paxton, Mike + Ruthy (of The Mammals), Paula Cole, Tom Paxton, David Amram, Tony Trischka, and Michael Daves among others. But for them, the real joy comes from performing for live audiences across the world and connecting with fans who share their love of bluegrass. They have also been featured in The Bluegrass Situation, Bluegrass Today, Folk Alley, WFUV, American Songwriter, Americana Highways, The Alternate Root, The Morton Report, and many more.</p>

<p>So come join the fun and experience the magic of Cole Quest and The City Pickers. Sign up for the mailing list to catch the next show!</p>`;
  }
  
  render() {
    const { bioContent, loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <div dangerouslySetInnerHTML={{ __html: bioContent }} />
    );
  }
}

export default Bio;
