var request = require("request");

module.exports = {
	create: function(token,text,opts,callback){
		var title 				 = opts.title,
			priv				 = opts.private,
			syntax_highlighting	 = opts.syntax_highlighting;
			
		var finalopts = {};
		finalopts.apikey = token;
		finalopts.code = text;
		if(title !== undefined) finalopts.title = title;
		if(priv !== undefined) finalopts.private = priv;
		if(syntax_highlighting !== undefined) finalopts.syntax_highlighting = syntax_highlighting;
		request.post({url:"https://api.surl.im/v1/paste/create",form:finalopts},function(err,resp,body){
			if(!err){
				if(resp.statusCode == 200){
					var out = JSON.parse(body);
					if(out.error == undefined){
						var id = out.id;
						callback(undefined,id);
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