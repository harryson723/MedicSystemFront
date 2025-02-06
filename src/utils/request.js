const request = async (url, options = {}) => {
  try {
    const req = await fetch(url, {
      mode: 'cors',
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
