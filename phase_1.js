// var branch = require('git-branch');

// branch(function(err, str) {
//     if (err) throw err;
//     console.log(str);
//     //=> 'master' 
//   });
var git = require('git-rev-sync');

console.log('short\thash\t'+git.short());
console.log('long\thash\t'+git.long());
console.log('branch\tname\t'+git.branch());