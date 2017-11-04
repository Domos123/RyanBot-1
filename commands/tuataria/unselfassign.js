const { Command } = require('discord.js-commando');

module.exports = class UnSelfAssignCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'tuaunselfassign',
      aliases: ['bainotisquad', 'baihuntsquad'],
      group: 'tuataria',
      memberName: 'unselfassign',
      description: 'Removes a member from the Notification/Hunt Squad role.',
      guildOnly: true
    });
  }

  run(msg) {
    if (msg.guild.id !== '273689397675687940') return msg.delete();

    let role = msg.content.slice(2);
    if (role === 'tuaunselfassign') return msg.reply('you need to use one of the aliases of this command for it to do anything :stuck_out_tongue:');

    //notification squad
    if (role === 'bainotisquad') {
      let bingbongbunch = msg.guild.roles.get('323972051176128512');
      if (!bingbongbunch) return msg.reply('uhh, somebody messed up somewhere because I can\'t seem to find the Notification Squad role.');

      if (!msg.member.roles.exists('name', 'Notification Squad')) return msg.reply('You\'re not in the Notification Squad... sooo.... yeah.');

      msg.member.removeRole(bingbongbunch);
      msg.channel.send(`${msg.member.displayName}, you\'ve been removed from the Notification Squad.`);
    }

    //hunt squad
    if (role === 'baihuntsquad') {
      let huntsquad = msg.guild.roles.get('355407537702436867');
      if (!huntsquad) return msg.reply('whoops, I think the Hunt Squad role disappeared.');

      if (msg.member.roles.exists('name', 'Hunt Squad')) {
        msg.member.removeRole(huntsquad);
        msg.channel.send(`${msg.member.displayName}, you've been removed from the Hunt Squad.`);
      } else return msg.reply('you\'re not even in the Hunt Squad!');
    }
  }
};
