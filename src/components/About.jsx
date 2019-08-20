import React, { PureComponent } from 'react';
import Columns from './Columns';
import Loader from './Loader';
import Quote from './Quote';

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
    const bio = (
      <div>
        <p>Cole Quest and The City Pickers are a group of New York City musicians connected by friendship and a love of bluegrass. Cole Quest, grandson of the folk icon Woody Guthrie, has brought together a collection of eclectic pickers who have gained recognition on the local scene. Performing both Quest's original tunes as well as traditional favorites, The City Pickers bring their special brand of high-spirited talent to the stage, with up-beat, knee slapping energy and a high lonesome sound that'll leave you wanting more.</p>
        <p>After recording at NYC's renowned Magic Shop studio, by Grammy award winning producer Steve Rosenthal, they released their debut album in 2017. They've shared bills with acts such as Sierra Hull, Sarah Jaroz, Billy Strings & Don Julin, Della Mae, The Brothers Comatose, The Lil Smokies, Whiskey Shivers, Old Salt Union, The Lonely Heartstring Band, Willie Watson, Blind Boy Paxton and Michael Daves during their tenure as group and continue to perform for live audiences throughout the US. Sign up for the mailing list to catch the next show!</p>
        <a href={epkLink} target="_blank" className="order-link">Press Kit</a>
      </div>
    );
    const twitter = (
      <div>
        <a className="twitter-timeline" data-height="400" data-link-color="#c82c2f" href="https://twitter.com/colequestcp?ref_src=twsrc%5Etfw">
          <Loader />
        </a>
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
        <Quote author="Michael&nbsp;Weinstein">
          "Like a young romantic interlude, it's hot, it's tight, it's exciting and it leaves the crowd wanting more! They're like your very first dalliance in the musical arena of love! They'll leave you breathless and confused but satiated and&nbsp;spent!"
        </Quote>
      </div>
    );
    const rightQuotes = (
      <div>
        <p>"You’ve got to see this band live! Their catchy playing and endearing personal dynamic will make you sit up &amp; listen, tap your toes (maybe even get up and dance), and bring a big grin to your face. They make great old fashioned good time music in a modern and highly accessible way. And they just keep getting better and better!"</p><p><span className="color-bg-1">Maggi Landau</span> / <a href="https://www.caramoor.org/" target="_blank"><i>Caramoor Center for Music and the Arts</i></a></p>
        <p>"The ensemble is packed with individual talent and each musician exhibited virtuosic skill...What makes them special, however, is their sheer energy and exuberance. Here with Cole Quest and The City Pickers, the fun-index was in overdrive. These young players enjoyed themselves immensely for every second of their three hour show, and so did we. A band worth catching! Look out for Cole Quest and The City Pickers."</p><p><span className="color-bg-1">Frank Matheis</span> / <a href="http://www.thecountryblues.com/about-frank-matheis/" target="_blank"><i>Music Journalist &amp; Radio Producer</i></a></p>
        <p>"I fully attest that there is nothing quite like their live dynamic. The chemistry here is incredibly potent as musical ideas and gestures shared across the ensemble prove a unique familiarity...This motley cast of characters places heart behind every note. A worthwhile listen to a number of New York's "up-and-coming" folk&nbsp;personalities."</p><p><span className="color-bg-1">Nick Horner</span> / <a href="http://www.porchstomp.com/single-post/2016/09/06/First-Listen-Cole-Quest-and-The-City-Pickers" target="_blank"><i>Porch&nbsp;Stomp</i></a></p>
        <p>"Cole's music seems deeply rooted in his own perspective of the world and comes across as authentic. If you see one concert this summer make sure it's Cole Quest and The City&nbsp;Pickers"</p><p><span className="color-bg-1">Chris Pizzolo</span> / <a href="http://www.queensscene.com/news/2016-07-01/Nightlife/Tunes__Taverns.html" target="_blank"><i>Queens&nbsp;Scene&nbsp;Music</i></a></p>
      </div>
    );
    return (
      <div>
        <Columns leftColumnChildren={bio} rightColumnChildren={twitter} />
        <br />
        <Columns leftColumnChildren={leftQuotes} rightColumnChildren={rightQuotes} />
      </div>
    );
  }
}

export default About;
