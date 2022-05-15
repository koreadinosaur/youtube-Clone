class Youtube {
  constructor(key) {
    this.key = key;
  }
  handleSearch(value) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=${this.key}`
    )
      .then((response) => response.json())
      .then((data) =>
        data.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .catch((error) => console.log("error :", error));

    // setVideos(data.items);
  }
  getVideos() {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${this.key}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data.items)
      .catch((error) => console.log("error :", error));
  }
}

export default Youtube;
