var git = require('git-rev-sync');

console.log('short\thash\t'+git.short());
console.log('long\thash\t'+git.long());
console.log('branch\tname\t'+git.branch());

// var branch = require('git-branch');

// branch(function(err, str) {
//     if (err) throw err;
//     console.log(str);
//   });

var git_proc = require('child_proccess');
git_proc.exec('git rev-parse HEAD', function(err, stdout) {
    console.log('Last commit hash on this branch is:', stdout);
});
