const corsProxy = require("cors-anywhere");

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy
	.createServer({
		originWhitelist: ["http://localhost:3000", "https://api.twitter.com/2/tweets/search/recent"],
		requireHeader: [
			"origin",
			"x-requested-with",
			{
				Authorization: 'OAuth oauth_consumer_key="yoioBYllFiL5GpGelbK2RDSrm",oauth_token="69931513-ZlF6fnNTlFO1FXvEbR2Z9qhXoSVYfIOGBuwF0v8We",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1621438833",oauth_nonce="pdTCfh4qChb",oauth_version="1.0",oauth_signature="blONvIiYdk5e%2FnXGnrTqsjiMvpA%3D"',
				Cookie: 'guest_id=v1%3A162142193466870142; personalization_id="v1_8pNsppXnO518XD1sdJB8TQ=="; lang=en',
			},
		],
		removeHeaders: ["cookie", "cookie2"],
	})
	.listen(port, host, () => {
		console.log("Running CORS Anywhere on " + host + ":" + port);
	});
