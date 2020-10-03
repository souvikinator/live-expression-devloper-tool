
chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{

      //execution code sending
          if(request.msg=="cds"){
            var code=request.code;

            var data={
              msg:'xcute',
              tag:1,
              xcute:code
            };
    //store data in local storage
            chrome.storage.local.set({'code':data},()=>{
                  console.log('data cached');
            });
   //send message to chrome
            chrome.tabs.query({active:true,currentWindow:true},function(tabs){
                   chrome.tabs.sendMessage(tabs[0].id,data,function(){
                     console.log("data sent to content !!");
                   });
              });


          }

 //message for removing cached code
        if(request.msg=="remv_ch"){

            chrome.storage.local.remove(['code'],()=>{ //remove code from local storage
              console.log("cache clear!!");
            });


            var data1={    //msg data
                msg:'rmv_scrpt'
            };
            //send message to  content script
            chrome.tabs.query({active:true,currentWindow:true},function(tabs){
                   chrome.tabs.sendMessage(tabs[0].id,data1,function(){
                     console.log("data sent to content !!");
                   });
            });

          }

});


  /*  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
         chrome.tabs.sendMessage(tabs[0].id,data,function(){
           console.log("data sent to content !!");
         });
    });*/
