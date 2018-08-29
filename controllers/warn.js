'use strict';

const Telegram = require('telegram-node-bot');

class WarnController extends Telegram.TelegramBaseController {
	warnHandler($) {
		$.sendMessage('•Warning Users:\n\n-Users are to follow ALL rules in the rules guide\n\n-Each user gets three warnings, after the third warning they will be removed from the group\n\n-In order to keep a strong group that users will trust we must be strict with the rules (no exceptions), otherwise the group will loose trust in us and quit participating\n\n•Reasons:\n\n-Posting their link incorrect\n\n🚫WARN (1/3) @username\nLink posted incorrectly- refer to rules pinned above for correct link posting\n\n-Not closing preview on link\n\n🚫WARN (1/3) @username\nClose link preview when posting link\n\n-Chatting in group\n\n🚫WARN (1/3) @username\nNO chatting in group, use ActiveGrowth Chat group for any chat, questions, etc.\n\n-Dropping links out of round times\n\n🚫WARN (1/3) @username\nLink are to be dropped ONLY during round times\n\n-Not reverting back engagements\n\n🚫WARN (1/3) @username\nMUST revert back engagement on ALL links');}

	get routes() {
		return {
			'warnCommand': 'warnHandler'
		};
	}
}

module.exports = WarnController;