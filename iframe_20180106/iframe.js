+(function (window, document) {

  'use strict';

  function createIframe(input_url_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var src = '<iframe src="' + input_url_ + '" style="width:' + input_WIDTH_ + '%;height:' + input_HEIGHT_ + 'px">';
    
    if (document.getElementById('fustyles'))
    {
        if ((input_WIDTH_>0)&&(input_HEIGHT_>0))
        {
          document.getElementById('fustyles').style.left = input_LEFT_ + '%';
          document.getElementById('fustyles').style.top = input_TOP_ + 'px';
          document.getElementById('fustyles').style.display = 'block';
          document.getElementById('fustyles').innerHTML = src;
        }
        else
        {
          document.getElementById('fustyles').style.display = 'none';
          document.getElementById('fustyles').innerHTML = '';
        }
    }
    else
    {
      if ((input_WIDTH_>0)&&(input_HEIGHT_>0))
      {
        var div = document.createElement('div');
        div.id = 'fustyles';
        div.style.position = 'absolute';      
        div.style.left = input_LEFT_ + '%';
        div.style.top = input_TOP_ + 'px';
        div.style.zindex='9999';      
        div.innerHTML = src;
        document.body.appendChild(div);
      }
    }
  }

  window.createIframe = createIframe;

}(window, window.document));
