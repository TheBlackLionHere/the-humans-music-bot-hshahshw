const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`Edting  | $help | By TheBlackLion_ .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
     }
    });
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', message => {
  if(message.content === ('clear')) {
  let modRole = message.guild.roles.find("name", "Admin");
  if (!modRole) return message.reply('You do not have Admin Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
}); 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});
client.on('message', msg => {
  if (msg.content === '$invite') {
    msg.reply('https://discordapp.com/api/oauth2/authorize?client_id=472866957599965185&permissions=0&scope=bot');
  }
});
client.on('message', msg => {
  if (msg.content === '$help') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});
client.on("message", message => {
    var prefix = "$";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Name Bot."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
// Your Avatar URL!
client.on('message', message => {
    if (message.content === "$avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on("message", message => {
      if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
    client.on('message', message => {
     if (message.content === "$id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Name Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
var prefix = "$";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});
client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' Bye ..',
}}).catch(console.error);
  }
);
client.on("message", (message) => {
    if (message.content.startsWith("*ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " لقد تم طرده بنجاح :wave: ");
        }).catch(() => {
            message.channel.send(":x: هناك خطاء حاول مره أخرى:x: ");
        });
    }
});
client.on('message', message => {
    if(message.channel.type === "dm") return;
      if(message.content.startsWith ("$زواج")) {
      if(!message.channel.guild) return message.reply(' This command only for servers ')
      var proposed = message.mentions.members.first()

      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 10 ثانية 
 اكتب موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول قلللوش مبروك**`))

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})




  }
});
client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});
client.on('message', message => {
    var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

 client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
 client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});

client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
client.on('guildCreate', guild => {
  client.channels.get("474563647956320256").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("474563565253034004").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith(prefix + 'report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'report');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب ��لابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          console.log('[report] Send By: ' + message.author.username)
      }
      });
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "member");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})
const adkar = [
	'**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
	'**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
	'**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
	'**‏اذكار  |  **أستغفر الله .',
	'**‏اذكار  | **الْلَّهُ أَكْبَرُ',
	'**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
	'**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
	'**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
	'**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
	'**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
	'**‏اذكا��  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
	'‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
	'**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
	'**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
	'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
	'**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
	'**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
	'**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
	'**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
	'**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
	'**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
	'**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
	'**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
	'**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
	'**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
	'**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
	'**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
	'**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
	'**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
	'**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
	'**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith('$اذكار')) {
	if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("**اذكار**")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
				 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
client.on("ready", () => {
let channel =     client.channels.get("473524633799491584")
setInterval(function() {
channel.send(`$اذكار`);
}, 7200000)
})
 const yt = require('ytdl-core');
 //صانع الكود @LEGEND_YT#4537
 //صانع الكود @LEGEND_YT#4537
 //صانع الكود @LEGEND_YT#4537
const prefix = '$'//تقد تغير البرفكس للي تبيه
 //الحقوق كامله محفوضه لدا سيرفر الفا
client.on('ready', () => {//الحقوق كامله محفوضه لدا سيرفر الفا
    console.log(`Logged in as ${client.user.tag}!`);//الحقوق كامله محفوضه لدا سيرفر الفا
    console.log(`in ${client.guilds.size} servers `)//الحقوق كامله محفوضه لدا سيرفر الفا
    console.log(`[Users] ${client.users.size}`)//الحقوق كامله محفوضه لدا سيرفر الفا
});//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
function commandIs(str, msg){//الحقوق كامله محفوضه لدا سيرفر الفا
    return msg.content.toLowerCase().startsWith('*' + str);//الحقوق كامله محفوضه لدا سيرفر الفا
}//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
function pluck(array) {//الحقوق كامله محفوضه لدا سيرفر الفا
    return array.map(function(item) { return item['name']; });//الحقوق كامله محفوضه لدا سيرفر الفا
}//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
function hasRole(mem, role) {//الحقوق كامله محفوضه لدا سيرفر الفا
    if(pluck(mem.roles).includes(role)){//الحقوق كامله محفوضه لدا سيرفر الفا
        return true;//الحقوق كامله محفوضه لدا سيرفر الفا
    } else {//الحقوق كامله محفوضه لدا سيرفر الفا
        return false;//الحقوق كامله محفوضه لدا سيرفر الفا
    }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var servers = {};//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
var q1 = "*quran 1"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q2 = "*quran 2"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q3 = "*quran 3"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q4 = "*quran 4"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q5 = "*quran 5"//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var q6 = "*quran 6"//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
var q7 = "*quran 7"//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
function play(connection, message) {//الحقوق كامله محفوضه لدا سيرفر الفا
    var server = servers[message.guild.id];//الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
   server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
    server.queue.shift();//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
    server.dispatcher.on("end", function() {//الحقوق كامله محفوضه لدا سيرفر الفا
        if (server.queue[0]) play(connection, message);//الحقوق كامله محفوضه لدا سيرفر الفا
        else connection.disconnect();//الحقوق كامله محفوضه لدا سيرفر الفا
    });//الحقوق كامله محفوضه لدا سيرفر الفا
}//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
client.on("ready", () => {//الحقوق كامله محفوضه لدا سيرفر الفا
    console.log(`Quran bot is in ${client.guilds.size} servers `)//الحقوق كامله محفوضه لدا سيرفر الفا
});//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
var PREFIX = "*";//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
client.on("message", message => {//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                        if (message.content === q1 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);  
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
      });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                        if (message.content === q2 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
      });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                            if (message.content === q3 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
      });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                            if (message.content === q4 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
        });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                              if (message.content === q5 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=JavxHrNSZlg', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
        });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
                                  if (message.content === q6 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=WYT0pQne-7w', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
        });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
                                      if (message.content === q7 ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                  message.react('🔊')//الحقوق كامله محفوضه لدا سيرفر الفا
    const voiceChannel = message.member.voiceChannel;//الحقوق كامله محفوضه لدا سيرفر الفا
    if (!voiceChannel) {//الحقوق كامله محفوضه لدا سيرفر الفا
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }//الحقوق كامله محفوضه لدا سيرفر الفا
    voiceChannel.join()//الحقوق كامله محفوضه لدا سيرفر الفا
      .then(connnection => {//الحقوق كامله محفوضه لدا سيرفر الفا
        let stream = yt('https://www.youtube.com/watch?v=3XV0ejeQG_M', {audioonly: true});//الحقوق كامله محفوضه لدا سيرفر الفا
        const dispatcher = connnection.playStream(stream);//الحقوق كامله محفوضه لدا سيرفر الفا
        });//الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
   //الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
  if(message.content === "*stop" ) {//الحقوق كامله محفوضه لدا سيرفر الفا
                var servers = {};//الحقوق كامله محفوضه لدا سيرفر الفا
 //الحقوق كامله محفوضه لدا سيرفر الفا
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();//الحقوق كامله محفوضه لدا سيرفر الفا
   //الحقوق كامله محفوضه لدا سيرفر الفا
  }//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
 if(message.content === "$help") {//الحقوق كامله محفوضه لدا سيرفر الفا
   message.channel.send(` QuranBot//الحقوق كامله محفوضه لدا سيرفر الفا
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●//الحقوق كامله محفوضه لدا سيرفر الفا
     🕋اوامر البوت 🕋
اذكار: يعرض لك الاذكار
 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
        **اوامر تشغيل القران**  
:mosque: $quran 1  |  القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد
:mosque: $quran 2 | سورة البقرة كاملة - القارئ الحاج ميثم التمار (QURAN)
:mosque: $quran 3 | القرآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم
:mosque: $quran 4 | القرآن الكريم كامل بصوت الشيخ المعيقلي
:mosque: $quran 5 |  سورة البقرة بصوت وتلاوة يخشع لها الحجر بدل القلب (الشيخ اسلام صبحي
:mosque: $quran 6 | الشيخ ياسر الدوسري القرآن الكريم كامل
:mosque: $quran 7 | القرآن الكريم كاملا بصوت الشيخ بندر بليلة
:mosque: $stop |  لـ أيقاف تشغيل البوت
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
 `)
 }
 
       
});//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
        //الحقوق كامله محفوضه لدا سيرفر الفا
client.on('message', message => {//الحقوق كامله محفوضه لدا سيرفر الفا
  if(message.content === "*bot") {//الحقوق كامله محفوضه لدا سيرفر الفا
      const embed = new Discord.RichEmbed()//الحقوق كامله محفوضه لدا سيرفر الفا
      .setColor("#00FFFF")//الحقوق كامله محفوضه لدا سيرفر الفا
      .setDescription(`**Servers**🌐 **__${client.guilds.size}__**//الحقوق كامله محفوضه لدا سيرفر الفا
**Users**👥 **__${client.users.size}__**//الحقوق كامله محفوضه لدا سيرفر الفا
**Channels**📚 **__${client.channels.size}__** `)//الحقوق كامله محفوضه لدا سيرفر الفا
             message.channel.sendEmbed(embed);//الحقوق كامله محفوضه لدا سيرفر الفا
         }ر//الحقوق كامله محفوضه لدا سيرفر الفا
});//الحقوق كامله محفوضه لدا سيرفر الفا
//الحقوق كامله محفوضه لدا سيرفر الفا
    //الحقوق كامله محفوضه لدا سيرفر الفا
client.login(process.env.BOT_TOKEN)
