export default async function useGetData(value) {
    const res = await request(urls.user.findByDocumentNumber + value, {
        mode: 'cors',
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW50aWFnbyIsImlhdCI6MTcwODgyMjQ4NiwiZXhwIjoxNzA4OTA4ODg2fQ.Ab6g3UjOZ7NGFrStonbWj5WjTqB8to1ys_fGF-QTg_g"
        }
    });
    return res;
}