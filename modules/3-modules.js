//Modules
const names = require('./3-names');
//we can also destructure names object
const {vidhant,john} = require('./3-names');
const sayHi =require('./3-utils');

require('./4-mindgrenade');                                                                                                                                         

console.log(names)



sayHi('Danny');
sayHi(names.vidhant);
sayHi(names.john);
sayHi(vidhant);

const data = require('./4-alternative-Exports')
data.myfunc()

