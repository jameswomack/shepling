const MATCHER = /#!\s*([^\s]+)\s*([^\s]+)?/;

function match (subject) {
  return subject.match(MATCHER)
}

function shepling (subject) {
  var matched;

  if (subject && (matched = match(subject))) {
    const _executable = matched[1].split('/').pop();
    const executable = _executable === 'env' ? matched[2] : _executable;

    return {
      name : executable,
      has  : !!matched
    }
  }

  return null;
}

module.exports = shepling;
