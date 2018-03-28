var PrdReq = {
	mode:"proxy",
	host:"http://m.piaodaren.com",
	request:function(url,data,success){
		if(PrdReq.mode === "proxy"){
			PrdReq.proxy_request(url,data,success);
		}else{
			PrdReq.direct_request(url,data,success);
		}
	},
	proxy_request:function(url,data,success){
		target = encodeURIComponent(url);
		$.ajax({  
            type: "get",  
            url: PrdReq.host+"/front/helper/make?target="+target,  
            dataType: "jsonp", 
            success : success
        });  
	},
	direct_request:function(url,data,success){
		$.get(url,data,success);
	}
};
window.pdr=PrdReq;