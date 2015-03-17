# surl-node
NodeJS client for SURL services

## Installation
Simply run `npm install surl-node` and then include it in your scripts using ```var surl = require("surl-node");```.

## Getting Started
After installing surl-node and adding the module to your script, you can authenticate with 
    
    surl.authenticate("username","password",function(err){
        //Do what you need to here
    });
    
and then shorten a URL with

    surl.url("http://google.com/",{shorturl:"google",pubstats:false,privurl:true},function(err,slug){
        //Once again, do what you need to here
    });

## Methods

### surl.authenticate(username,password,callback)
Authenticates you with the SURL API using your username and password. The callback returns an error if an issue occurred when authenticating.

### surl.url(longurl,options,callback)
Converts the URL provided to a shortened URL and fires the callback. The callback is in the format of `err,slug`. Available options are:
* `shorturl` - defines the slug to be used. If this is not set, a random slug will be generated
* `pubstats` - determines whether statistics for your shortened URL should be publicly accessible (set to false by default)
* `urlpriv` - determines whether the URL should be displayed on statistic pages, etc. (set to false by default)

### surl.paste(text,options,callback)
Uploads the given text to SmallPaste and fires the callback. The callback is in the format of `err,id`. Available options are:
* `title` - defines the title of the paste
* `private` - determines whether the paste should be visible to the public or only people who you provide the URL to (set to true by default)
* `syntax_highlighting` - determines whether the paste should be highlighted (set to true by default)