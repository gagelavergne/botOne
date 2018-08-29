'use strict';

const Telegram = require('telegram-node-bot');

class RulesController extends Telegram.TelegramBaseController {
	rulesHandler($) {
		$.sendMessage('Engagement Rules:\n\n📌 Only drop your account link if you are going to like/comment on ALL accounts in the list during rounds\n\n📌 Posted link but did not engage back = ban ❌\n\n📌 You will have one hour to finish rounds\n\n📌 Your account must be public\n\n📌POST YOUR LINK IN THE FOLLOWING FORMAT ONLY: \nhttps://www.instagram.com/Your-Instagram-Username\n\n❌Do NOT post full photo or preview - hide the preview by clicking the x on the top right when posting your link\n\n‼️If preview or full photo is posted you will be warned\n\n‼️After three warnings you will be removed from the group\n\n👉Admins are not required to engage as they are working on growing and running this group.');
	}

	get routes() {
		return {
			'rulesCommand': 'rulesHandler'
		};
	}
}

module.exports = RulesController;