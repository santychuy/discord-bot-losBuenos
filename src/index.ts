import { Client } from 'discord.js';

import config from './config';
import { getFirstCmd } from './util/commands';
import warzone from './content/warzone';
import { randomElement } from './util/randomElement';

const { DISCORD_TOKEN, PREFIX } = config;

const client = new Client();

client.once('ready', () => {
  console.log('Listo viejon');
});

client.on('guildMemberAdd', async member => {
  await member.send(`Bienvenido a los meros meros de Culichi, chelo ${member.nickname}`);
});

// Commandos del Mago
client.on('message', async message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  const cmd = getFirstCmd(message.content);

  if (cmd.includes('warzone')) {
    await message.channel.send(randomElement(warzone));
  } else if (cmd.includes('chilo') || cmd.includes('chelo')) {
    await message.channel.send('Chilo we');
  } else if (cmd.includes('cuantos')) {
    await message.channel.send('Saqué 36 botes con 1 dardo, chhhhelo we');
  } else {
    await message.channel.send('Pon el comando bien, puñetas');
  }
});

client.login(DISCORD_TOKEN);
