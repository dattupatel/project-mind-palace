const Glob = require('glob');

const getFilesAndFolders = (src) => {
    // glob(src + '/**/*', callback)
    // const mg = new Glob(src + '/**/*', {})
    // mg.on('end', (res, e) => {
    //     console.log(res, e)
    // })
    return Glob.sync(src + '/**/*');
};

module.exports = {
    getFilesAndFolders: getFilesAndFolders,
};
