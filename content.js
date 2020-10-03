
/**************************************************************************/
// chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
//     console.log("recived");
//     console.log(request.xcute);
//     var ex_cd=request.xcute;
//     var apnd="<script id='scrpt_live'>console.log("+ex_cd+")</script>";
//     //keeping background quiet
//     sendResponse({
//          response: "Message received"
//      });
//     ///////////////////////////
//
//      if($('#scrpt_live')){
//
//        $('#scrpt_live').remove();
//           console.log('removed');
//        }
//
//     $('body').append(apnd);
//
// });

// console.log(console.log("%c LIVE EXPRESSION DEBUGGER=>on","background: #222;color:#bada55"));
// console.log(console.stdlog=console.log.bind(console));
// console.log(console.logs=[]);


   //$('body').append('<script id="lv_cd">console.stdlog=console.log.bind(console);console.logs=[];function code(){console.logs.push(Array.from(arguments));console.stdlog.apply(console,arguments);console.logs.length=0;}</script>');
//    function interval(func,ti){
//
//        try{
//           func.call(null);
//           }
//         catch(err){
//             throw new Error(err.toString());
//         }
//          setTimeout(()=>{
//            interval(func,ti);
//          },ti);
// }

////////////////////////////////////////////////////////////////////

chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{


    if(request.msg=="rmv_scrpt"){
          $('#lv_cd2').remove();
          $('body').prepend("<script id='lv_cd2'> var c=1;</script>");
    }


if(request.msg=="xcute"){

  if($('#lv_cd2')){
      $('#lv_cd2').remove();
  }

  $('body').append("<script id='lv_cd2'> var c=0; if(x){ clearInterval(x); }</script>");
var code=request.xcute;
 if($('#lv_cd')){
   $('#lv_cd').remove();
 }


$('body').append("<script id='lv_cd'>var x=setInterval(()=>{ if(c==0){ console.clear();console.log('%c 👁 LIVE EXPRESSION DEBUGGER => on ','background: #222;color:#bada55;font-size:20px;');console.log('%c code=> "+code+" ','background: #222;color:#34daed;font-size:15px;');console.log("+code+"); }else{ console.clear(); clearInterval(x); console.log('%c 👁 LIVE EXPRESSION DEBUGGER => off ','background: #222;color:#bada55;font-size:20px;');} },600);</script>");

}

  sendResponse("goccha!!");

});

      // if($('#lv_cd')){
      //    $('#lv_cd').remove();
      // }
      //
      // console.clear();
      // console.log("%c 👁 LIVE EXPRESSION DEBUGGER=>on ","background: #222;color:#bada55;font-size:20px;");
      // console.log("%c code=> "+request.xcute+"","background: #222;color:#34daed;font-size:15px;");
      // $('body').append("<script id='lv_cd'>console.log("+request.xcute+")</script>");
