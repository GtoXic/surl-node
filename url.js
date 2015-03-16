var request = require("request");

module.exports = {
	shorten: function(token,url,opts,callback){
		var shorturl = opts.shorturl,
			pubstats = opts.pubstats,
			urlpriv	 = opts.urlpriv;
			
		var finalopts = {};
		finalopts.apikey = token;
		finalopts.longURL = url;
		if(shorturl !== undefined) finalopts.shortURL = shorturl;
		if(pubstats !== undefined) finalopts.pubstats = pubstats;
		if(urlpriv !== undefined) finalops.urlpriv = urlpriv;
		request.post({url:"https://api.surl.im/v1/url/shorten",form:finalopts},function(err,resp,body){
			if(!err){
				if(resp.statusCode == 200){
					var out = JSON.parse(body);
					if(out.error == undefined){
						var slug = out.slug;
						callback(undefined,slug);
					}else{
						callback(out.error);
					}
				}else{
					callback("API returned a bad status code");
				}
			}else{
				callback(err);
			}
		});
	}
};