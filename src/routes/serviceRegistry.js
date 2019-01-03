'use strict';

class ServiceRegistry {
  constructor() {
    this._services = [];
    this.timeout = 3600;
  }

  add(intent, ip, port) {
    const key = intent + ip + port;

    if (!this._services[key]) {
      this._services[key] = {};
      this._services[key].timestamp = Math.floor(new Date() / 1000);
      this._services[key].ip = ip;
      this._services[key].port = port;
      this._services[key].intent = intent;
      // console.log(`add service for intent ${intent} on ip ${ip}:${port}`);
      return;
    }
    this._services[key].timestamp = Math.floor(new Date() / 1000);
    // console.log(`update service for intent ${intent} on ip ${ip}:${port}`);
  }
  remove(intent, ip, port) {
    const key = intent + ip + port;
    delete this._services[key];
  }
  get(intent) {
    for (const key in this._services) {
      if (this._services[key].intent == intent) {
        return this._services[key];
      }
      return null;
    }
  }
}
module.exports = ServiceRegistry;
