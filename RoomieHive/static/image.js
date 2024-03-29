document.addEventListener('DOMContentLoaded', function() {
    var selDiv = document.getElementById('selectedFiles');
    var storedFiles = [];
  
    document.getElementById('files').addEventListener('change', handleFileSelect);
    document.getElementById('upload-form').addEventListener('submit', handleForm);
  
    function handleFileSelect(e) {
      var files = e.target.files;
      var filesArr = Array.prototype.slice.call(files);
  
      filesArr.forEach(function(f) {
        if (!f.type.match('image.*')) {
          return;
        }
        storedFiles.push(f);
  
        var reader = new FileReader();
        reader.onload = function(e) {
          var html = '<div><img src="' + e.target.result + '" data-file="' + f.name + '" class="selFile" title="Click to remove">'+ '<br>'+ '<br clear="left"/></div>';
          selDiv.insertAdjacentHTML('beforeend', html);
        }
        reader.readAsDataURL(f);
      });
    }
  
    function handleForm(e) {
      e.preventDefault();
      var data = new FormData();
  
      for (var i = 0; i < storedFiles.length; i++) {
        data.append('files', storedFiles[i]);
      }
  
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'handler.cfm', true);
  
      xhr.onload = function(e) {
        if (this.status == 200) {
          console.log(e.currentTarget.responseText);
          alert(e.currentTarget.responseText + ' items uploaded.');
        }
      }
  
      xhr.send(data);
    }
  
    document.body.addEventListener('click', function(e) {
      if (e.target.classList.contains('selFile')) {
        var file = e.target.dataset.file;
        for (var i = 0; i < storedFiles.length; i++) {
          if (storedFiles[i].name === file) {
            storedFiles.splice(i, 1);
            break;
          }
        }
        e.target.parentNode.remove();
      }
    });
  });
  