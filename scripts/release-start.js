const version = require("../package.json").version;
const { exec } = require('child_process');

const cb = (err, stdout, stderr) => {
    if (err) {
        return;
    }
};

// Initialize gitflow
exec("git flow init -f -d", cb);

// Ensure you are on latest develop & master
exec("git checkout develop", cb);
exec("git pull origin develop", cb);
exec("git checkout -", cb);

exec("git checkout master", cb);
exec("git pull origin master", cb);
exec("git checkout develop", cb);

// Removes the release branch
exec("git branch -d release/" + version, cb);

exec("git push", cb);