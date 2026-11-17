// 앱 설치 조건을 맞추기 위한 최소 서비스워커. 아무것도 저장(캐시)하지 않고 그대로 통과시킴.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
