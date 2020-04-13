const { NodeJS } = require("Loader");

NodeJS.autoLoad(["fsPromises->fs.promises"], ["fs"], ["path"]);

class Builder {

  static HTML(html) {
    let htmlTorrent = "";
    html ? html.map(el => (htmlTorrent += el)) : null;

    return Promise.all([htmlTorrent])
      .then(files => files.map(f => f.toString("utf-8")))
      .then(files => files.join(""))
      .catch(e => console.error(e.toString()));
  }
}

module.exports = Builder;
