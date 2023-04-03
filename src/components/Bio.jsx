import React, { PureComponent } from 'react';

class Bio extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // <p>Cole Quest and The City Pickers are a group of New York City musicians connected by friendship and a love of bluegrass. Cole Quest, grandson of the folk icon Woody Guthrie, has brought together a collection of eclectic pickers who have gained recognition on the local scene. Performing both Quest's original tunes as well as traditional favorites, The City Pickers bring their special brand of high-spirited talent to the stage, with up-beat, knee slapping energy and a high lonesome sound that'll leave you wanting more.</p>
    // <p>After recording at NYC's renowned Magic Shop studio and releasing their debut album in 2017, they've released their first EP, <a href="http://omnivorerecordings.com/shop/cole-quest-and-the-city-pickers-self-entitled/" target="_blank"><strong>Self [En]Titled</strong></a> on <a href="http://omnivorerecordings.com/" target="_blank">Omnivore Records</a>, in April of 2021 with the help of Grammy award winning producer Steve Rosenthal, Grammy award winning mixing engineer Tom Camuso, and Grammy award winning mastering engineer, Michael Graves. As featured in The Bluegrass Situation, Bluegrass Today, Folk Alley, WFUV, American Songwriter, Americana Highways, The Alternate Root, The Morton Report, and many more, they've shared bills with acts such as Billy Strings, Sierra Hull, Sarah Jaroz, Della Mae, The Brothers Comatose, The Lil Smokies, Whiskey Shivers, Old Salt Union, The Lonely Heartstring Band, Willie Watson, Blind Boy Paxton, Mike + Ruthy (of The Mammals), Paula Cole, Tom Paxton, David Amram, Tony Trischka, and Michael Daves during their tenure as a group and continue to perform for live audiences throughout the US. Sign up for the mailing list to catch the next show!</p>

    return (
      <div>
        <p>Cole Quest and The City Pickers are not your average bluegrass band. Led by the charismatic and talented Cole Quest, grandson of the folk icon Woody Guthrie, this group of New York City musicians is united by their love of bluegrass and their passion for bringing a fresh, innovative sound to the traditional genre.</p>
        <p>With their infectious energy and high-spirited talent, The City Pickers have become a mainstay on the local scene and have gained recognition from industry professionals and fans alike. Their debut album, recorded at NYC's renowned Magic Shop studio, was released in 2017 to critical acclaim, and in April 2021, they released their first EP, Self [En]Titled on Omnivore Records, with the help of Grammy award-winning producer and engineers including Steve Rosenthal.</p>
        <p>But what really sets Cole Quest and The City Pickers apart is their unique musical approach. Blending original tunes with traditional favorites, they infuse each song with a special brand of high-spirited energy and a high lonesome sound that'll leave you wanting more. Their music is inspired by the stories and emotions of everyday life, and their instrumentation and vocal style are second to none.</p>
        <p>Over the years, The City Pickers have shared bills with some of the biggest names in bluegrass and Americana music, including Billy Strings, Sierra Hull, Sarah Jaroz, Della Mae, The Brothers Comatose, The Lil Smokies, Whiskey Shivers, Old Salt Union, The Lonely Heartstring Band, Willie Watson, Blind Boy Paxton, Mike + Ruthy (of The Mammals), Paula Cole, Tom Paxton, David Amram, Tony Trischka, and Michael Daves among others. But for them, the real joy comes from performing for live audiences throughout the US and connecting with fans who share their love of bluegrass. They have also been featured in The Bluegrass Situation, Bluegrass Today, Folk Alley, WFUV, American Songwriter, Americana Highways, The Alternate Root, The Morton Report, and many more.</p>
        <p>So come join the fun and experience the magic of Cole Quest and The City Pickers. Sign up for the mailing list to catch the next show!</p>
      </div>
    );
  }
}
export default Bio;
