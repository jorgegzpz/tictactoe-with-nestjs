const version = require("../package.json").version;
const branchName = "release/" + version;
const { exec } = require('child_process');
let branch;

const cb = (err, stdout, stderr) => {
    if (err) {
        return;
    }
};

const getBranch = (err, stdout, stderr) => {
    branch = stdout;
    if (err) {
        return;
    }

    if (branch !== branchName) {
        console.error("Release can be finished only on release branch!")
        return 1;
    }

    // Initialize gitflow
    exec("git flow init -f -d", cb);

    // Ensure you are on latest develop  & master and return back
    exec("git checkout develop", cb);
    exec("git pull origin develop", cb);
    exec("git checkout -", cb);

    exec("git checkout master", cb);
    exec("git pull origin master", cb);
    exec("git checkout -", cb);

    exec("git checkout develop", cb);
    exec("git merge " + branchName, cb);
    exec("git checkout master", cb);
    exec("git merge " + branchName, cb);
    exec("git branch -d " + branchName, cb);
    exec("git tag -a v" + version + " -m 'Release " + version + "'", cb);

    exec("git push origin develop && git push origin master --tags", cb);
};

exec("git rev-parse --abbrev-ref HEAD", getBranch);

