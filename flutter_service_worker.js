'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c6d3c03b8fe63333a374bb0de51ad09b",
".git/config": "b99ee0d85b1ebb296fdc311a11d5e7e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "c91db98df26d41bffd8191383c2a983c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ecf1ce17768ba94d58aab052455b47b7",
".git/logs/refs/heads/main": "daaac95aa899841da2eb8f733f5adf5a",
".git/logs/refs/remotes/origin/main": "e4641231f3cc7097e64deecc97853c0b",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/1e380f0e9296305da0211341184450de194ac9": "fbc4d9ba5d057dbb6e80547dcc37b2a5",
".git/objects/0e/165ec515054b0b63aacb1275b9ae821ec56d30": "32225fa24b5a9513a1e36442e9a02c83",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/274c9d2a863a910f5a5c32f4960eb7997ba129": "b81a0c8960d08b4bf961e5d4c79cce41",
".git/objects/25/4f686851aed1da6595a7c9b1543037f6774c92": "867bb0ba382c7f1ca655a9f552907047",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/c28aaa295a10aab0d8b9d2e0a6430ab36e4b3d": "125abfd433350ca50463991268517129",
".git/objects/26/0e4281cfe0aa3188eed8a425d99a9f975a3b0e": "4475f66aded6bda1b67810a31e6ae2c8",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/6b0ce58c2c9275e6df7b18f82b7219e12d4e72": "4322953a252e341780f371c0d84e83cd",
".git/objects/4e/700fe092412d90cf989b25849220e562ec1208": "df7cc873da4d2e5d905728ccf3300c9c",
".git/objects/51/3b780ff742b7c468d2fc82992b376e9bb9599c": "8da2e58234b1cee7f53470f9efa21bd0",
".git/objects/5f/4158647cf312e6f8b042f9090ad85553e57aff": "85bdce0d7ddf005d17c463414416ad6a",
".git/objects/61/484cfabcb0230e725748cd41dde387d9632a7f": "b2d12b68a8bf4f14a7a146e8016ae1f7",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/108ae1d036a144cc571cd04f191af9cb3c9334": "f8e0f06ec2f5d011a2229ee3f3c553c9",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/82/3e538b738255242f92233adcc9b1001c8beb4c": "370db1ec6f99df68601a4e0a9b862056",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b7eb84792c48169faa8a3ee05ea7a32479b79e": "93a0afb40836f1575c5f9f22b3a7f95d",
".git/objects/8a/6b4d5c6fb28eb39f590ba49d38578d12449a04": "4d6f73add1f331e57f55bfd7893f1601",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/91/1b5a63d1eda52a3e144125f8b041cf78585113": "6cd98a826af883cf2f343a9435c53887",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9f/780d0dc0f37f1afb67559d62cdcf2b81461d27": "ec23844d2a07c876569980fb17f6ccdb",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cec86c2eaf9a3963826ec66ef003c214679245": "b75f04c20efcd642cce4a4cd0d1a6fc0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/367eef5e586f621981babec2637dd54d465be0": "a434e5466b0877e77e2d22cf36a49fb3",
".git/objects/be/53ac5f465d557317d91e5a0d3089a1d3eb3e61": "974a26cc152953469b18ccea7eb43c40",
".git/objects/c2/d6063c481fc2bf1a971289544fdeee37bd7602": "f021327a291064f2e1d8326f5469cc16",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/ca5891299bb774fa3ea1009177dd1f8db42053": "21b2b87c6cdb82aec933287479a2c837",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cc/932c165bdd021261d863a25cece04bacd5e23d": "3385bedc256b6f68fe9ff6cc62998fe5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/30d2b7848fce02b2ce521667a4b39d3d55a222": "e9243108afec61145beb249d21c4db01",
".git/objects/e6/02dd36311a6eef04ae8ba4d7f6433250e49642": "864dcd4e4948b6af6c136ceb16702011",
".git/objects/e8/5b3dddd00e4e2f2cdb1728bb6b9c7cec89dcf0": "f9d29dfbda5a721fb5c110c7150665ab",
".git/objects/e9/de9b532749f177181480a092d8f953f2fbd123": "959f96a87bd6cd2b3c488babcc0d80be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/b45d23f3102b015d6d411f0e16ae867dd16da2": "d467d244b030c118660cc8b192ceeeca",
".git/refs/heads/main": "466e22da34a01b8f0d1f564e9cb83c46",
".git/refs/remotes/origin/main": "466e22da34a01b8f0d1f564e9cb83c46",
"assets/AssetManifest.bin": "67797d357e2f465fd4da0af823f0c931",
"assets/AssetManifest.bin.json": "e596b23607987ecf88e8807266288a44",
"assets/AssetManifest.json": "06e900e6bfa813ec555fc754d5861a02",
"assets/assets/about.png": "2429bca41b20b8cf3c0962ef58e50115",
"assets/assets/arrow-pointer.png": "ea801f07ea601d5020a5cc5ed4f12d37",
"assets/assets/contact.png": "c29de5d1c5e2f6317e8c154f4d6906fb",
"assets/assets/edu.png": "ae878659316b69f9d17afd230fdc0dec",
"assets/assets/favicon.png": "af00652a1e8321f4ba5cd84f7eb55933",
"assets/assets/female.png": "fd7a576d7ce0cd4b0aee4f4238d387c2",
"assets/assets/linked_Image.jpg": "5bd3c8d0cc900bdbfedfea224658d71e",
"assets/assets/loader.gif": "ef5e1963e647bc5f7e4d4ee7d5aa729d",
"assets/assets/male.png": "dbee76849abe9f719224648c182120f8",
"assets/assets/project-head.png": "944da7b26a635fbb381e814545ff7e90",
"assets/assets/project.png": "e63cab78d4a7dd5365e45731a1cbbfea",
"assets/assets/skill.png": "d6450d5136f8d4bde59d187eb527576b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cb50efb8b64de8bf086833099f951184",
"assets/NOTICES": "eb1c10b1cb8ea8684f3a003f1f48326f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "10a5005af0ba5ea4230255b16a0386cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "05335f70fbf852e925b8104c5e13074c",
"/": "05335f70fbf852e925b8104c5e13074c",
"main.dart.js": "4445f882e1c9f149011cbc52b865be9f",
"manifest.json": "c937affd2cdd9ad4cbb85a54b2f1cb50",
"version.json": "b6fdc639e2b230ffc205be445cb71b01"};
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
