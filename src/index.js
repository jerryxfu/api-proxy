export default {
    async fetch(request) {
        const url = new URL(request.url);
        const target = new URL(request.url);
        target.hostname = "jerryxf-api-558595708184.northamerica-northeast1.run.app";

        const newRequest = new Request(target.toString(), {
            method: request.method,
            headers: request.headers,
            body: request.body,
            redirect: "follow",
        });

        // Google Cloud Run needs the correct Host header
        newRequest.headers.set("Host", target.hostname);

        return fetch(newRequest);
    }
};