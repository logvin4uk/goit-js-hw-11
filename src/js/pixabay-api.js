export function getImage(query) {
  const base_url = `https://pixabay.com/api/`;
  const parameters = new URLSearchParams({
    key: '43225287-97b9a21e329f588fe71ea406f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${base_url}?${parameters}`;

  return fetch(url)
    .then(res => {
      const response = res.json();
      return response;
    })
    .catch(err => console.log(err));
}
