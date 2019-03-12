export const getFiles = query => {
  const optionalQuery = query ? `?q=${query}` : "";

  return fetch(`/files${optionalQuery}`)
    .then(response => response.json())
    .then(json => json.files)
    .catch(error => console.log(error));
};

export const uploadFile = file => {
  const data = new FormData();
  data.append("file", file);
  return fetch("/files", {
    method: "POST",
    body: data
  })
    .then(response => response.json())
    .then(json => json.files)
    .catch(error => console.log(error));
};

export const deleteFile = fileId => {
  return fetch("/files", {
    method: "DELETE",
    body: JSON.stringify({
      id: fileId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(json => json.files)
    .catch(error => console.log(error));
};
