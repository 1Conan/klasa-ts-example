import { Command, CommandStore, KlasaMessage, KlasaClient } from 'klasa';

export default class extends Command {

	constructor(client: KlasaClient, store: CommandStore, file: string[], dir: string) {
		super(client, store, file, dir, {
			enabled: true,
			description: 'A simple hello world',
		});
	}

	async run(msg: KlasaMessage) {
		return msg.sendMessage('Hello World!');
	}
}