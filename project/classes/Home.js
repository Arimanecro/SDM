const { NodeJS, MyMod } = require("Loader");

NodeJS.autoLoad(["url"], ["fs"]);
MyMod.autoLoad(
  ["Builder"],
  ["Path->./core/Router"],
  ["HomePage->./project/Views/homeView"]
);

let abc = [
  'a',  'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 
  'z', '0', '1', '2', '3',
  '4', '5', '6', '7', '8',
  '9', '\'', '"', '/', '\\',
  '`', '~', '!', '@', '#', 
  '%', '^', '&', '?', '*',
  '(', ')', '-', '_', '+', 
  '=', '<', '>', '.', ',', 
  '|', '{', '}', '[', ']'
]

module.exports = class Home {

  static async getIndex(args) {
          let html = [MyMod.HomePage];
          const { res, req } = args;
          let page = await MyMod.Builder.HTML(
            html.map(h => h())
          );
          await res.writeHead(200, {"Content-Type": "text/html"});
          await res.end(`${page}`);   
    } catch (e) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(`<h1>Server Error</h1>`);
      console.error(e);
    }

  static async postIndex(args){
    let { res, login, password, search, brackets } = args;
    let msg = {error:"", success:""}

    if(login && password)
    {
      Home.existsOrNot(brackets) ? msg.error = 'User exists!' : Home.add({login, password, brackets}, msg);
      Home.addHTML(args, msg);
    }
    else if(search) {
        let start = (new Date()).getTime();
        let user = Home.existsOrNot(brackets);
        let end = (new Date()).getTime();
        user ? msg.success = `<strong>Password is:</strong> ${user.split(":")[1]}. <strong>Search time:</strong> ${(end - start)} ms` : msg.error = 'User doesn\'t exist';
        Home.addHTML(args, msg);
      }
    else {
      Home.addHTML(args);
    }
  }

  static async addHTML(args, msg=null) {
    let html = [MyMod.HomePage];
    const { res, req } = args;
    let page = await MyMod.Builder.HTML(
      html.map(h => h(msg))
    );
    await res.writeHead(200, { "Content-Type": "text/html"});
    await res.end(`${page}`); 
  }

  static existsOrNot(str){

    let count = Home.trimByChar(Home.trimByChar(str.split('][').toString(), '['), ']').split(',');
    let brackets = '';
    let res = 0;

    for (let i = 0; i <= count.length-1; i++) {
        brackets += `[${count[i]}]`;
        if(eval('global.arr'+`${brackets}!== undefined`))
        {
            if(i == count.length-1) {
                if(eval('global.arr'+`${brackets}[abc.length+1]`)) { res = 1 }
                else { res = 0; break; }
            }
        }
        else { res = 0; break; }
    }

    return res ? eval('global.arr' +`${brackets}[abc.length+1]`) : false;
}

  static add(user, msg) {
    let auth = `${user['login']}:${user['password']}`;
    let count = Home.trimByChar(Home.trimByChar(user['brackets'].split('][').toString(), '['), ']').split(',');
    let brackets = '';

    for (let i = 0; i <= count.length-1; i++) {
        brackets += `[${count[i]}]`;
        eval('if(i !== count.length-1) { global.arr'+`${brackets} ? null : arr`+`${brackets} = new Array() } else { arr`+`${brackets} = new Array(); arr`+`${brackets}[abc.length+1] = auth}`);
    }
    return msg.success = "Registration successed!";
}

  static trimByChar(string, character) { const first = [...string].findIndex(char => char !== character); const last = [...string].reverse().findIndex(char => char !== character); return string.substring(first, string.length - last); }

  }

