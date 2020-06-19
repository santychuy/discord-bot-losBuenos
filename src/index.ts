import { Client } from 'discord.js';

import config from './config';
import { getFirstCmd } from './util/commands';
import warzone from './content/warzone';
import { randomElement } from './util/randomElement';
import { sendCreador } from './controllers/creador';

const { DISCORD_TOKEN, PREFIX } = config;

const client = new Client();

client.once('ready', () => {
  console.log('Listo viejon');
});

client.on('guildMemberAdd', async member => {
  try {
    await member.setNickname('Gato del Bofo');
    await member.send(
      'Bienvenido al server más vergas loco, la única recomendación que te doy, es que me tendrás un respeto, y te cambies tu nickname, sí quieres no, A TU ELECCIÓN'
    );
  } catch (e) {
    throw new Error(e.message);
  }
});

// Commandos del Mago
client.on('message', async message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  const cmd = getFirstCmd(message.content);

  if (cmd === undefined) await message.channel.send('Error: reporta esto con @ElBofo');

  if (cmd?.includes('warzone')) {
    await message.channel.send(`${message.author} esperate verga`);
    setTimeout(async () => {
      await message.channel.send(randomElement(warzone));
    }, 1000);
  } else if (cmd?.includes('chilo') || cmd?.includes('chelo')) {
    setTimeout(async () => {
      await message.channel.send(`${message.author} chhhhhelo`);
    }, 1500);
  } else if (cmd?.includes('cuantos')) {
    setTimeout(async () => {
      await message.channel.send(
        `Mira pinche ${message.author}, saqué 36 botes con 1 dardo, chhhhelo we`
      );
    }, 1500);
  } else if (cmd?.includes('creador')) {
    setTimeout(async () => {
      sendCreador(message);
    }, 1500);
  } else {
    setTimeout(async () => {
      await message.channel.send(`Pon el comando bien, pinche ${message.author}`);
    }, 1500);
  }
});

client.login(DISCORD_TOKEN);
