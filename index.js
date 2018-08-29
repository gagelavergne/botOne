'use strict'

const Telegram = require('telegram-node-bot'),
	tg = new Telegram.Telegram('696132120:AAGIF5Mj0mPHwNe9j7WO9275JUFN23HCMNM', {
		workers: 1
	});

const RoundController = require('./controllers/round')
	, OtherwiseController = require('./controllers/otherwise')
	, WarnController = require('./controllers/warn')
	, TimingController = require('./controllers/timing')
	, RulesController = require('./controllers/rules')
	, ProcessController = require('./controllers/process');	

tg.router.when(new Telegram.TextCommand('/round', 'roundCommand'), new RoundController())
	.when(new Telegram.TextCommand('/warn', 'warnCommand'), new WarnController())
	.when(new Telegram.TextCommand('/timing', 'timingCommand'), new TimingController())
	.when(new Telegram.TextCommand('/rules', 'rulesCommand'), new RulesController())
	.when(new Telegram.TextCommand('/process', 'processCommand'), new ProcessController())
	.otherwise(new OtherwiseController());	