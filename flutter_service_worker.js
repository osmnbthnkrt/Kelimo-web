'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27c953aeb21cb816919b0fc1ea59545b",
".git/config": "ab693275fd4b80f7401478befcede486",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5fcd35c4af2347d9438476c62be93a2c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f287a8299ddcd8572406be6d442701d",
".git/logs/refs/heads/gh-pages": "5f287a8299ddcd8572406be6d442701d",
".git/logs/refs/remotes/origin/gh-pages": "4cb9c31c66b3a015bc067358fe06efce",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0f/1bcfd1a70330a289a4beec117fa56204f2ad33": "e14172475a1d52b8fec5178b630f5529",
".git/objects/12/b60bcf5bf1a621577a6f93cb366d3a19c2587f": "922bc537d0a1c02910206f5f6d7322d7",
".git/objects/12/e6bd064309addfcb573815b285546726cb1ba0": "2da27ee4beac8e8e7ffb4d7a31b6aeb3",
".git/objects/1d/a0016e6a8dfe52dc441c3b9c504cc85e2bfd2b": "03adb2ea9ee73e72397f797b519dada8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/cd149565a8fb106669468809df94157fb1363b": "8be63447102083796940869aadcda83e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/3a/a8dc7d97ac5f4398930fbeec3a989369efbd1f": "35382929e53e2111128885b9b562adc4",
".git/objects/3e/9e486e765d247fbf7c9cd4893c605c31c5097c": "3d11f452ab8d824659988a0a302e733d",
".git/objects/41/a350bca211339e2623df22268b8892530ab791": "dde1191de0fd8a595920ecffbc99d448",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5a/9c79dbf262d52ef02946413286061d0f01a1a1": "e524a39ae83c758fe851ccc5e4f2bfb7",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/ae3ca06661e4886355bca3010fa77d01d1f461": "a1c2302f02ec4ec2831b8d6353bc7029",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/9df793ffa998d04c1f4aa3627547cbbdad9dd7": "f8fd9280bea00ac718fd85c43747a3f9",
".git/objects/70/a26a25731eae3afaf527a85d8e6ad6c0ad8269": "82a8e2f3417feb7a72cd4860e4f9b7c9",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/0e0f87977fca4f7bd0681a8866bf883b4b6c66": "bd66505ddd3734e658c6f4a44bee88d2",
".git/objects/79/c26beab31f33fb737b8f53ebce2692abac13b3": "2355f8ee5d8049ac13e36f885e1fdd5f",
".git/objects/7b/90fe37a735a0aeffa498b81c067671b6bc23e6": "b323d725fb753fca4ebb62c5db4c9b69",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "1791f1835b43b32100c49d09db6dbb03",
".git/objects/81/25362b7dd154318f148a4b5371779b0aa28c01": "709044c2e63d6063e210601b0d13a7b1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/80a7a6f9f0bd43593a3ba279e9a09617988c64": "07357e9ef2f282b4c93c7e284487075f",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/7d98d22dd9c8a96569ec77668226a227b6a160": "584e6c21796629a61599c7aad95740b2",
".git/objects/9b/73c8f54c9b2bd74ef8fb9e71ff3f4c922907b4": "56e9e550828f55528c45075241dc8213",
".git/objects/a2/fcdce369abfcf23145898ef042c2cd8f597d3c": "038b9eedc20f3b1930c642d67ad380dc",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/f83ad54ba2f287052f041191be8e0f7eaec696": "08878e2de4767fe0230eba4f4978eaeb",
".git/objects/b1/550038d1553e36677a9c01d5791f53ccd879c9": "fd7dda1e03c2f6db2757b803fec7ab09",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/f8adc62fde5affb5bfdc41a67fd500336b297a": "63332999589ef0ccb9dabefd5caa3cc6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/9e6eb811d15da7be861ec85f50b41e7ab9b25c": "6ffc7bf3fecd0c7ba18ef88d608d3309",
".git/objects/c0/72aa682ff009821f7a069bf27e27ab0da11e55": "2aa69fb397e71f95cb81d31b499ad5a3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/d2920f22b899e3f8cb557f53b06ffaeee90398": "b791f48cd413bd186fa70ac5f42dafa4",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/5c9d22fe9e315d54d0966751ba395acaa78122": "8d06f8a9213c0614c9385658152ba508",
".git/objects/db/c7b52295217b8127476a9cf6c2852f67ebd453": "eeb086e80c73e7d92bd484a36cfa8458",
".git/objects/dc/5c14a70a6bb82b9b5d250e032a075302e263b1": "4e1f1717ea7c6f353cac2d1b70ceacaf",
".git/objects/de/b066a79d13aaab22e82a6f17b99d87cafc5716": "46afc6a391b2377dec6b29ec685b166c",
".git/objects/e4/184c3b56bad72f0fd3ff4a4138fe2b5b99af8f": "37c168c668af2571022d720abea6a030",
".git/objects/e9/56ad95fbfc744a0b803d2c5c68820cfdc112c6": "ad8a3f6772409889548280d5540e8575",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/d4f3f10f996350f9e875a9c55330712b9a7f26": "8d8052381ba0ae0d7cd6f8193ad8f59f",
".git/refs/heads/gh-pages": "44a69a11087a005a78cb08ec1541710b",
".git/refs/remotes/origin/gh-pages": "44a69a11087a005a78cb08ec1541710b",
"assets/AssetManifest.bin": "1f2edcfe4fcc5bbaaa95e7f7d0dcef90",
"assets/AssetManifest.bin.json": "6e8c8d92617bb9cbfbbdf524a8fa4dc6",
"assets/AssetManifest.json": "06ee2f2f7faef8134bd4e9293e9da250",
"assets/assets/words4.txt": "1faf95a7535c38ca2b97876be74a55dd",
"assets/assets/words5.txt": "f12ade41f3a680929a82369e2225de92",
"assets/assets/words6.txt": "8baff75a451672ff8fe1ecf110d70ad0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ce29198ef24c5df7336133b6d2f775f",
"assets/NOTICES": "d2baceffae16841e5bb873543f15fa25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "bb1c3e867084c5e343a436638ac79c1a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47b2211192517c4505fb9f603713d9bf",
"/": "47b2211192517c4505fb9f603713d9bf",
"main.dart.js": "7945e7bcd6a7bce239813945b8a62e31",
"manifest.json": "4bb81f9171ab06de7cd8b98fbc4bd844",
"splash/img/dark-1x.png": "7a1f762adc8cf7d79f6de1abcf21f0ef",
"splash/img/dark-2x.png": "6db03b1986d4fb596e80115e6ab1225c",
"splash/img/dark-3x.png": "0ab8377c2749af6e96b0f11fcb6ed1b9",
"splash/img/dark-4x.png": "6c732f88f2f1980cbf299f6acfe03ed8",
"splash/img/light-1x.png": "7a1f762adc8cf7d79f6de1abcf21f0ef",
"splash/img/light-2x.png": "6db03b1986d4fb596e80115e6ab1225c",
"splash/img/light-3x.png": "0ab8377c2749af6e96b0f11fcb6ed1b9",
"splash/img/light-4x.png": "6c732f88f2f1980cbf299f6acfe03ed8",
"version.json": "f9bbfd42c49eabd3c79e24de51579181"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
