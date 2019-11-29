const {NodeJS, MyMod} = require ('Loader');

NodeJS.autoLoad(['{Server}->http'],['path']);
MyMod.autoLoad( ['Path->./core/Router'], ['CreateDB->./project/classes/CreateDB']);

global.arr = [];

//MyMod.CreateDB.processLineByLine()

const server = new NodeJS.Server((req, res) => {

  if(NodeJS.path.extname(req.url))
  {
    MyMod.Path.mimeType(req, res);
  }
  else {
      try {
      let matchURL = {url:false};

// == Paths ==
      MyMod.Path.get('/', 'Home::getIndex', {req, res, matchURL});
      MyMod.Path.post('/', 'Home::postIndex', {req, res, matchURL});

      MyMod.Path.get('/404', 'Path::notFound', {req, res, matchURL});

// == Detecting incorrect paths ==
      MyMod.Path.incorrectURL(matchURL.url, res);
  }
  catch(e) {
    (e !== 'stop') ? console.error(e) : null;
  }
  }
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>console.info('\x1b[33m%s\x1b[0m', 'Server was started!'));