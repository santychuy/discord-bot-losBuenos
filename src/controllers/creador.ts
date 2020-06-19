import { MessageEmbed, Message } from 'discord.js';

export const sendCreador = async (msg: Message): Promise<void> => {
  const embed = new MessageEmbed()
    .setTitle('Fui creado por mi Dios')
    .setColor(0x21303e)
    .setDescription('El del Amosai.')
    .setTimestamp()
    .setURL('https://amosai.dev')
    .setImage('https://amosai.dev/img/LogoHorizontal.jpg');
  await msg.channel.send(embed);
};
