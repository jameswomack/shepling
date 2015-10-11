const FS = require('fs');

const FILE_PATH_MATCHER = /^(\.\/|\/)/;
const SHEBANG_MATCHER   = /#!\s*([^\s]+)\s*([^\s]+)?/;

function match (regexp, subject) {
  return subject.match(regexp);
}

const matchFilePath = match.bind(null, FILE_PATH_MATCHER);
const matchShebang  = match.bind(null, SHEBANG_MATCHER);

function shepling (subject) {
  var hasShebang;

  if (matchFilePath(subject)) {
    subject = FS.readFileSync(subject, 'utf-8');
  }

  if (subject && (hasShebang = matchShebang(subject))) {
    const _executable = hasShebang[1].split('/').pop();
    const executable = _executable === 'env' ? hasShebang[2] : _executable;

    return {
      name : executable,
      has  : !!hasShebang
    }
  }

  return null;
}

module.exports = shepling;
