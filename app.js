class Request {
  // Get Requesti
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  // Post Requesti
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();

// Get Request

// let albums;
// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((albums) => {
//     console.log(albums); // sekron
//   })
//   .catch((err) => console.log(err));
//console.log(albums); //Asekron

// Post Request
request
  .post("https://jsonplaceholder.typicode.com/albums", {
    userId: 1,
    title: "Naber",
  })
  .then((newAlbum) => console.log(newAlbum))
  .catch((err) => console.log(err));
