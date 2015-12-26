"use strict";
$('document').ready(function () {
	require(['navigator'], function (navigator) {
		$(window).on('action:composer.posts.reply', function (ev, data) {
			var result = data.data;
			var hideObjects = $('code.rtos');
			if (hideObjects.length > 0) {
				socket.emit('plugins.replyToSee.renderTopic', {tid: result.tid}, function (err, post) {
					if (!err && post) {
						var data = {};
						data.title = $('<div></div>').text(ajaxify.data.title).html();
						data.slug = ajaxify.data.slug;
						data.tags = ajaxify.data.tags;
						data.viewcount = ajaxify.data.viewcount;
						data.isFollowing = ajaxify.data.isFollowing;
						data.posts = [post];

						app.parseAndTranslate('topic', 'posts', data, function (html) {
							var replacer = $('[component="post"][data-index="0"]>.content');
							if (replacer) {
								replacer.replaceWith(html.find('.content'));
								navigator.scrollToPostIndex(0, true);
							}
						});
					}
				});
			}
		});
	});
});
