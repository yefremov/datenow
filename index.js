
/**
 * Expose `datenow`.
 */

module.exports = typeof Date.now === 'function'
  ? function datenow() {
    return Date.now();
  }
  : function datenow() {
    return (new Date()).getTime();
  };
