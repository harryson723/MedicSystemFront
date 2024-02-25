const baseURL = 'http://localhost:8080/v1/api/';

const urls = {
    user: {
        provider: baseURL + "user/provider",
        client: baseURL + "user/client",
        create: baseURL + "user/",
        findByDocumentNumber: baseURL + "user/documentNumber/",
    },
    services: {
        get: baseURL + "service/"
    },
    suscription: {
        get: baseURL + "suscription/"
    }
};

export default urls;