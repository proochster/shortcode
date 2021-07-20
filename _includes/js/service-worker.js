/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon-144x144.png",
    "revision": "fb2cad437741e1136cbfd0a902147aa1"
  },
  {
    "url": "assets/icon-16x16.png",
    "revision": "2a4d763e3ec289c1167d9244ac9a4057"
  },
  {
    "url": "assets/icon-32x32.png",
    "revision": "6ecf539aab1606eb08a3ed7f6b71ec54"
  },
  {
    "url": "assets/icon-512x512.png",
    "revision": "a96453da12f6bec0e0bc6e4308e5168e"
  },
  {
    "url": "assets/icon-64x64.png",
    "revision": "344744435451c4f9dcd1265f47a8563d"
  },
  {
    "url": "favicon.png",
    "revision": "17e04db89dcff9516a446038e754eac3"
  },
  {
    "url": "main.js",
    "revision": "1b5eea5150f30b5d88872eca3f79e3cf"
  },
  {
    "url": "manifest.json",
    "revision": "3cf60371f4fc3e780d464e27be71280e"
  },
  {
    "url": "Readme.md",
    "revision": "35737a9f69736ddc09c48a746ae94141"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
