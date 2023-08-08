import { createClient } from 'contentful';

//Production Keys
const SPACE_ID = 'iwbucf7d4iqh'
const ACCESS_TOKEN = 'da27f9a70950e8e6924ac270dbcf328e31bc4d150062c05be49e549528e4d696'
//Local Keys
// const SPACE_ID = 'iwbucf7d4iqh'
// const ACCESS_TOKEN = '7a2767b4044daaf5e9999d41873060d2e98947dc15802f58c65a9a139634eab5'

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

// Load all entries for a given Content Type from Contentful
export function fetchEntriesForContentType (contentType) {
  return client.getEntries({
      content_type: contentType,
      'fields.active': 'true',
      order: 'fields.date'
    })
  .then((response) => response.items)
  .catch((error) => {
    console.log('Error occurred while fetching Entries:', contentType);
    console.error(error);
  })
}

function fetchContentTypes () {
  return client.getContentTypes()
  .then((response) => response.items)
  .catch((error) => {
    console.log('Error occurred while fetching Content Types:');
    console.error(error);
  })
}

export function fetchShows() {
  return fetchEntriesForContentType('gig');
}

export function filterShowsByTag(shows, tagId) {
  return shows.filter((show) => show.metadata.tags.map(tag => tag.sys.id).includes(tagId));
}

export function submitEmail(email) {
  const emailUrl = '//colequest.com/subscribe.php';

  return fetch(emailUrl, {
    method: 'POST',
    body: JSON.stringify({ email }),
    mode: 'no-cors',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  })
  .then(response => response.json())
  .catch((error) => {
    console.log(error);
  });
}
