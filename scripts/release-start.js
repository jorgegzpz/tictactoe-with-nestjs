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

// Creates the release branch
exec("git checkout -b release/" + version, cb);

exec("git push", cb);
