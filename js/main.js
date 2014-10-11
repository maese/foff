
$(document).ready(function() {


	$('#prueba_rest').on('click', function() {
		
/*
	obj = {
        //type: this.model.method,
        //url: this.invocationUrl,
        headers: headerParams,
        data: bodyParam,
        //dataType: 'json',
        contentType: false,
        processData: false,
        error: function(data, textStatus, error) {
          return _this.showErrorStatus(_this.wrap(data), _this);
        },
        success: function(data) {
          return _this.showResponse(data, _this);
        },
        complete: function(data) {
          return _this.showCompleteStatus(_this.wrap(data), _this);
        }
      };

*/



			// function setHeader(xhr) {
			//   xhr.setRequestHeader('Authorization', 'Basic faskd52352rwfsdfs');
			//   xhr.setRequestHeader('source', 'bac');
			// }

			// $.ajax({                
   //              type: 'GET',
   //              url:   "http://eciregistro.paradigmatecnologico.com:8080/rest/1.1/customer/111",
   //              beforeSend: setHeader,
   //              headers : {'source':'bac'},
   //              dataType   : 'jsonp',
   //              contentType: 'application/json; charset=UTF-8', 
   //              crossDomain: true,
   //              header : {"source":"bac"},
                
   //     //          xhrFields: {
			//     //     withCredentials: true
			//     // }              
   //              // data: JSON.stringify(jsonData)
   //          }).done(function(data) {
   //              console.log(data);
   //          }).fail(function(xhr) { // error en red
   //          	console.log(xhr.status + " (" + xhr.statusText+ ")");                
   //          }).always(function() {  
                
   //          });  



// $.ajax({
//     type: 'POST',
//     url: "http://eciregistro.paradigmatecnologico.com:8080/rest/1.1/customer/111",
//     headers: {
//         "source":"bac",
//         "My-Second-Header":"second value"
//     },
//     dataType   : 'jsonp'
//     //OR
//     //beforeSend: function(xhr) { 
//     //  xhr.setRequestHeader("My-First-Header", "first value"); 
//     //  xhr.setRequestHeader("My-Second-Header", "second value"); 
//     //}
// }).done(function(data) { 
//     alert(data);
// });



!function makeRequest() {
	
	var settings = {
		type: "GET",
		url:"http://eciregistro.paradigmatecnologico.com:8080/rest/1.1/customer/111",
		dataType:"json",
		crossDomain: true,
		xhrFields: {
		    withCredentials: true
		  },
		error: function(XHR,textStatus,errorThrown) {
			//alert ("XHR="+XHR+"\ntextStatus="+textStatus+"\nerrorThrown=" + errorThrown);
		},
		success: function(data,textStatus) {
			//$("body").append(data);
		},
		headers: {
			"source":"bac"
		}
	};
	$.ajax(settings);
}();











	});



});