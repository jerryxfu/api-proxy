export default {
    async fetch(request) {
        const target = new URL(request.url);
        target.hostname = "jerryxf-api-558595708184.northamerica-northeast1.run.app";

        const headers = new Headers(request.headers);
        headers.set("Host", target.hostname);

        return fetch(new Request(target.toString(), {
            method: request.method,
            headers,
            body: request.body,
            redirect: "manual",
        }));
    }
};