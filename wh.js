const url = 'http://192.168.1.18:8888/cookie/update';
const requestUrl = $request.url;
console.log('Intercepted URL:', requestUrl);
const headers = $request.headers;

// 提取 x-passthrough-token 和 x-token
const passthroughToken = headers['x-passthrough-token'];
const token = headers['x-token'];


console.log(passthroughToken);

if (passthroughToken && token) {
  const data = {
    'x-passthrough-token': passthroughToken,
    'x-token': token
  };

  const options = {
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    method: 'POST'
  };

  // 发送 POST 请求到指定的 URL
  $httpClient.post(options, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Response:', response.status);
      console.log('Body:', body);
    }
  });
} else {
  console.log('Missing x-passthrough-token or x-token in headers');
}

$done({});
