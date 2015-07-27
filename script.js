
$(document).ready(function(){
	$(".ember-chat .chat-messages").css('bottom' , '150px');
	$(".chat-interface").css('height' , '150px');
	function emoticonSelectorDelay () {
		$(".dropmenu").css('margin-bottom', '0px');
		$(".emoticon-selector").css('bottom' , '151px');
	};

	$(".emoticon-selector-toggle").click(function(){
		window.setTimeout( emoticonSelectorDelay , 10);
	});

	$(".chat-buttons-container").prepend('<style>.eeemotes{display: inline-block;position: relative;cursor: pointer;line-height: 30px;width: 30px;height: 30px;font-size: 14px;background-repeat:no-repeat;background-size: 100% 100%;font-family: inherit;padding: 0;border: 0;cursor: pointer;}.eee_kappa {background-image: url(http://static-cdn.jtvnw.net/emoticons/v1/25/1.0);}.eee_klappa{background-image: url(http://static-cdn.jtvnw.net/emoticons/v1/969/1.0);}.eee_biblethump{background-image: url(http://static-cdn.jtvnw.net/emoticons/v1/86/1.0);}.eee_kappapride{background-image: url(http://static-cdn.jtvnw.net/emoticons/v1/55338/1.0);}.eee_frankerz{background-image: url(http://static-cdn.jtvnw.net/emoticons/v1/65/1.0);}.eee_keepo{background-image: url(http://static-cdn.jtvnw.net/emoticons/v1/1902/1.0);}.eee_heyguys{background-image:url(http://static-cdn.jtvnw.net/emoticons/v1/30259/1.0);}.eee_kreygasm{background-image:url(http://static-cdn.jtvnw.net/emoticons/v1/41/1.0);}.eee_pogchamp{background-image:url(http://static-cdn.jtvnw.net/emoticons/v1/88/1.0);}.eee_failfish{background-image:url(http://static-cdn.jtvnw.net/emoticons/v1/360/1.0);}</style>');
	$(".chat-buttons-container").append('<a class="eeemotes eee_kappa" title="Kappa"></a><a class="eeemotes eee_klappa" title="Klappa"></a><a class="eeemotes eee_biblethump"></a><a class="eeemotes eee_frankerz"></a><a class="eeemotes eee_keepo"></a><a class="eeemotes eee_kappapride"></a><a class="eeemotes eee_heyguys" title="HeyGuys"></a><a class="eeemotes eee_kreygasm" title="Kreygasm"></a><a class="eeemotes eee_pogchamp" title="PogChamp"></a><a class="eeemotes eee_failfish"></a><a class="eeemotes eee_kappapride"></a>');
	
	$(".eee_kappa").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteKappa = 'Kappa ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteKappa).focus();
	});
	
	$(".eee_klappa").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteKlappa = 'Kappa // ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteKlappa).focus();
	});
	
	$(".eee_biblethump").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteBibleThump = 'BibleThump ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteBibleThump).focus();
	});
	
	$(".eee_frankerz").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteFrankerz = 'FrankerZ ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteFrankerz).focus();
	});
	
	$(".eee_keepo").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteKeepo = 'Keepo ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteKeepo).focus();
	});

	$(".eee_kappapride").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteKappaPride = 'KappaPride ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteKappaPride).focus();
	});

	$(".eee_heyguys").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteHeyGuys = 'HeyGuys ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteHeyGuys).focus();
	});

	$(".eee_kreygasm").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteKreygasm = 'Kreygasm ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteKreygasm).focus();
	});

	$(".eee_pogchamp").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemotePogChamp = 'PogChamp ';
		$("#chat_text_input").val(textMessage + ' ' + eeemotePogChamp).focus();
	});

	$(".eee_failfish").click(function() {
		var textMessage = $("#chat_text_input").val();
		var eeemoteFailFish = 'FailFish ';
		$("#chat_text_input").val(textMessage + ' ' + eeemoteFailFish).focus();
	});


	console.log("extension loaded");
});