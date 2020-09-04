
function sendComment(comment){
  	    var obj = {};
        obj.interfaceName = 'sendChat';
        obj.type = 1;
        obj.content = comment;
        obj.bc_gid = $('#hosts_id_e').attr('host-other').split('&')[0];
        obj.owner = $('#hosts_id_e').attr('host-other').split('&')[1];
		postMessageCallback.post('/broadcast', obj, function (callbackMsg) {
			if(callbackMsg.resCode == 0){
				console.log('SUCCESS');
			}
		})
  }

function getLastComment(){
  var lastComment = {};

  lastComment.level = $(".grade_num")[$(".grade_num").length - 1 ].innerHTML
  lastComment.user = $(".user_name")[$(".user_name").length - 1 ].innerHTML
  lastComment.message = $(".user_text_content")[$(".user_text_content").length - 1].innerHTML

  return lastComment;
}

function wellcome(level,  message){
  if (level >= 10) {
      sendComment("Vaquinha amarela")
  }
}
