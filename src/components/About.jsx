import React, { PureComponent } from 'react';
import Headline, { headlineTypes } from './Headline';
import Bio from './Bio';
import Columns from './Columns';
import Loader from './Loader';
import Quote from './Quote';

import InstagramEmbed from './InstagramEmbed';

const epkLink = 'https://drive.google.com/open?id=1Af2V_dZbPYB8LN78R_gUQdoXeZ0Ihn0-';

class About extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      twttr.widgets.load();
    } catch(e) {
      console.error(`Error: Twitter widget can't load. ${e}`);
    }

  }

  render() {
    const twitter = (
      <div>
        <a className="twitter-timeline" data-height="400" data-link-color="#c82c2f" href="https://twitter.com/colequestcp?ref_src=twsrc%5Etfw">
          <Loader />
        </a>
      </div>
    );

    const centerColumnReviews = (
      <div className="text-center">
        <Quote author="" attribution="American Songwriter" attributionLink="https://americansongwriter.com/review-cole-quest-makes-granddad-proud/">
          "Having made their name in their native New York City, Quest and company are clearly well-equipped to convey the music with a craft and creativity befitting his bloodline...Then again, the ability to affect a listener is a sure sign of skill and savvy. And Quest, like his grandfather, has the ability to convey those feelings with care and compassion. Woody would be proud...4 of 5 stars"
        </Quote>
        <Quote author="Alan Cackett" attribution="Americana, Roots, Country &amp; Bluegrass" attributionLink="https://alancackett.com/cole-quest-and-the-city-pickers-self-en-titled-ep">
          "Cole penned four of these songs with a sense of urgency running through them, each one resonating like a bright moment in these highly troubled times. This isn’t an album for revivalists (but I’m sure they’ll find a foothold if need be). This is a record for those seeking to extend the groove forever into the horizon and melt right back into the wet soil, wood and concrete that vibrates under us all...The catchy hooks and the blend of instrumentation, unlike any other, along with the robust revelry that accompanies many of the songs, would likely find even the most stoic critic professing abject admiration for this outfit—make sure you don’t miss out on Cole Quest & the City Pickers.""
        </Quote>
        <Quote author="" attribution="Take Effect" attributionLink="https://takeeffectreviews.com/april-2021-2/2021/4/19/cole-quest-and-the-city-pickers">
          "An energetic and intimate quick listen...that tips it hat to legends like Bill Monroe or Earl Scruggs, Quest and company prove that urban bluegrass can be just as genuine as its rural counterparts, and their knack for progressive ideas certainly only adds more appeal to their craft...8/10"
        </Quote>
        <Quote author="" attribution="Americana Highways" attributionLink="https://americanahighways.org/2021/04/16/review-cole-quest-and-the-city-pickers-self-entitled-is-bright-stellar-performance/">
          "Self [En]Titled is a bright, stellar performance...Grandpa Woody & Bill Monroe too — would’ve been proud of this grandson. Not bad for a bunch of City boys."
        </Quote>
        <Quote author="" attribution="The Alternate Root" attributionLink="http://www.thealternateroot.com/reviewarchives/cole-quest-and-the-city-pickers">
          "Self [En]Titled, is festival ripe, a blast of Roots music with a Folk and subtle New-Grass vibe that swings like West Coast Bluegrass."
        </Quote>
        <Quote author="Tony Trischka">
          "The overall sound [of Self [En]Titled] is wonderfully organic, with rich trio and lead singing, solid instrumental picking, and a repertoire that keeps you coming back for more.  Somehow, there’s a worldly innocence on hand here (if that makes any sense), that I find to be particularly healing in these hard times. As I write this, there’s a light at the end of the tunnel, and this music is shining bright."
        </Quote>
      </div>
    );

    const rightColAccolades = (
      <div className="text-center">
        <p><a href="https://www.youtube.com/watch?v=Yw5tZtpiYlI" target="_blank">Way Over Yonder in the Minor Key</a>, awarded Honorable Mention for <a href="https://www.wam-awards.com/2021-wam-award-winners" target="_blank">Best Cover song</a> by the W.A.M. Awards.</p>
      </div>
    );
    const centerColAccolades = (
      <div className="text-center">
        <p><a href="https://open.spotify.com/track/7lkwW1nd1jsDf2EDPGRxBX?si=a878a101fb614c6c" target="_blank">My Sweet Little Girl</a> sits 5 weeks at #1 and 7 weeks at #2 on <a href="https://rootsmusicreport.com/charts/view/song/sub_genre/traditional-bluegrass/weekly" target="_blank">Roots Music Report's Traditional Bluegrass Song Chart</a></p>
      </div>
    );
    const leftColAccolades = (
      <div className="text-center">
        <p>Winners of the 2023 <a href="https://podunkbluegrass.com/band-competition/" target="_blank">Telefunken Band Competition at Podunk Bluegrass Festival</a></p>
      </div>
    );

    const leftColumnReviews = (
      <div className="text-center">
        <Quote attribution="www.honnef-heute.de" attributionLink="https://honnef-heute.de/cole-quest-and-the-city-pickers-rockten-das-weingut/">
          "Cole Quest and The City Pickers rocked the winery. [They] delivered bluegrass at its best. The fans clapped frenetically, danced and were thrilled."
        </Quote>
        <Quote author="" attribution="American Songwriter" attributionLink="https://americansongwriter.com/review-cole-quest-makes-granddad-proud/">
          "Having made their name in their native New York City, Quest and company are clearly well-equipped to convey the music with a craft and creativity befitting his bloodline...Then again, the ability to affect a listener is a sure sign of skill and savvy. And Quest, like his grandfather, has the ability to convey those feelings with care and compassion. Woody would be proud...4 of 5 stars"
        </Quote>
        <Quote author="Alan Cackett" attribution="Americana, Roots, Country &amp; Bluegrass" attributionLink="https://alancackett.com/cole-quest-and-the-city-pickers-self-en-titled-ep">
          "Cole penned four of these songs with a sense of urgency running through them, each one resonating like a bright moment in these highly troubled times. This isn’t an album for revivalists (but I’m sure they’ll find a foothold if need be). This is a record for those seeking to extend the groove forever into the horizon and melt right back into the wet soil, wood and concrete that vibrates under us all...The catchy hooks and the blend of instrumentation, unlike any other, along with the robust revelry that accompanies many of the songs, would likely find even the most stoic critic professing abject admiration for this outfit—make sure you don’t miss out on Cole Quest & the City Pickers.""
        </Quote>
        <Quote attribution="Exclusive Magazine" attributionLink="http://www.annecarlini.com/ex_cd.php?id=3515">
          “Vibrantly authentic”
        </Quote>
      </div>
    );
    const rightColumnReviews = (
      <div className="text-center">
        <Quote attribution="www.country.de" attributionLink="https://www.country.de/2023/07/03/cole-quest-the-city-pickers-verzuecken-eisenach/">
          "Cole Quest and The City Pickers took the audience by storm and put on a concert that will be remembered for a long time."
        </Quote>
        <Quote author="" attribution="Take Effect" attributionLink="https://takeeffectreviews.com/april-2021-2/2021/4/19/cole-quest-and-the-city-pickers">
          "An energetic and intimate quick listen...that tips it hat to legends like Bill Monroe or Earl Scruggs, Quest and company prove that urban bluegrass can be just as genuine as its rural counterparts, and their knack for progressive ideas certainly only adds more appeal to their craft...8/10"
        </Quote>
        <Quote author="" attribution="Americana Highways" attributionLink="https://americanahighways.org/2021/04/16/review-cole-quest-and-the-city-pickers-self-entitled-is-bright-stellar-performance/">
          "Self [En]Titled is a bright, stellar performance...Grandpa Woody & Bill Monroe too — would’ve been proud of this grandson. Not bad for a bunch of City boys."
        </Quote>
        <Quote author="" attribution="The Alternate Root" attributionLink="http://www.thealternateroot.com/reviewarchives/cole-quest-and-the-city-pickers">
          "Self [En]Titled, is festival ripe, a blast of Roots music with a Folk and subtle New-Grass vibe that swings like West Coast Bluegrass."
        </Quote>
        <Quote author="Tony Trischka">
          "The overall sound [of Self [En]Titled] is wonderfully organic, with rich trio and lead singing, solid instrumental picking, and a repertoire that keeps you coming back for more.  Somehow, there’s a worldly innocence on hand here (if that makes any sense), that I find to be particularly healing in these hard times. As I write this, there’s a light at the end of the tunnel, and this music is shining bright."
        </Quote>
      </div>
    );

    const featuredRightColumn = (
      <div className="text-center">
        <p><a href="http://www.themortonreport.com/celebrity/sports/music-reviews-six-little-known-artists-you-ought-to-hear/" target="_blank">Six artists you ought to know on The Morton Report</a></p>
        <p><a href="http://www.thealternateroot.com/topten040721.html" target="_blank">Top 10 on The Alternate Root</a></p>
      </div>
    );
    const featuredLeftColumn = (
      <div className="text-center">
        <p><a href="https://bluegrasstoday.com/cole-quest-the-city-pickers-remember-woody-guthrie/" target="_blank">Bluegrass Today</a></p>
        <p><a href="https://thebluegrasssituation.com/read/watch-cole-quest-and-the-city-pickers-the-bitcoin-gambler/" target="_blank">The Bluegrass Situation</a></p>
      </div>
    );

    const leftQuotes = (
      <div>
        <Quote author="Ketch Secor" attribution="Old Crow Medicine Show">
          "What a crack team of pickers and voices you have put together. Great dobro playing, world class harmonica. Damn it sure sounds fun with your city pickers at the microphone."
        </Quote>
        <Quote author="John&nbsp;Platt" attribution="WFUV" attributionLink="http://www.wfuv.org/content/cole-quest-and-city-pickers-0">
          "It's clear that while he embraces much of Woody's legacy, Cole is very successfully forging his own path&nbsp;in&nbsp;music."
        </Quote>
        <Quote author="Steve Danielsson" attribution="Feast&nbsp;Of&nbsp;Music" attributionLink="http://www.feastofmusic.com/feast_of_music/2015/03/cole-quest-and-the-city-pickers-at-the-living-room.html">
          "Cole Quest and the City Pickers spread the good word of Bluegrass through clever original songs and a vast library of classics.  Their unbridled energy, tight harmonies and instrumental virtuosity will turn you into a believer in the good book of acoustic roots&nbsp;music."
        </Quote>
        <Quote author="Gordon Nash" attribution="Wise&nbsp;Madness" attributionLink="http://horvendile.diaryland.com/oyr217.html#.WK-nihIrLXR">
          "This year I made sure to catch a showcase of theirs and was not disappointed. I had high expectations and they exceeded&nbsp;them...These guys can energize a crowd on a visceral level while displaying remarkable musicianship and songwriting."
        </Quote>
        <Quote author="Chris Pizzolo" attribution="Queens Scene&amp;Music" attributionLink="http://www.queensscene.com/news/2016-07-01/Nightlife/Tunes__Taverns.html">
          "Cole's music seems deeply rooted in his own perspective of the world and comes across as authentic. If you see one concert this summer make sure it's Cole Quest and The City&nbsp;Pickers"
        </Quote>
      </div>
    );
    const rightQuotes = (
      <div>
        <Quote author="Maggi Landau" attribution="Caramoor Center for Music and the Arts" attributionLink="https://www.caramoor.org">
          "You’ve got to see this band live! Their catchy playing and endearing personal dynamic will make you sit up &amp; listen, tap your toes (maybe even get up and dance), and bring a big grin to your face. They make great old fashioned good time music in a modern and highly accessible way. And they just keep getting better and better!"
        </Quote>
        <Quote author="Frank Matheis" attribution="Music Journalist &amp; Radio Producer" attributionLink="http://www.thecountryblues.com/about-frank-matheis/">
          "The ensemble is packed with individual talent and each musician exhibited virtuosic skill...What makes them special, however, is their sheer energy and exuberance. Here with Cole Quest and The City Pickers, the fun-index was in overdrive. These young players enjoyed themselves immensely for every second of their three hour show, and so did we. A band worth catching! Look out for Cole Quest and The City Pickers."
        </Quote>
        <Quote author="Nick Horner" attribution="Porch Stomp" attributionLink="http://www.porchstomp.com/single-post/2016/09/06/First-Listen-Cole-Quest-and-The-City-Pickers">
          "I fully attest that there is nothing quite like their live dynamic. The chemistry here is incredibly potent as musical ideas and gestures shared across the ensemble prove a unique familiarity...This motley cast of characters places heart behind every note. A worthwhile listen to a number of New York's "up-and-coming" folk&nbsp;personalities."
        </Quote>
      </div>
    );


    return (
      <div>
        <Columns centerColumnChildren={<Bio />} />

        <br />
        <Headline type={headlineTypes.PRIMARY}>Accolades</Headline>
        <Columns leftColumnChildren={leftColAccolades} centerColumnChildren={centerColAccolades} rightColumnChildren={rightColAccolades} />
        <Headline type={headlineTypes.PRIMARY}>Reviews</Headline>
        <Columns leftColumnChildren={leftColumnReviews} rightColumnChildren={rightColumnReviews} />
        <Headline type={headlineTypes.PRIMARY}>Featured On</Headline>
        <Columns leftColumnChildren={featuredLeftColumn} rightColumnChildren={featuredRightColumn} />
        <Headline type={headlineTypes.PRIMARY}>Quotes</Headline>
        <Columns leftColumnChildren={leftQuotes} rightColumnChildren={rightQuotes} />
      </div>
    );
  }
}

export default About;
