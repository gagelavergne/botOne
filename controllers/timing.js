'use strict';

const Telegram = require('telegram-node-bot');

class TimingController extends Telegram.TelegramBaseController {
	timingHandler($) {
		$.sendMessage('⏳ROUNDS TIMING⌛️\n\nUSA (CST) 🇺🇸 \n\n08:00am or 08:00\n\n04:00pm or 16:00\n11:00pm or 23:00\n\nLONDON / UK 🇬🇧 \n\n02:00PM or 14:00\n10:00PM or 22:00\n05:00AM or 05:00\n\nINDIA 🇮🇳 \n\n05:30PM or 17:30\n01:30AM or 01:30\n08:30AM or 08:30\n\n👉If you cannot find your time zone for round timing please use a time converter.');
	}

	get routes() {
		return {
			'timingCommand': 'timingHandler'
		};
	}
}

module.exports = TimingController;