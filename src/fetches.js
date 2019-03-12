export const getFiles = query => {
  const optionalQuery = query ? `?q=${query}` : '';

  return fetch(`/files${optionalQuery}`)
    .then(
      response => response.json()
    )
    .then(json => json.files)
    .catch(error => console.log(error));
};

export const uploadFile = file => {
  const data = new FormData();
  data.append('file', file);
  return fetch("/upload", {
    method: "POST",
    body: data,
  })
    .then(
      response => response.json()
    )
    .then(json => json.files)
    .catch(error => console.log(error));
};