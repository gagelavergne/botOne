'use strict';

const Telegram = require('telegram-node-bot');

class ProcessController extends Telegram.TelegramBaseController {
	processHandler($) {
		$.sendMessage('📌Process\n⬇️\nChat & Questions Group\nhttps://t.me/joinchat/JqgFBhBtY1dmZQ78AbxeSg\n⬇️\nLinks Dropping Group\nhttps://t.me/joinchat/JqgFBhF6gKtUuMX0MlP-XA\n⬇️\nDo not drop your links before the drop time or before an admin states the round has begun\n⬇️\nRound times are listed at the bottom.\n⬇️\nYou will have 30 minutes to drop your link when the round begins, after the first 30 minutes engagement round will begin.\n⬇️ \nOnce engagment round starts you will have one hour to engage - like and comment on everyone’s latest post - then we will check that all members are reverting back engagment.\n⬇️\nYOU MUST ENGAGE IN THIS GROUP AT LEAST THREE TIMES A WEEK IF YOU WANT TO BE A PART OF IT');
	}

	get routes() {
		return {
			'processCommand': 'processHandler'
		};
	}
}

module.exports = ProcessController;