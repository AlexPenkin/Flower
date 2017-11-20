const PROXY_CONFIG = [
    {
        context: ['/fertilizer', '/fertilizers', '/v1'],
        target: 'http://localhost:9000',
        secure: false
    }
];

module.exports = PROXY_CONFIG;
