// import fetch from 'isomorphic-fetch'

function fetchOptions(options) {
  const { method, headers, body } = options || {};

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Encoding": "gzip, compress",
  };
  return {
    method: method || "GET",
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: JSON.stringify(body) || null,
  };
}

async function fetchWrapper(path, options) {
  const optionObj = fetchOptions(options);
  return new Promise((resolve) => {
    fetch(path, optionObj)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => console.log("logged error"));
  });
}

const getDomain = (url) => {
  return (
    url &&
    url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split(/[/?#]/)[0]
  );
};

const timeStampConvertor = (date) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} years`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} month`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes`;
    }
    return `${Math.floor(seconds)} seconds`;
  };

export { fetchWrapper, getDomain, timeStampConvertor };
