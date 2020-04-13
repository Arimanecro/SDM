const { NodeJS, MyMod } = require("Loader");

NodeJS.autoLoad(["fs"], ['readline'], ['os']);
MyMod.autoLoad(["Password->generate-password"]);

module.exports = class CreateDB {

    static fromTxtToArray(user) {
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
        let brackets = '';
        let indexes = [];
        let [login] = user.split(':');
    
        for (let i = 0; i <= login.length-1; i++) { 
            indexes.push(abc.findIndex(idx => idx == login[i]));
        }
        for (let i = 0; i <= indexes.length-1; i++) {
            brackets += `[${indexes[i]}]`;
            eval('if(i !== indexes.length-1) { global.arr'+`${brackets} ? null : global.arr`+`${brackets} = new Array() } else { global.arr`+`${brackets} = new Array(); global.arr`+`${brackets}[abc.length+1] = user}`);
        }
    }

    static async processLineByLine() {
        const fileStream = NodeJS.fs.createReadStream('./users.txt');
      
        const rl = NodeJS.readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });

        let count = 0;   
        for await (const line of rl) {
            CreateDB.fromTxtToArray(line.toLocaleLowerCase());
            console.log(++count)   
        }
        console.log('Done!')
    }

    static deleteSoon(user){

        let fd;

        try {
        fd = NodeJS.fs.openSync('users.txt', 'a');
        NodeJS.fs.appendFileSync(fd, `${user}:${MyMod.Password.generate({ length: 20, numbers: true }
                                )}${NodeJS.os.EOL}`, 'utf8');
        } catch (err) {
        console.error(err)
        } finally {
        if (fd !== undefined)
        NodeJS.fs.closeSync(fd);
}
     }
}