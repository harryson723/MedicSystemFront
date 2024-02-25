const request = async (url, options = {}) => {
  try {
    const req = await fetch(url, {
      mode: 'cors',
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW50aWFnbyIsImlhdCI6MTcwODgyMjQ4NiwiZXhwIjoxNzA4OTA4ODg2fQ.Ab6g3UjOZ7NGFrStonbWj5WjTqB8to1ys_fGF-QTg_g"
      },
      ...options
    });
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
};

export default request;
