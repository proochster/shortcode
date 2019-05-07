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
    "url": "404.html",
    "revision": "9a91b1e7f25a92a5fb819d472eb53f84"
  },
  {
    "url": "cli-cheatsheet.html",
    "revision": "830d1c27441fe8a770ccad6d42760e0d"
  },
  {
    "url": "css-cheatsheet.html",
    "revision": "668ec95b2b69bf9cb9dcf81a36122139"
  },
  {
    "url": "feed.xml",
    "revision": "ff6a49912e5afb812c75b381e128837c"
  },
  {
    "url": "git-cheatsheet.html",
    "revision": "e2e1d62c65d7ae8f5e8457647e97bcc6"
  },
  {
    "url": "google2859ef64d60032ee.html",
    "revision": "b6fa8c19f67c174f44e1196cfcf1ef9a"
  },
  {
    "url": "html-cheatsheet.html",
    "revision": "22167fff6e55c0d581bc592bb700bc16"
  },
  {
    "url": "index.html",
    "revision": "d10b51496d1af8e79959d2476b70683d"
  },
  {
    "url": "javascript-cheatsheet.html",
    "revision": "3f0069b457d73e82304ff757c2dcf597"
  },
  {
    "url": "liquid-cheatsheet.html",
    "revision": "0dde6ba8407573e818ba298878420987"
  },
  {
    "url": "main.js",
    "revision": "94ff1e4adf1a32b99b34bd2d2edd70ab"
  },
  {
    "url": "markdown-cheatsheet.html",
    "revision": "150697af6723bec2d0eab106892a29bf"
  },
  {
    "url": "node-cheatsheet.html",
    "revision": "ec270f007c442d9d36c3a1ec24a1399a"
  },
  {
    "url": "Readme.md",
    "revision": "76066ef92d4aac83130dca73361f329b"
  },
  {
    "url": "sitemap.html",
    "revision": "3fe1d399f329524cff928ce6ff1eb39e"
  },
  {
    "url": "sitemap.xml",
    "revision": "b68fd8475df275a992908e5fe5805341"
  },
  {
    "url": "vue-cheatsheet.html",
    "revision": "b677dc7b3cf1a132acf9f95241cb2d20"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
