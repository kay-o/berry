let hook;

module.exports = () => {
  if (typeof hook === `undefined`)
    hook = require('zlib').brotliDecompressSync(Buffer.from('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', 'base64')).toString();

  return hook;
};
