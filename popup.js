//************************************************************//
var file = ['style.css'];
for (let i = 0; i < file.length; i++) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL(file[i]);
    (document.head || document.documentElement).appendChild(style);
}
console.log("loaded");
//************************************************************//

$(function(){
  Waves.attach('.flex-container',['waves-button','waves-float']);
  Waves.attach('.nav',['waves-circle']);
  Waves.init();



  $('#run').click(()=>{
//when eye button is pressed
    var code=$('#q').val(); //get value of the input
    $('#q').attr('placeholder',code);
    if(code!=""){ //if not empty

      var data_1={
        msg:'cds',
        code:code
      };
     chrome.runtime.sendMessage(data_1);//message for code execution

    }

  });
//when cross button is pressed
  $('#close').click(()=>{

       var data_2={
          msg:'remv_ch'
      };
      $('#q').val("");
      chrome.runtime.sendMessage(data_2);

  });

});
