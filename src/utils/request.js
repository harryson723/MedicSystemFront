export default request = async (url, options = {}) => {
  const req = await fetch(url, options);
  const res = await req.json();
  return res;
};
