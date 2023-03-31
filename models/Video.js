const fs = require('fs');

class Video {
  constructor(filePath) {
    this.filePath = filePath;
  }

  get fileSize() {
    return fs.statSync(this.filePath).size;
  }

  readChunk(start, end) {
    return fs.createReadStream(this.filePath, { start, end });
  }
}

module.exports = Video;
