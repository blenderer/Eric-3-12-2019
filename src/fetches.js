export const getFiles = query => {
  const optionalQuery = query ? `?q=${query}` : '';

  return fetch(`/files${optionalQuery}`)
    .then(
      response => response.json()
    )
    .then(json => json.files)
    .catch(error => console.log(error));
}