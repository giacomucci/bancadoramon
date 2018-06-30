var $jQ = jQuery.noConflict();

$jQ(document).ready(function(){	

	var isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
	if (isiPhone == true){
		$jQ('.targetarea').append('<div class="nozoom"></div>');
	}
	
	//Homepage
	$jQ('#featured-products').jcarousel({
        horizontal: true,
        scroll: 1,
		itemFallbackDimension: 300,
    });
		
	$jQ('.categories-slide .products-slide').jcarousel({
        scroll: 1,
		wrap: 'circular'
    });
	
	//Category List
	$jQ('.products-grid li').hover(function(e){
		e.preventDefault();
		$jQ(this).find('.catalog-image a').toggleClass('hover');
		$jQ(this).toggleClass('hover');
		$jQ(this).find('.product-info').fadeToggle(100);
	});

	$jQ('.products-grid li').each(function() {
		var view = $jQ(this).find('.product-actions');
		$jQ('.catalog-image', this).hover(function() {
			view.stop().css('display','block').animate({
				opacity: 1
			}, 200);
		}, function() {
			view.stop().animate({
				opacity: 0
			}, 200, function() {
				$jQ(this).css('display','none');
			});
		});
		view.hide();
	});
	
	// Tooltip
	$jQ('.link-wishlist, .link-compare, .efriend a').mouseenter(function(){
        $jQ(this).next('.tip').fadeIn('fast');
    }).mouseleave(function(){
        $jQ(this).next('.tip').fadeOut('fast');
    });
	
	$jQ('#multizoom1').addimagezoom({ // multi-zoom: options same as for previous Featured Image Zoomer's addimagezoom unless noted as '- new'
		speed: 1500, // duration of fade in for new zoomable images (in milliseconds, optional) - new
		descpos: true, // if set to true - description position follows image position at a set distance, defaults to false (optional) - new
		imagevertcenter: true, // zoomable image centers vertically in its container (optional) - new
		magvertcenter: true, // magnified area centers vertically in relation to the zoomable image (optional) - new
		zoomrange: [3, 10],
		magnifiersize: [250,250],
		magnifierpos: 'right',
		cursorshadecolor: '#fdffd5',
		cursorshade: true //<-- No comma after last option!
	});
	
	$jQ(".clickMobile").click(function() {
		$jQ(".mob-top-links .links").slideToggle();
		$jQ(this).toggleClass('active');
		$jQ("#search_mini_form").hide();
		$jQ('.clickSearch').removeClass('active');
	}); 
	
	$jQ(".clickSearch").click(function() {
		$jQ("#search_mini_form").slideToggle();
		$jQ(this).toggleClass('active');
		$jQ(".mob-top-links .links").hide();
		$jQ('.clickMobile').removeClass('active');
	}); 
	
	//Top Cart
	/*$jQ('.cart-top-container').mouseenter(function(){
		$jQ(this).find('.details-cart').slideDown(100);
		$jQ(this).addClass('active');
	}).mouseleave(function(){
		$jQ(this).find('.details-cart').slideUp(100);
		$jQ(this).removeClass('active');
	});*/
	

	$jQ('#narrow-by-list dt').click(function(){
		$jQ(this).toggleClass('active');
		$jQ(this).next('dd').slideToggle('medium');
	});
	
	$jQ('#narrow-by-list dt:contains("Color")').next('dd').find('.colour').css('display','block');
	
	$jQ('.add-to-links').after($jQ('.efriend.options'));
	
	//Mini Login
	$jQ('.top-login').mouseenter(function(){
		$jQ('.top-login .mini-login').slideDown(100);
		$jQ(this).addClass('active');
	}).mouseleave(function(){
		$jQ('.top-login .mini-login').slideUp(100);
		$jQ(this).removeClass('active');
	});
	
	//My Account
	$jQ('.account-create .fieldset:last').css('margin-right','0');
	
	//Vertical Navigation
	$jQ(".category span").click(function() {
		var open = $jQ(this).parent('.category').attr('lang');
		$jQ(".subcategory_" + open).slideToggle('medium');
		$jQ(".subcategory_" + open).parent().prev().toggleClass('openn');
	}); 
	
	$jQ("#left-nav li.category, #left-nav li.cate").mouseenter(function() {
		$jQ(this).addClass('over');
	}).mouseleave(function() {
		$jQ(this).removeClass('over');
	}); 
	
	$jQ('.block-account a:contains("My Wishlist")').addClass('wishlist-link');
	$jQ('.block-account a:contains("My Orders")').addClass('orders-link');
	
	
	$jQ('#left-nav .cate.active').parents('#left-nav').find('.category.active a').css({'background': 'none repeat scroll 0 -2px transparent', 'color': '#999999'});
	$jQ('#left-nav .cat.active').parents('#left-nav').find('.category.active a').css({'background': 'none repeat scroll 0 -2px transparent', 'color': '#999999'})
	$jQ('#left-nav .cat.active').parents('#left-nav').find('.cate.active a').css({'background': 'none repeat scroll 0 -2px transparent', 'color': '#666666'})
	
	//$jQ('.more-views  a').lightBox();
	
	var select = $jQ('.store-switch li.selected').html();
	$jQ('.selectSwitch').append(select);
	$jQ(".store-switch").mouseenter(function() {
		$jQ('.currency-selector .options').hide();
		$jQ(this).next('.currency-selector .options').hide();
		$jQ('.selectSwitch').html('');
		var select = $jQ('.store-switch li.selected').html();
		$jQ('.selectSwitch').append(select);
		$jQ('.ulSelect').slideDown(100);
		$jQ(this).addClass('active');
	}).mouseleave(function() {
		$jQ('.ulSelect').slideUp(100);
		$jQ(this).removeClass('active');
	});  
	
	var select = $jQ('.currency-switch li.selected').html();
	$jQ('.selectSwitch2').append(select);
		$jQ(".currency-switch").mouseenter(function() {
		$jQ('.selectSwitch2').html('');
		var select = $jQ('.currency-switch li.selected').html();
		$jQ('.selectSwitch2').append(select);
		$jQ('.ulSelect2').slideDown(100);
		$jQ(this).addClass('active');
	}).mouseleave(function() {
		$jQ('.ulSelect2').slideUp(100);
		$jQ(this).removeClass('active');
	});	
	


	$jQ("ul#nav li").find('ul').append('<span class="arrow"></span>');

});

// Twitter
(function(a){function u(a){var c='<li><div class="tweet">';return c+='<div class="vcard"><a href="http://twitter.com/'+a.user.screen_name+'" class="url"><img style="height: 48px; width: 48px;" alt="'+a.user.name+'" class="photo fn" height="48" src="'+a.user.profile_image_url+'" width="48" /></a></div>',c+='<div class="hentry"><strong><a href="http://twitter.com/',c+=a.user.screen_name+'" ',c+='title="'+a.user.name+'">'+a.user.screen_name+"</a></strong> ",c+='<span class="entry-content">',c+=b.ify.clean(b.expandLinks(a)),c+='</span> <span class="meta entry-meta"><a href="http://twitter.com/'+a.user.screen_name,c+="/status/"+a.id_str+'" class="entry-date" rel="bookmark"><span class="published" title="',c+=b.time.datetime(a.created_at)+'">'+b.time.relative(a.created_at)+"</span></a>",a.source&&(c+=" <span>from "+a.source+"</span>"),a.retweetedby&&(c+=" <span>retweeted by "+a.retweetedby.screen_name+"</span>"),c+="</span></div></div></li>",c}function v(a){var c=g.getElementById(b+a);c&&h.removeChild(g.getElementById(b+a)),delete j[b+a],f[b+a]=o;try{delete f[b+a]}catch(d){}}function w(a,c,d){var i=g.createElement("script"),k=null;c==o&&(c={}),e++,j["twitterlib"+e]=!0,f["twitterlib"+e]=function(a,c){return function(e){var f=0,g=[];if(e.results){e=e.results,f=e.length;while(f--)e[f].user={id:e[f].from_user_id,screen_name:e[f].from_user,profile_image_url:e[f].profile_image_url},e[f].source=b.ify.entities(e[f].source),g=e[f].created_at.split(" "),e[f].created_at=[g[0],g[2],g[1],g[4],g[5],g[3]].join(" ").replace(/,/,"")}else if(e.length&&e[0].sender){f=e.length;while(f--)e[f].user=e[f].sender,e[f].originalText=e[f].text,e[f].text="@"+e[f].recipient_screen_name+" "+e[f].text}else if(c.rts==1||c.rts=="t"||c.rts==1){f=e.length;while(f--)e[f].retweeted_status&&(e[f].retweeted_status.retweetedby=e[f].user,e[f]=e[f].retweeted_status)}c.originalTweets=e,c.filter&&(e=t.matchTweets(e,c.filter)),c.limit&&c.limit<e.length&&(e=e.splice(0,c.limit));if(p&&c.page>1)try{sessionStorage.setItem("twitterlib.page"+c.page+".tweets",JSON.stringify(e)),sessionStorage.setItem("twitterlib.page"+c.page+".originalTweets",JSON.stringify(c.originalTweets)),sessionStorage.setItem("twitterlib.page"+c.page,"true")}catch(h){}c.cached=!1,d.call(b,e,c),v(a)}}(e,c),k=a.match(/callback=(.*)/),k!=null&&k.length>1?f[k[1]]=f["twitterlib"+e]:a+="&callback=twitterlib"+e;if(!p||c.page<=1||p&&sessionStorage.getItem("twitterlib.page"+c.page)==null)i.src=a,i.id="twitterlib"+e,h.appendChild(i);else if(p){v(e),c.cached=!0,c.originalTweets=JSON.parse(sessionStorage.getItem("twitterlib.page"+c.page+".originalTweets"));var l=JSON.parse(sessionStorage.getItem("twitterlib.page"+c.page+".tweets")||"[]");c.filter&&(l=t.matchTweets(l,c.filter)),c.limit&&c.limit<l.length&&(l=l.splice(0,c.limit)),d.call(b,l,c)}}function x(a,b){return n[a].replace(/(\b.*?)%(.*?)(\|.*?)?%/g,function(a,c,d,e){if(e&&e.substr(1)=="remove"&&b[d]==o)return"";var f=d=="limit"?b[d]+10:b[d];return c+(b[d]===o&&e!==o?e.substr(1):f)})}function y(a,b){return typeof a=="function"&&(b=a,a={}),a===o&&(a={}),a.page=a.page||1,a.callback=b,a.limit===0&&delete a.limit,a}function z(a,b,c){i={method:a,arg:b,options:c,callback:c.callback,page:c.page||1},c.method=a;if(p){var d=JSON.parse(sessionStorage.getItem("twitterlib.last_request")||"{}");if(i.method!=d.method||i.arg!=d.arg)A(),sessionStorage.setItem("twitterlib.last_request",JSON.stringify(i))}}function A(){var a=sessionStorage.length;while(a--)sessionStorage.key(a).substr(0,"twitterlib".length)=="twitterlib"&&sessionStorage.removeItem(sessionStorage.key(a))}function B(a,b,c){return b&&n[a]==o&&(n[a]=b),this[a]==o&&(this[a]=function(b,c,d){return typeof b=="function"?(d=b,b=""):b.toString()=="[Object object]"&&(d=c,c=b,b=""),c=y(c,d),z(a,b,c),c[a]=c.user=b,c.search=encodeURIComponent(b),c.callback&&w(x(a,c),c,c.callback),this}),this[a]}var b={};if(typeof exports!="undefined"&&typeof require=="function"){var c=require("url").parse,d=require("http");this.document={location:{protocol:"http:"},head:{appendChild:function(a){if(!a.src)return;var b=c(a.src,!0),e=d.createClient(80,b.host).request("GET",b.pathname+b.search,{host:b.host}),g="",h=f[b.query.callback];e.on("response",function(a){a.setEncoding("utf8"),a.on("data",function(a){g+=a}).on("end",function(){switch(a.statusCode){case 200:g=g.replace(new RegExp("^"+b.query.callback+"\\("),"").replace(/\);*$/,""),j[b.query.callback]&&h(JSON.parse(g));break;case 304:break;case 401:}})}).end()}},getElementById:function(){},createElement:function(a){return{type:a,id:null,src:""}}}}var e=+(new Date),f=this,g=f.document,h=g.head||g.getElementsByTagName("head")[0],i={},j={},k={"&quot;":'"',"&lt;":"<","&gt;":">"},l=g.location.protocol.substr(0,4)=="http"?g.location.protocol:"http:",m={search:l+"//search.twitter.com/search.json?q=%search%&page=%page|1%&rpp=%limit|100%&since_id=%since|remove%&result_type=recent&include_entities=true",timeline:l+"//api.twitter.com/1/statuses/user_timeline.json?screen_name=%user%&count=%limit|200%&page=%page|1%&since_id=%since|remove%include_rts=%rts|false%&include_entities=true",list:l+"//api.twitter.com/1/%user%/lists/%list%/statuses.json?page=%page|1%&per_page=%limit|200%&since_id=%since|remove%&include_entities=true&include_rts=%rts|false%",favs:l+"//api.twitter.com/1/favorites/%user%.json?include_entities=true&skip_status=true&page=%page|1%&since_id=%since|remove%",retweets:l+"//api.twitter.com/1/statuses/retweeted_by_user.json?screen_name=%user%&include_entities=true&count=%limit|200%&since_id=%since|remove%&page=%page|1%"},n=m,o,p=!1,q=function(){return{entities:function(a){return a.replace(/(&[a-z0-9]+;)/g,function(a){return k[a]})},link:function(a){return a.replace(/[a-z]+:\/\/([a-z0-9-_]+\.[a-z0-9-_:~\+#%&\?\/.=]+[^:\.,\)\s*$])/ig,function(a,b){return'<a title="'+a+'" href="'+a+'">'+(b.length>36?b.substr(0,35)+"&hellip;":b)+"</a>"})},at:function(a){return a.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15}(\/[a-zA-Z0-9-_]+)*)/g,function(a,b,c){return b+'<a href="http://twitter.com/'+c+'">@'+c+"</a>"})},hash:function(a){return a.replace(/(^|[^&\w'"]+)\#([a-zA-Z0-9_^"^<]+)/g,function(a,b,c){return a.substr(-1)==='"'||a.substr(-1)=="<"?a:b+'<a href="http://search.twitter.com/search?q=%23'+c+'">#'+c+"</a>"})},clean:function(a){return this.hash(this.at(this.link(a)))}}}(),r=function(a){if(a===o)return"";var b=a.text,c=0;if(a.entities){if(a.entities.urls&&a.entities.urls.length)for(c=0;c<a.entities.urls.length;c++)a.entities.urls[c].expanded_url&&(b=b.replace(a.entities.urls[c].url,a.entities.urls[c].expanded_url));if(a.entities.media&&a.entities.media.length)for(c=0;c<a.entities.media.length;c++)if(a.entities.media[c].media_url||a.entities.media[c].expanded_url)b=b.replace(a.entities.media[c].url,a.entities.media[c].media_url?a.entities.media[c].media_url:a.entities.media[c].expanded_url)}return b},s=function(){var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return{time:function(a){var b=a.getHours(),c=a.getMinutes()+"",d="AM";return b==0?b=12:b==12?d="PM":b>12&&(b-=12,d="PM"),c.length==1&&(c="0"+c),b+":"+c+" "+d},date:function(b){var c=a[b.getMonth()],d=b.getDate()+"",e=~~d,f=b.getFullYear(),g=(new Date).getFullYear(),h="th";return e%10==1&&d.substr(0,1)!="1"?h="st":e%10==2&&d.substr(0,1)!="1"?h="nd":e%10==3&&d.substr(0,1)!="1"&&(h="rd"),d.substr(0,1)=="0"&&(d=d.substr(1)),c+" "+d+h+(g!=f?", "+f:"")},shortdate:function(b){var c=b.split(" "),d=Date.parse(c[1]+" "+c[2]+", "+c[5]+" "+c[3]),e=new Date(d),f=a[e.getMonth()],g=e.getDate()+"",h=e.getFullYear(),i=(new Date).getFullYear();return i===h?g+" "+f:g+" "+f+(h+"").substr(2,2)},datetime:function(a){var b=a.split(" "),c=new Date(Date.parse(b[1]+" "+b[2]+", "+b[5]+" "+b[3]));return this.time(c)+" "+this.date(c)},relative:function(a){var b=a.split(" "),c=Date.parse(b[1]+" "+b[2]+", "+b[5]+" "+b[3]),d=new Date(c),e=arguments.length>1?arguments[1]:new Date,f=~~((e.getTime()-c)/1e3),g="";return f+=e.getTimezoneOffset()*60,f<=1?g="1 second ago":f<60?g=f+" seconds ago":f<120?g="1 minute ago":f<2700?g=~~(f/60)+" minutes ago":f<10800?g="1 hour ago":f<86400?g=~~(f/3600)+" hours ago":g=this.shortdate(a),g}}}(),t=function(){return{match:function(a,b,c){var d=0,e="",f=a.text.toLowerCase(),g=(!b.and||!b.and.length)&&(!b.or||!b.or.length);typeof b=="string"&&(b=this.format(b));if(b.not&&b.not.length){for(d=0;d<b.not.length;d++)if(f.indexOf(b.not[d])!==-1)return!1;if(g)return!0}else if({}.toString.call(b.not)!=="[object Array]"){if(b.not.test(f))return!1;if(g)return!0}if(b.and&&b.and.length)for(d=0;d<b.and.length;d++){e=b.and[d];if(e.substr(0,3)==="to:"){if(!RegExp("^@"+e.substr(3)).test(f))return!1}else if(e.substr(0,5)=="from:"){if(a.user.screen_name!==e.substr(5))return!1}else if(f.indexOf(e)===-1)return!1}else if(typeof b["and"]=="function"&&b.and.test(f))return!0;if(b.or&&b.or.length)for(d=0;d<b.or.length;d++){e=b.or[d];if(e.substr(0,3)==="to:"){if(RegExp("^@"+e.substr(3)).test(f))return!0}else if(e.substr(0,5)=="from:"){if(a.user.screen_name===e.substr(5))return!0}else if(f.indexOf(b.or[d])!==-1)return!0}else if(typeof b["or"]=="function"){if(b.or.test(f))return!0}else if(b.and&&b.and.length)return!0;return!1},format:function(a,b){var c=[],d=[],e=[],f=0,g=[],h="",i="";a.replace(/(-?["'](.*?)["']|\S+)/g,function(a){var b=!1;a.substr(0,1)=="-"&&(b=!0),a=a.replace(/["']+|["']+$/g,""),b?g.push(a.substr(1).toLowerCase()):c.push(a)});for(f=0;f<c.length;f++)c[f]=="OR"&&c[f+1]?(d.push(c[f-1].toLowerCase()),d.push(c[f+1].toLowerCase()),f++,e.pop()):e.push(c[f].toLowerCase());return{or:d,and:e,not:g}},matchTweets:function(a,b,c){var d=[],e,f=0;typeof b=="string"&&(b=this.format(b));for(f=0;f<a.length;f++)this.match(a[f],b,c)&&d.push(a[f]);return d}}}();b={custom:B,status:function(a,b,c){return b=y(b,c),b.limit=1,z("status",a,b),this.timeline(a,b,b.callback)},list:function(a,b,c){var d=a.split("/");return b=y(b,c),z("list",a,b),b.user=d[0],b.list=d[1],b.callback&&w(x("list",b),b,b.callback),this},next:function(){return i.method&&(i.page++,i.options.page=i.page,this[i.method](i.arg,i.options,i.callback)),this},refresh:function(){return i.method&&this[i.method](i.arg,i.options,i.callback),this},time:s,ify:q,filter:t,expandLinks:r,cancel:function(){for(var a in j)f[a]=function(){return function(a){v(a)}}(a.replace("twitterlib",""));return j={},this},reset:function(){n=m,i.method=""},render:u,debug:function(a){for(var b in a)n[b]=a[b];return this},cache:function(a){p=a==o?!0:a;if(!f.JSON||!f.sessionStorage)p=!1}},b.custom("search"),b.custom("timeline"),b.custom("favs"),b.custom("retweets"),typeof exports!="undefined"&&(module.exports=b),a.twitterlib=b})(this);

function getTweets(el, utils){
    if( !utils.username ){
        el.twitterList.find("li").eq(0).html("You need to specify a username");
    }else{
        jQuery.ajax({
            url			: "//api.twitter.com/1/statuses/user_timeline.json?screen_name="+utils.username,
            dataType	: "jsonp",
            timeout		: 15000,
            success		: function(data){
                var li = '';
                for( i=0; i<utils.tweetNum; i++ ){
                    if ( data[i] === undefined ) break;
                    var text = data[i].text;
                    text = text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url){return '<a href="'+url+'" target="_blank">'+url+'</a>'});
                    text = text.replace(/@(\w+)/g, function(url){return '<a href="http://www.twitter.com/'+url.substring(1)+'" target="_blank">'+url+'</a>'});
                    text = text.replace(/#(\w+)/g, function(url){return '<a href="http://twitter.com/search?q=%23'+url.substring(1)+'" target="_blank">'+url+'</a>'});
                    li += '<li><span class="tweet-icon"></span><p>'+text+'<span class="time-ago">'+twitterlib.time.relative(data[i].created_at)+'</span>'+'</p></li>';

                }
                li += '<li class="follow">Follow us <a href="https://twitter.com/'+utils.username+'">on Twitter</a></li>';
                el.twitterList.html( li );
            },
            error : function(){
                el.twitterList.find("li").eq(0).html("There was an error connecting to your Twitter account");
            }
        });
    }
}