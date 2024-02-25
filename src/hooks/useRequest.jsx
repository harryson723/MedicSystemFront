import { useEffect, useState } from "react";
import request from "../utils/request";

export default function useRequest(url, options = {}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await request(url, {
                mode: 'cors',
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW50aWFnbyIsImlhdCI6MTcwODgyMjQ4NiwiZXhwIjoxNzA4OTA4ODg2fQ.Ab6g3UjOZ7NGFrStonbWj5WjTqB8to1ys_fGF-QTg_g"
                },
                ...options
            });
            setData(res);
        })();
    }, []);

    return { data, setData };
}