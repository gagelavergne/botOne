'use strict';

const Telegram = require('telegram-node-bot');

class RoundController extends Telegram.TelegramBaseController {
	roundHandler($) {
		$.sendMessage('•Starting Rounds:\n\n✅✅DROP LINKS✅✅\n\n-Users have 30 minutes to drop their links starting at the beginning of a round\n\n-After 30 minutes engagement will begin\n\n•Engagement:\n\n🔥🔥ENGAGE🔥🔥\n\n-Engagement will last for one hour, users are to engage on ALL links posted during links dropping\n\n-After an hour the round will be closed until the next round begins and the process starts over again\n\n•Closing Rounds:\n\n🛑🛑ROUND CLOSED🛑🛑');
	}

	get routes() {
		return {
			'roundCommand': 'roundHandler'
		};
	}
}

module.exports = RoundController;