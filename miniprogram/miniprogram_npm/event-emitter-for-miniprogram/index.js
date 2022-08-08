module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1657335106804, function(require, module, exports) {
/* eslint-disable */
/**
 * Modified from https://www.npmjs.com/package/event-emitter, adapted for wechat miniprogram
 */
var defineProperty = Object.defineProperty;
var create = Object.create;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var descriptor = { configurable: true, enumerable: false, writable: true };
var namespace = '__ee__';

function callable(fn) {
  if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
  return fn;
}

function arrayClone(arr) {
  var len = arr.length;
	var copy = new Array(len);
  for (var i = 0; i < len; ++i) {
		copy[i] = arr[i];
	}
  return copy;
}

function EventEmitter() {}

EventEmitter.prototype.on = function (type, listener) {
  var data;

  callable(listener);

  if (!hasOwnProperty.call(this, namespace)) {
    data = descriptor.value = create(null);
    defineProperty(this, namespace, descriptor);
    descriptor.value = null;
  } else {
    data = this[namespace];
  }
  if (!data[type]) data[type] = [listener];
  else data[type].push(listener);

  return this;
}

EventEmitter.prototype.once = function (type, listener) {
  var self = this;

  callable(listener);

  var once = function once() {
    self.off(type, once);
    listener.apply(self, arguments);
  };
  once.__eeOnceListener__ = listener;

  this.on(type, once);
  return this;
}

EventEmitter.prototype.off = function (type, listener) {
  if (!hasOwnProperty.call(this, namespace)) return this;

  var data = this[namespace];

  if (!data[type]) return this;

  if (!listener) {
    data[type].length = 0;
  } else {
    var listeners = data[type] || [];

    for (var i = 0; i < listeners.length; i++) {
      if (listeners[i] === listener || listeners[i].__eeOnceListener__ === listener) {
        listeners.splice(i, 1);
        break;
      }
    }
  }

  return this;
}

EventEmitter.prototype.emit = function () {
  var args = Array.prototype.slice.call(arguments);
  var type = args.splice(0, 1);

  if (!hasOwnProperty.call(this, namespace)) return;
  var listeners = this[namespace][type];
  if (!listeners || !listeners.length) return;

  listeners = arrayClone(listeners);
  var self = this;

  return Promise.all(listeners.map(function (listener) {
    return listener.apply(self, args);
  }));
}

module.exports = EventEmitter;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1657335106804);
})()
//# sourceMappingURL=index.js.map