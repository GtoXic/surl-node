var url = require("./url");
var paste = require("./paste");
var request = require("request");

var token = "";

module.exports = {
	token: "",
	authenticate: function(username,password,callback){
		var _self = this;
		request.post({url:"https://api.surl.im/v1/auth",form:{username:username,password:password}},function(err,resp,body){
			if(!err){
				if(resp.statusCode == 200){
					var out = JSON.parse(body);
					if(out.error == undefined){
						_self.token = out.token;
						callback();
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
	},
	url: function(longurl,opts,callback){
		url.shorten(this.token,longurl,opts,callback);
	},
	paste: function(text,opts,callback){
		paste.create(this.token,text,opts,callback);
	}
};
