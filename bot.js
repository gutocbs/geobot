// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

////Custom Libraries
const xingamento = require("./xingamento.json");
const charadas = require("./charadas.json");
const desafios = require("./desafio.json");
const yomama = require("./mama.json");
const cantadas = require("./cantadas.json");
const bandori1 = require("./bandori1.json");
const bandori2 = require("./bandori2.json");
const bandori3 = require("./bandori3.json");
//var tok = "oi";
//var gettok;

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`comandos na board certa`);////AQUI QUE MUDA A FRASE DELE
  
  client.channels.get("455149078213296139").send(`+contatempo`).catch(console.error);
  client.channels.get("455149078213296139").send(`+getjail`).catch(console.error);
  client.channels.get("455149078213296139").send(`+getmortes`).catch(console.error);
  /*const fetched = client.channels.get("460456364297158668").fetchMessages({limit: 99})
      .then(messages => {
          messages.array().forEach( message => {
            if(message.id == "460477224282488854"){
              tok = message.content;
            }
          });
        })
      .catch(console.error);*/
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`oi`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`VOLTEI, CRIANÇAS`);
});

  var contador = Math.floor(Math.random() * 29);
  var bangeo = 0;
  var banainx = 0;
  var banguto = 0;
  var unbangeo = 0;
  var unbanainx = 0;
  var unbanguto = 0;
  ///

  var sairdacadeia = "oi";

  var GeovoteBanGeo = false;
  var GeovoteBanAinx = false;
  var GeovoteBanGuto = false;
  var AinxvoteBanGeo = false;
  var AinxvoteBanAinx = false;
  var AinxvoteBanGuto = false;
  var GutovoteBanGeo = false;
  var GutovoteBanAinx = false;
  var GutovoteBanGuto = false;

  var GeovoteunbanGeo = false;
  var GeovoteunbanAinx = false;
  var GeovoteunbanGuto = false;
  var AinxvoteunbanGeo = false;
  var AinxvoteunbanAinx = false;
  var AinxvoteunbanGuto = false;
  var GutovoteunbanGeo = false;
  var GutovoteunbanAinx = false;
  var GutovoteunbanGuto = false;
  
  var mortesguto = 0;
  var mortesian = 0;
  var mortesgeo = 0;

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  //if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]///////////////////////////////////////////IMPORTANTE PRA PORRA

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //Fazer os comandos do rpg também
  //Pros comandos rpg: Não posso transformar o vetor da resposta em um float, mas posso transformar o elemento do vetor
  //com parsefloat reason[0];
  ///ou parsefloat args[1]
  
  ////////////////AUTO COMANDOS
  /*if(boton === true){
    client.channels.get("440551901218471973").send(`Bot ligado`).catch(console.error);
    client.channels.get("236536761562562560").send(`VOLTEI E AGORA PRA FICAR POR QUE AQUI, AQUI É MEU LUGAR!`).catch(console.error);
    message.channel.send(`+resetbans`).catch(console.error);
  }*/
  
  ////////////////COMANDOS EM CONSTRUÇÃO

  if(command === "addmapa"){
  	let mapa = args.slice(0).join(' ');
	client.channels.get("463460159424036884").send(`${nomemapa}`).catch(console.error);
	message.channel.send(`Mapa adicionado`);
  }

  if(command === "getmapa"){
  	let mapa = args.slice(0);
	client.channels.get("463460159424036884").send(`${nomemapa}`).catch(console.error);
	message.channel.send(`Mapa adicionado`);
  }

  if(command === "contatempo"){
    setTimeout(function(){
      message.delete().catch(O_o=>{});
      }, 500);
    setTimeout(function(){
          setTimeout(function(){
          client.channels.get("458425083292024852").send(`+lembraminuto`).catch(console.error);
          }, 1000);
          setTimeout(function(){
            client.channels.get("455149078213296139").send(`+contatempo`).catch(console.error);
          }, 1000);
        }, 60000);
  }

  if(command === "mata"){
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("mata quem?");
    if(member.user.id === '235871690838638593'){
      if(message.author.id === '235871690838638593'){
        message.channel.send(`Suicídio? tá bom`);  
      }
      const fetched = client.channels.get("460456364297158668").fetchMessages({limit: 99})
      .then(messages => {
          messages.array().forEach( message => {
            if(message.id == "460509375086460949"){
              message.edit(parseInt(message.content) + 1);
              mortesgeo++;
            }
          });
        })
      .catch(console.error);
    }
    else if(member.user.id === '235824104316338176'){
      if(message.author.id === '235824104316338176'){
        message.channel.send(`Suicídio? ok, se você diz`);
      }
      const fetched = client.channels.get("460456364297158668").fetchMessages({limit: 99})
      .then(messages => {
          messages.array().forEach( message => {
            if(message.id == "460518457742458890"){
              message.edit(parseInt(message.content) + 1);
              mortesian++;
            }
          });
        })
      .catch(console.error);
    } 
    else if(member.user.id === '210406496301744128'){
      if(message.author.id === '210406496301744128'){
        message.channel.send(`Suicídio? caralho, de novo?`);
      }
      const fetched = client.channels.get("460456364297158668").fetchMessages({limit: 99})
      .then(messages => {
          messages.array().forEach( message => {
            if(message.id == "460518459542077442"){
              message.edit(parseInt(message.content) + 1);
              mortesguto++;
            }
          });
        })
      .catch(console.error);
    }
    message.channel.send(`${message.author} matou ${member}`);
    contador--;
  }

  

  if(command === "calado"){
  	message.channel.send(".      :cherry_blossom::cherry_blossom:                    :cherry_blossom::cherry_blossom:\n. :cherry_blossom:          :cherry_blossom:　　 :cherry_blossom:         :cherry_blossom:\n:cherry_blossom:.　           :cherry_blossom::cherry_blossom:　　       :cherry_blossom:\n:cherry_blossom:     cala boca meu anjo     :cherry_blossom:\n.　:cherry_blossom:                                   :cherry_blossom:\n.  　  :cherry_blossom:                         :cherry_blossom:\n.   　  　:cherry_blossom:　         :cherry_blossom:\n.　  　          :cherry_blossom: :cherry_blossom:\n.                         :cherry_blossom:");
  	contador--;
  }

  if(command === "mortes"){
    message.channel.send(`Geovanni morreu ${mortesgeo} vezes`)
    message.channel.send(`Ian morreu ${mortesian} vezes`)
    message.channel.send(`Guto morreu ${mortesguto} vezes`)
    contador--;
  }

  if(command === "getmortes"){
    const fetched = client.channels.get("460456364297158668").fetchMessages({limit: 99})
      .then(messages => {
          messages.array().forEach( message => {
            if(message.id == "460509375086460949"){
              mortesgeo = message.content;
          }
          if(message.id == "460518457742458890"){
            mortesian = message.content;
          }
          if(message.id == "460518459542077442"){
            mortesguto = message.content;
          }
          });
        })
      .catch(console.error);
    }

  if(command === "mudajail"){
    if(message.guild.members.get(message.author.id).roles.exists("name", "jail")){
      message.reply(`ei! tira a mão desse comando, meliante!`);
      return;
    }
    let reason = args.slice(0).join(' ');
    if(!reason) reason = "toru";
    message.delete().catch(O_o=>{});
    sairdacadeia = reason;
    const fetched = await client.channels.get("460456364297158668").fetchMessages({limit: 99})
      .then(messages => {
          messages.array().forEach( message => {
            if(message.id == "460458062403338244"){
              message.edit(`${reason}`);
            }
          });
        })
      .catch(console.error);
  }

  if(command === "getjail"){
    const fetched = await client.channels.get("460456364297158668").fetchMessages({limit: 99})
      .then(messages => {
          messages.array().forEach( message => {
            if(message.id == "460458062403338244"){
              sairdacadeia = message.content;
            }
          });
        })
      .catch(console.error);
  }

  if(command === sairdacadeia){
    setTimeout(function(){
      message.delete().catch(O_o=>{});
      }, 100);
    setTimeout(function(){
      client.channels.get("455149078213296139").send(`+saicadeia ${message.author.id}`);
      }, 500);
  }
  
  if(command === "lembraminuto"){
    var fim = false;
    var ordem = 3;
    var del = false;
    var min = false;
    const fetched = await client.channels.get("458425083292024852").fetchMessages({limit: 99})
      .then(messages => {
        messages.array().forEach( message => {
          if(ordem == 3){
            setTimeout(function(){
              message.delete().catch(O_o=>{});
            }, 100);
            ordem--;
          }
          else{
            if(message.content == 0){
              message.delete().catch(O_o=>{});
              del = true;
            }
            else if(del == true){
              if(ordem == 2){
                message.delete().catch(O_o=>{});
                ordem--;
              }
              else if(ordem == 1){
                message.delete().catch(O_o=>{});
                ordem = 2;  
                del = false;
              }
            }
            else{
              if(ordem == 2){
                //if(Number.isInteger(parseInt(message.content))){}
                message.edit(parseInt(message.content) - 1);
                if(message.content == 1){
                  fim = true;
                }
                ordem--;
              }
              else if(fim == true){
                if(ordem == 1){
                  //client.channels.get("451527659692752927").send(`<@210406496301744128>`);
                  client.channels.get("451527659692752927").send(`<@!${message.content}>`);
                  ordem--;
                }
                else if(ordem == 0){
                  client.channels.get("451527659692752927").send(message.content);
                  ordem = 2;
                  fim = false;
                }
              }
              else{
                ordem--;
              }
            }
          }
        });
      })
      .catch(console.error);
  }

  if(command === "contagem"){
    var temporizador = 5;
    message.channel.send(`${temporizador}`);
    for(var z = 1; z < 6; z++){
      setTimeout(function(){
          temporizador--;
          if(temporizador == 0) message.channel.send(`VAI VAI VAI!`);
          else{  
            message.channel.send(`${temporizador}`);
          }
        }, 1000*z);
      } 
    contador--;
  }
  
  if(contador == 0){
    var temporesposta = (Math.floor(Math.random() * 40))*10000;
    var escolhegeo = Math.floor(Math.random() * 30); 
    setTimeout(function(){ 
      var rangeo = [
      "peidei","perdi","+jail ainx","+jail guto","+jail geovanni", "O que é imortaaaal não morre no final...","IAN, SEJA MEU AMIGO, EU NÃO SOU DELINQUENTE, SOU UM CARA CARENTE! EU DORMI NA PRAÇAAA, PENSANDO EM VOCÊEEEEE",
      "sou uma flor linda","+sban kuro","+sban guto", "+sban ainx", "se vocês precisarem de mim, vou estar na minha caverna jogando dota", "cof cof vayne é um lixo cof", "https://www.youtube.com/watch?v=VTHsOSGJHN0",
      "https://goo.gl/QiSGb7","Queria interromper vocês só pra dizer...... Vão se foder","Se eu pudesse pedir nudes, eu pediria pro <@!235871690838638593>... Mas ai eu lembro que sou eu, só preciso me olhar no espelho",
      "+bestnudes","Galera, eu tenho que confessar uma coisa pra vocês... Eu sou um bot. Desculpe decepcioná-los com minha inata inteligência que me faz paracer um humano melhor do que vocês","Qual o seu steamid?",
      "BIRLLLLLLL PORRA AQUI É BOT BOMBADO PORRA WHEY NA VEIA, FRANGO","Eu to pensando em transformar um de vocês na minha waifu", "https://www.youtube.com/watch?v=3XBzeBIWv_Q", "https://www.youtube.com/watch?v=yfGjLIPRgDA",
      "to comprando um zeebo. Alguém quer jogar?","https://giant.gfycat.com/VelvetyFocusedHeifer.webm","+geobot", "+sunban guto", "+sunban ainx", "+sunban geovanni"]
      client.channels.get("236536761562562560").send(rangeo[escolhegeo]).catch(console.error);
    }, temporesposta);
    contador = Math.floor(Math.random() * 34);
    contador--;
  }
  else{
  if(command === "diarios"){
    //Comandos que serão repetidos todos os dias
    message.channel.send(`+resetbans`);
    message.channel.send(`+lembradiario`);
    message.channel.send(`+getjail`);   
    contador--;
  }

  if(command === "flwvlw"){
    message.reply("flwvlw");
    contador--;
  }

  if(command === "resetbans"){
      bangeo = 0;
      banainx = 0;
      banguto = 0;
      unbangeo = 0;
      unbanainx = 0;
      unbanguto = 0;

      GeovoteBanGeo = false;
      GeovoteBanAinx = false;
      GeovoteBanGuto = false;
      AinxvoteBanGeo = false;
      AinxvoteBanAinx = false;
      AinxvoteBanGuto = false;
      GutovoteBanGeo = false;
      GutovoteBanAinx = false;
      GutovoteBanGuto = false;

      GeovoteunbanGeo = false;
      GeovoteunbanAinx = false;
      GeovoteunbanGuto = false;
      AinxvoteunbanGeo = false;
      AinxvoteunbanAinx = false;
      AinxvoteunbanGuto = false;
      GutovoteunbanGeo = false;
      GutovoteunbanAinx = false;
      GutovoteunbanGuto = false;
  }
  if(command === "geobot") {
    message.delete().catch(O_o=>{});
    m = await message.channel.send("me dá a xayah");
    m = await message.channel.send("eu vou me mudar");
    //m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    contador--;
  }
  if(command === "ladydick"){
    message.delete().catch(O_o=>{});
    message.channel.send("Sei que você gosta dela, mas eu só consigo ver ela assim");
    message.channel.send({files: ["http://duellinks.gamea.co/file/imgbank/umi92hxs/yshic0zz/6efdbd958e9ca96a52672a28a6cd53473386dd04_600.jpg"]}).catch(console.error);
    contador--;
  }
  if(command === "edm") {
    client.channels.get("425379621136236567").send('+oi');
    contador--;
  }
  if(command === "ama") {

      message.channel.send("amo vocês");
      contador--;
  }
  if(command === "promessas") {

      message.channel.send("amo vocês");
      contador--;
  }
  ////////////////COMANDOS PRONTOS
  if(command === "aqua") {
    var aqua = [
    "https://i.imgur.com/sSLQEf2.jpg","https://i.imgur.com/8diCT19.png","https://i.imgur.com/26No3rs.jpg","https://i.imgur.com/ccJHKnw.jpg","https://i.imgur.com/UTbfEcc.jpg",
    "https://i.imgur.com/WThkmtc.jpg","https://i.imgur.com/kFMbZ5S.jpg","https://i.imgur.com/Oty87av.jpg","https://i.imgur.com/VCJWDes.jpg","https://i.imgur.com/BZBLaQM.jpg",
    "https://i.imgur.com/VZ0wkMR.jpg","https://i.imgur.com/iyElrZd.jpg","https://i.imgur.com/jWewoQE.jpg","https://i.imgur.com/ASi6v6Y.jpg","https://i.imgur.com/MatjYVr.jpg",
    "https://i.imgur.com/2QOOF79.jpg","https://i.imgur.com/8vOj2M7.jpg","https://i.imgur.com/ar4D9TZ.jpg","https://i.imgur.com/uASOeff.jpg","https://i.imgur.com/W6vNPcj.jpg",
    "https://i.imgur.com/O3rmFra.jpg","https://i.imgur.com/26No3rs.jpg"]
    message.channel.send({files: [aqua[Math.floor(Math.random() * aqua.length)]]});
    contador--;
  }
  if(command === "darkness") {
    var darkness = [
    "https://i.imgur.com/BEj6x6B.png","https://i.imgur.com/lSyf7Wl.jpg","https://i.imgur.com/jpsIBh5.jpg","https://i.imgur.com/ec2luq4.jpg","https://i.imgur.com/6PHqay1.jpg",
    "https://i.imgur.com/0Jc0DFO.jpg","https://i.imgur.com/VsxdEO0.png","https://i.imgur.com/S6o1Xdy.jpg","https://i.imgur.com/y2igB5O.jpg","https://i.imgur.com/KpD209Z.jpg",
    "https://i.imgur.com/1oWIAKf.jpg","https://i.imgur.com/ThFnPsE.png","https://i.imgur.com/MQGX1dz.png"]
    message.channel.send({files: [darkness[Math.floor(Math.random() * darkness.length)]]});
    contador--;
  }
  if(command === "bestnudes") { //// MANDAR NUDES COM CABEÇAS DE MENINAS DE ANIME, IGUAL DA AERITH
    //Ter um nuude do geobot
    message.delete().catch(O_o=>{});
    var bn = [
    "https://i.imgur.com/pK6FaoD.jpg","https://i.imgur.com/QmH7hOU.png","https://i.imgur.com/qKxUo3l.jpg","https://i.imgur.com/XiLMKNk.jpg","https://i.imgur.com/51T9aYG.jpg",
    "https://i.imgur.com/3MlSb1I.jpg","https://i.imgur.com/3jflhmT.jpg","https://i.imgur.com/UtULmkE.jpg","https://i.imgur.com/JnfbAr1.jpg","https://i.imgur.com/I4wa1T8.jpg",
    "https://i.imgur.com/kNdP6Nm.jpg","https://i.imgur.com/H7WViYJ.jpg","https://i.imgur.com/64pdqPJ.jpg","https://i.imgur.com/CxJeFWw.jpg","https://i.imgur.com/ciiaMcy.jpg"]
    message.channel.send({files: [bn[Math.floor(Math.random() * bn.length)]]});
    contador--;
  }
  if(command === "conselho"){
    var conselhos = [
    "para tudo. coloca a mão no pinto. olha essa foto. você sabe o que fazer","tem o comando +............................................................................................................................................................................................................................6xroa","Eu vou comprar cigarros... já volto",
    "só respira, bro", "sabe o que tu deveria fazer? matar a cobra e mostrar o pau. Ou só mostrar o pau mesmo", "coloca um chapéu no pau, manda foto e diz que por ela você tira o chapéu", "mano, você já tentou fazer 6 RoAs? Ajuda nessas horas","se você dormir na praça pensando nela e fazer uma música disso, tudo vai ficar melhor",
    "não quero te ajudar, eu só ajudo quem é legal", "sei lá. Talvez se você se mudar as coisas melhorem", "dizem que cantar é bom! Canta comigo GOTTA GO FAST TUTUTUTU", "já pensou em correr super rápido enquanto canta gotta go fast?", "rapaz, eu não sei o que te dizer. Eu só sei que vou me mudar","você realmente tá pedindo conselho pra um bot? Rapaz, tu tá mal",
    "同性恋者", "+nudes pra te ajudar", "meu kokoro bate forte por você. Você não precisa de mais nada", "roda um d20", "+ladydick", "+nudes olha só que coisa  fofa. Vai dizer que tudo não parece mais fácil depois de ver isso?", "8","+aqua fale por mim, amiga",
    "escreve sobre isso, de verdade. Ajuda a tirar do peito", "cresce um bigode, pega um óculos escuros e começa a falar italiano. Diz que estão te confundindo com alguém", "pinta o cabelo de loiro e vai pra outra cidade. Não vão te reconhecer", "diz que é um bot e só responde se derem o comando certo","passa cerol na mão, assim, assim",
    "se você não quer que ela vá embora, você sempre pode amarrar ela no porão da sua casa...","EU APOSTO QUE VOCÊ ESTARIA FELIZ SE ESTIVESSE BÊBADO. QUER TENTAR?", "Você sabe o que dizem... se a vida te da limões, use eles como munição e atire em quem você não gosta", "corre. só corre.",
    "o Ian tem a respota que tu precisa", "a resposta está dentro do seu coração, você só precisa olhar fundo o suficiente", "geovanni diz ai o que você acha", "na real, o jeito que você trata a si mesmo reflete o jeito que você trata os outros... Você só precisa se tratar como uma vadia também","você já tem o melhor do mundo: minha amizade. Você está bem",
    "todos se sentem mal correndo, mas quantos se sentem mal comendo bolo? Pensa nisso", "eu já ouvi dizer que dormir ajuda.","chorar é bom, faz bem, tira tudo do peito.", "http://www.tudogostoso.com.br/receita/31593-pudim-de-leite-condensado.html",
    "você tá ai reclamando mas já pensou na Aerith? Ela tava de boa no canto dela, ai veio o exército, matou o namorado dela. Depois vieram uns terroristas e sequestraram ela. Pra fechar, um dos inimigos dos terroristas meteu a faca nela. Mesmo assim, ela salvou o mundo de um meteoro. Ela tava fucking morta e salvou o mundo. Você ainda quer reclamar dos seus problemas?",
    "o único conselho que eu posso te dar é pra fazer logo seu testamento. E aproveitando que você vai fazer, deixa seu video-game pra mim.","mano, faz o seguinte. chega lá no meio e grita: `EU SOU O TRIPÉ DO MUNDO!` abaixa a calça, faz um pintocóptero e sai voando de lá", "você não precisa de regras, você tem dinheiro.",
    "eu não manjo muito da vida real, mas eu manjo de the sims. você pode só ficar dando apertos de mão até a pessoa se apaixonar por você. Assim você resolve todos os problemas", "se alguém perguntar, você não me conhece. Não quero a polícia vindo atrás de mim", "faz uma warmog que seus problemas acabam", "eu queria te ajudar mas você não tem 6 RoAs",
    "manda nudes", "发送裸体","...", "faz um filme com essa história, vai vender bem", "A mulan se vestiu de homem e entrou pro exército pra salvar a honra da família. Você não vai se vestir de mulher e ir pra esquina de madrugada pra salvar a sua?","Aprendi algo com o Axel... Se alguém souber demais, taca fogo neles",
    "a vingança nunca é plena. Mata a alma e a envenena.","se tem algo que eu aprendi em todos esses anos sendo bot é que você pode só dormir eternamente e esperar que alguém venha te beijar. Você nunca mais vai ter problemas depois", "pergunta pro @RPBot#4161 que ele é melhor que eu com isso","+bestnudes"
    ]
    var con = Math.floor(Math.random() * conselhos.length);
    m = await message.channel.send(conselhos[con]);
    if(con == 0){
      message.channel.send("+bestnudes");
    }
    else if(con == 1){
      setTimeout(function(){
      m.edit(`OPA, FALEI DEMAIS`);
      }, 3000);
    }
    else if(con == 2){
      botoff = true;
    }
    else if(con == conselhos.length){
      message.channel.send("o melhor conselho que posso te dar é pra apagar esses desenhos de minas underages ai. Eu to monitorando a rede do fbi e eles tão indo pra sua casa");
    }
    contador--;
  }
  if(command === "lembra"){
    let ajuda = args.slice(0).join(' ');
    if(ajuda === "ajuda"){
      message.channel.send(`Só usar +lembra tempo unidade mensagem`);
      message.channel.send(`As unidades podem ser m para minutos, h para horas e d para... para dias. O que você achou que era?`);
    }
    else{
      quem = message.author.id;
      const tempo = parseInt(args[0], 10);
      let escala = args.slice(1).join(' ');
      let reason = args.slice(2).join(' ');
      if(escala[0].localeCompare("m") == 0){
          client.channels.get("458425083292024852").send(`${reason}`).catch(console.error);
          client.channels.get("458425083292024852").send(`${quem}`).catch(console.error);
          client.channels.get("458425083292024852").send(`${tempo}`).catch(console.error);
      }
      else if(escala[0].localeCompare("h") == 0){
          client.channels.get("458425083292024852").send(`${reason}`).catch(console.error);
          client.channels.get("458425083292024852").send(`${quem}`).catch(console.error);
          client.channels.get("458425083292024852").send(`${tempo*60}`).catch(console.error);
       }
      else if(escala[0].localeCompare("d") == 0){
          client.channels.get("455859560503312390").send(`${reason}`).catch(console.error);
          client.channels.get("455859560503312390").send(`${quem}`).catch(console.error);
          client.channels.get("455859560503312390").send(`${tempo}`).catch(console.error);
      }
      else{
        message.channel.send(`+lembra ajuda`);
        return;
      }
      message.reply(`ok, ok, vou te lembrar.`);
    }
    contador--;
  }

  
  if(command === "push"){
    let ch = args[0];
    let reason = args.slice(1).join(' ');
    client.channels.get(`${ch}`).send(`${reason}`).catch(console.error);
  }
  if(command === "lembradiario"){
    var fim = false;
    var ordem = 2;
    var del = false;
    const fetched = await client.channels.get("455859560503312390").fetchMessages({limit: 100})
      .then(messages => {
        //console.log(`${messages.size} messages fetched`);
        messages.array().forEach( message => {
          if(message.content == 0){
            message.delete().catch(O_o=>{});
            del = true;
          }
          else if(del == true){
            if(ordem == 2){
              message.delete().catch(O_o=>{});
              ordem--;
            }
            else if(ordem == 1){
              message.delete().catch(O_o=>{});
              ordem = 2;
              del = false;
            }
          }
          else{
            if(ordem == 2){
              //if(Number.isInteger(parseInt(message.content))){}
              if(message.content == 1){
                fim = true;
              }
              message.edit(parseInt(message.content) - 1);
              ordem--;
            }
            else if(fim == true){
              if(ordem == 1){
                client.channels.get("451527659692752927").send(`<@!${message.content}>`);
                ordem--;
              }
              else if(ordem == 0){
                client.channels.get("451527659692752927").send(message.content);
                ordem = 2;
                fim = false;
              }
            }
            else{
              if(ordem == 0){
                ordem = 3;
              }
              ordem--;
            }
          }
        });
      })
      .catch(console.error);
  }

  if(command === "jeanist"){
    var randj = Math.floor(Math.random() * 3);
    if(randj == 1){
      var bjeanist = ["http://i0.kym-cdn.com/photos/images/newsfeed/001/110/224/33a.jpg", "https://i.imgur.com/UD36u9V.jpg", "https://i.imgur.com/65CDFfV.jpg", "https://i.imgur.com/MAwLdzJ.png"]
      message.channel.send(`The *BEST* JEANIST`);
      message.channel.send({files: [bjeanist[Math.floor(Math.random() * bjeanist.length)]]});
    }
    else if(randj == 2){
      var mjeanist = ["https://i.imgur.com/VAz4VB8.png","https://i.imgur.com/5EqTT59.jpg","https://i.imgur.com/WHlOcHh.jpg"]
      message.channel.send(`The NOT THE *BEST* JEANIST`);
      message.channel.send({files: [mjeanist[Math.floor(Math.random() * mjeanist.length)]]});
    }
    else{
      var wjeanist = ["https://i.imgur.com/6VoIVs8.jpg","https://i.imgur.com/PEMChGB.jpg","https://i.imgur.com/DpdPInt.jpg", "https://i.imgur.com/bV0hE71.jpg", "https://i.imgur.com/xXrg9tp.jpg"]
      message.channel.send(`The *WORST* JEANIST`);
      message.channel.send({files: [wjeanist[Math.floor(Math.random() * wjeanist.length)]]});
    }
    contador--;
  }

  if(command === "parabains"){
    message.channel.send({files: ["https://media3.giphy.com/media/opCVQg51Cxoha/giphy.gif"]});
    contador--;
  }

  if(command === "lixo"){
    message.channel.send({files: ["https://i.imgur.com/SuPw9fx.png"]});
    contador--;
  }

  if(command === "bandori1"){
    
    client.channels.get("455434131053084682").send(`**NOVO EVENTO**`);
    client.channels.get("455434131053084682").send(`Nome: **${bandori1.nome}**`);
    client.channels.get("455434131053084682").send(`Inicio: **${bandori1.inicio}**`);
    client.channels.get("455434131053084682").send(`Fim: **${bandori1.fim}**`);
    client.channels.get("455434131053084682").send(`Boost: **${bandori1.boost}** ${bandori1.boostimage}`);
    client.channels.get("455434131053084682").send(`Música: **${bandori1.musica}**`);
    client.channels.get("455434131053084682").send({files: [bandori1.membros]});
    client.channels.get("455434131053084682").send({files: [bandori1.banner]});
    contador--;
  }

  if(command === "bandori2"){
    client.channels.get("455434131053084682").send(`**NOVO EVENTO**`);
    client.channels.get("455434131053084682").send(`Nome: **${bandori2.nome}**`);
    client.channels.get("455434131053084682").send(`Inicio: **${bandori2.inicio}**`);
    client.channels.get("455434131053084682").send(`Fim: **${bandori2.fim}**`);
    client.channels.get("455434131053084682").send(`Boost: **${bandori2.boost}** ${bandori2.boostimage}`);
    client.channels.get("455434131053084682").send(`Música: **${bandori2.musica}**`);
    client.channels.get("455434131053084682").send({files: [bandori2.membros]});
    client.channels.get("455434131053084682").send({files: [bandori2.banner]});
    contador--;
  }

  if(command === "bandori3"){
    client.channels.get("455434131053084682").send(`**NOVO EVENTO**`);
    client.channels.get("455434131053084682").send(`Nome: **${bandori3.nome}**`);
    client.channels.get("455434131053084682").send(`Inicio: **${bandori3.inicio}**`);
    client.channels.get("455434131053084682").send(`Fim: **${bandori3.fim}**`);
    client.channels.get("455434131053084682").send(`Boost: **${bandori3.boost}** ${bandori3.boostimage}`);
    client.channels.get("455434131053084682").send(`Música: **${bandori3.musica}**`);
    client.channels.get("455434131053084682").send({files: [bandori3.membros]});
    client.channels.get("455434131053084682").send({files: [bandori3.banner]});
    client.channels.get("440551901218471973").send(`Trocar eventos do bandori`);
    contador--;
  }

  //PUSH
  if(command === "pushgeral"){
    let reason = args.slice(0).join(' ');
    message.delete().catch(O_o=>{});
    client.channels.get("236536761562562560").send(`${reason}`).catch(console.error);
    contador--;
  }
  if(command === "cont"){
    message.channel.send(`${contador}`).catch(console.error);
    contador--;
  }
  if(command === "mama") {
    //
    var mamajokes = 23;//yom.concat((Math.floor(Math.random() * mamajokes)+1).toString())
    switch((Math.floor(Math.random() * mamajokes))+1){
      case 1:
        message.channel.send(yomama.mama1);
      break;
      case 2:
        message.channel.send(yomama.mama2);
      break;
      case 3:
        message.channel.send(yomama.mama3);
      break;
      case 4:
        message.channel.send(yomama.mama4);
      break;
      case 5:
        message.channel.send(yomama.mama5);
      break;
      case 6:
        message.channel.send(yomama.mama6);
      break;
      case 7:
        message.channel.send(yomama.mama7);
      break;
      case 8:
        message.channel.send(yomama.mama8);
      break;
      case 9:
        message.channel.send(yomama.mama9);
      break;
      case 10:
        message.channel.send(yomama.mama10);
      break;
      case 11:
        message.channel.send(yomama.mama11);
      break;
      case 12:
        message.channel.send(yomama.mama12);
      break;
      case 13:
        message.channel.send(yomama.mama13);
      break;
      case 14:
        message.channel.send(yomama.mama14);
      break;
      case 15:
        message.channel.send(yomama.mama15);
      break;
      case 16:
        message.channel.send(yomama.mama16);
      break;
      case 17:
        message.channel.send(yomama.mama17);
      break;
      case 18:
        message.channel.send(yomama.mama18);
      break;
      case 19:
        message.channel.send(yomama.mama19);
      break;
      case 20:
        message.channel.send(yomama.mama20);
      break;
      case 21:
        message.channel.send(yomama.mama21);
      break;
      case 22:
        message.channel.send(yomama.mama22);
      break;
      case 23:
        message.channel.send(yomama.mama23);
      break;
      case 24:
        message.channel.send(yomama.mama24);
      break;
    }
    contador--;
  }
  if(command === "donjuan"){
    //
    var numcantadas = 23;
    switch((Math.floor(Math.random() * numcantadas))+1){
      case 1:
        message.channel.send(cantadas.cantada1p1);        
        message.channel.send(cantadas.cantada1p2);
      break;
      case 2:
        message.channel.send(cantadas.cantada2p1);
        message.channel.send(cantadas.cantada2p2);
      break;
      case 3:
        message.channel.send(cantadas.cantada3p1);
        message.channel.send(cantadas.cantada3p2);
      break;
      case 4:
        message.channel.send(cantadas.cantada4p1);
        message.channel.send(cantadas.cantada4p2);
      break;
      case 5:
        message.channel.send(cantadas.cantada5p1);
        message.channel.send(cantadas.cantada5p2);
      break;
      case 6:
        message.channel.send(cantadas.cantada6p1);
        message.channel.send(cantadas.cantada6p2);
      break;
      case 7:
        message.channel.send(cantadas.cantada7p1);
        message.channel.send(cantadas.cantada7p2);
      break;
      case 8:
        message.channel.send(cantadas.cantada8p1);
        message.channel.send(cantadas.cantada8p2);
      break;
      case 9:
        message.channel.send(cantadas.cantada9);
      break;
      case 10:
        message.channel.send(cantadas.cantada10);
      break;
      case 11:
        message.channel.send(cantadas.cantada11p1);
        message.channel.send(cantadas.cantada11p2);
      break;
      case 12:
        message.channel.send(cantadas.cantada12);
      break;
      case 13:
        message.channel.send(cantadas.cantada13);
      break;
      case 14:
        message.channel.send(cantadas.cantada14);
      break;
      case 15:
        message.channel.send(cantadas.cantada15p1);
        message.channel.send(cantadas.cantada15p2);
      break;
      case 16:
        message.channel.send(cantadas.cantada16p1);
        message.channel.send(cantadas.cantada16p2);
      break;
      case 17:
        message.channel.send(cantadas.cantada17p1);
        message.channel.send(cantadas.cantada17p2);
      break;
      case 18:
        message.channel.send(cantadas.cantada18p1);
        message.channel.send(cantadas.cantada18p2);
      break;
      case 19:
        message.channel.send(cantadas.cantada19p1);
        message.channel.send(cantadas.cantada19p2);
      break;
      case 20:
        message.channel.send(cantadas.cantada20);
      break;
      case 21:
        message.channel.send(cantadas.cantada21);
      break;
      case 22:
        message.channel.send(cantadas.cantada22);
      break;
      case 23:
        message.channel.send(cantadas.cantada23);
      break;
      case 24:
        message.channel.send(cantadas.cantada24);
      break;
    }
    //
    contador--;
  }
  if(command === "xingamento") {
    //
    var numxingamentos = 32;
    switch((Math.floor(Math.random() * numxingamentos))+1){
      case 1:
        message.channel.send(xingamento.xing1);
      break;
      case 2:
        message.channel.send(xingamento.xing2);
      break;
      case 3:
        message.channel.send(xingamento.xing3);
      break;
      case 4:
        message.channel.send(xingamento.xing4);
      break;
      case 5:
        message.channel.send(xingamento.xing5);
      break;
      case 6:
        message.channel.send(xingamento.xing6);
      break;
      case 7:
        message.channel.send(xingamento.xing7);
      break;
      case 8:
        message.channel.send(xingamento.xing8);
      break;
      case 9:
        message.channel.send(xingamento.xing9);
      break;
      case 10:
        message.channel.send(xingamento.xing10);
      break;
      case 11:
        message.channel.send(xingamento.xing11);
      break;
      case 12:
        message.channel.send(xingamento.xing12);
      break;
      case 13:
        message.channel.send(xingamento.xing13);
      break;
      case 14:
        message.channel.send(xingamento.xing14);
      break;
      case 15:
        message.channel.send(xingamento.xing15);
      break;
      case 16:
        message.channel.send(xingamento.xing16);
      break;
      case 17:
        message.channel.send(xingamento.xing17);
      break;
      case 18:
        message.channel.send(xingamento.xing18);
      break;
      case 19:
        message.channel.send(xingamento.xing19);
      break;
      case 20:
        message.channel.send(xingamento.xing20);
      break;
      case 21:
        message.channel.send(xingamento.xing21);
      break;
      case 22:
        message.channel.send(xingamento.xing22);
      break;
      case 23:
        message.channel.send(xingamento.xing23);
      break;
      case 24:
        message.channel.send(xingamento.xing24);
      break;
      case 25:
        message.channel.send(xingamento.xing25);
      break;
      case 26:
        message.channel.send(xingamento.xing26);
      break;
      case 27:
        message.channel.send(xingamento.xing27);
      break;
      case 28:
        message.channel.send(xingamento.xing28);
      break;
      case 29:
        message.channel.send(xingamento.xing29);
      break;
      case 30:
        message.channel.send(xingamento.xing30);
      break;
      case 31:
        message.channel.send(xingamento.xing31);
      break;
      case 32:
        message.channel.send(xingamento.xing32);
      break;
    }
    //
    contador--;
  }
  if(command === "oby"){
    message.channel.send({files: ["https://media1.tenor.com/images/f9ac69877ccc8aa7ff398c6a63037753/tenor.gif"]})
    contador--;
  }
  if(command === "nudes") {
    var nudes = [
    "https://imgwpp.imagy.com.br/wp-content/uploads/2017/08/foto-verdadeira-do-negao-da-piroca-picona-sem-censura.jpg",
    "https://c1.staticflickr.com/5/4112/5170590074_714d36db83_b.jpg",
    "https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg",
    "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg",
    "https://img.buzzfeed.com/buzzfeed-static/static/2015-02/18/10/enhanced/webdr09/enhanced-buzz-32241-1424274656-13.jpg",
    "http://www.misucell.com/data/out/9/IMG_326981.jpg",
    "http://i.dailymail.co.uk/i/pix/2018/01/04/14/47BF842200000578-5234837-The_adorable_pup_has_now_become_the_first_unwanted_pet_at_the_so-a-81_1515077199350.jpg",
    "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/31/1024x512/landscape-1438196158-indexgettyimages-175075399.jpg",
    "http://www.dogster.com/wp-content/uploads/2009/12/An-adult-bulldog-and-a-puppy-bulldog.jpg",
    "https://vetpracticemag.com.au/wp-content/uploads/2017/03/puppies.jpg",
    "https://i0.wp.com/baby-animals.net/wp-content/uploads/ngg_featured/Baby-cat-2.jpg",
    "https://t1.ea.ltmcdn.com/pt/images/9/1/3/top_6_de_cachorros_pequenos_de_pelo_curto_8319_300_150.jpg",
    "https://vignette.wikia.nocookie.net/google/images/5/56/Blissfully-cute-baby-animals-cat-kitten-4.jpg",
    "https://hypescience.com/wp-content/uploads/2013/07/215-600x446.jpg",
    "http://wallpaperlepi.com/wp-content/uploads/2014/08/Baby-Cat-Cute-Wallpaper-HD.jpg",
    "https://us.123rf.com/450wm/dannikonov/dannikonov1701/dannikonov170100006/70724632-cute-brown-tabby-kitten-investigating-room-baby-cat-sniff-air-cute-fur-kitten-on-bed-.jpg",
    "https://t2.ea.ltmcdn.com/pt/images/9/1/3/chihuahua_8319_4_600.jpg",
    "https://i.ytimg.com/vi/n4lOzVmBNtE/hqdefault.jpg",
    "https://i.ytimg.com/vi/Zc2GlX__L4g/maxresdefault.jpg"
    ]
    message.channel.send({files: [nudes[Math.floor(Math.random() * nudes.length)]]});
    contador--;
  }
  if(command === "nick") {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("você quer mudar o nick de quem?");
    if(message.member.roles.find("name", "gay")){
      message.reply(`foi mal, você não tem valor aqui`);
    }
    else{
      let reason = args.slice(1).join(' ');
      if(reason.length > 32){
        message.reply(`Esse nome ai tá muito grande, meu pau parece pequeno perto disso... Só deixo se for nick de japonês, nick africano não rola`);
        return;
      }
      message.reply(`ele virou ${reason}`);
      member.setNickname(`${reason}`);
      const fetched = await client.channels.get("460456364297158668").fetchMessages({limit: 99})
      .then(messages => {
          messages.array().forEach( message => {
            if(member.id ==='210406496301744128'){
              if(message.id == "460472076562857985"){
                message.edit(`${reason}`);
              }
            }
            if(member.id ==='235824104316338176'){
              if(message.id == "460472083546112030"){
                message.edit(`${reason}`);
              }
            }
            if(member.id ==='235871690838638593'){
              if(message.id == "460472097102364683"){
                message.edit(`${reason}`);
              }
            }
          });
        })
      .catch(console.error);
    }
    contador--;
  }  
  if(command === "ban"){
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("ei! não dá pra banir isso!");
    if(member.roles.find("name", "gay")){
      message.reply(`já baniram o gay`);
      return;
    }
    if(member.user.id === '235871690838638593'){
      /// Seguinte: Se o geovanni já tiver votado, o ainx e eu não podemos votar
      //se o ainx tiver votado, eu não posso votar
      //Se quem vota é o geovanni
      if(message.author.id === '235871690838638593')
      {
        //Ele já votou? Então não pode de novo
        //Se não votou, ele está votando agora
        if(GeovoteBanGeo === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          GeovoteBanGeo = true;
        }
      }
      if(message.author.id === '235824104316338176'){
        if(AinxvoteBanGeo === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          AinxvoteBanGeo = true;
        }
      }
      if(message.author.id === '210406496301744128'){
        if(GutovoteBanGeo === true){
          message.reply(`você já votou`);
          return;
        }  
        else{
          GutovoteBanGeo = true;
        }
      }
      bangeo++;
      message.channel.send(`ban vote pro geovanni: ${bangeo}'/2'`);
      if(bangeo == 2){
        bangeo = 0;
        member.setNickname(`gay`);
        message.guild.fetchMember('235871690838638593').then(guildMember => {//Acha o membro
          guildMember.removeRole('440348300873302016').catch(console.error);//Tira a role online
          guildMember.addRole('441385373709631488').catch(console.error);//Coloca a role gay
        })
        GeovoteBanGeo = false;
        AinxvoteBanGeo = false;
        GutovoteBanGeo = false;
      }
    }
    else if(member.user.id === '235824104316338176'){
      if(message.author.id === '235871690838638593')
      {
        if(GeovoteBanAinx === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          GeovoteBanAinx = true;
        }
      }
      if(message.author.id === '235824104316338176'){
        if(AinxvoteBanAinx === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          AinxvoteBanAinx = true;
        }
      }
      if(message.author.id === '210406496301744128'){
        if(GutovoteBanAinx === true){
          message.reply(`você já votou`);
          return;
        }  
        else{
          GutovoteBanAinx = true;
        }
      }
      banainx++;
      message.channel.send(`ban vote pro ainx: ${banainx}'/2'`);
      if(banainx == 2){
        banainx = 0;
        member.setNickname(`gay`);
        message.guild.fetchMember('235824104316338176').then(guildMember => {//Acha o membro
          guildMember.removeRole('440348300873302016').catch(console.error);//Tira a role online
          guildMember.addRole('441385373709631488').catch(console.error);//Coloca a role gay
        })
         GeovoteBanAinx = false;
        AinxvoteBanAinx = false;
        GutovoteBanAnix = false;   
      }
    }
    else if(member.user.id === '210406496301744128'){
      if(message.author.id === '235871690838638593')
      {
        if(GeovoteBanGuto === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          GeovoteBanGuto = true;
        }
      }
      if(message.author.id === '235824104316338176'){
        if(AinxvoteBanGuto === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          AinxvoteBanGuto = true;
        }
      }
      if(message.author.id === '210406496301744128'){
        if(GutovoteBanGuto === true){
          message.reply(`você já votou`);
          return;
        }  
        else{
          GutovoteBanGuto = true;
        }
      }
      banguto++;
      message.channel.send(`ban vote pro guto: ${banguto}'/2'`);
      if(banguto == 2){
        banguto = 0;
        member.setNickname(`gay`);
        message.guild.fetchMember('210406496301744128').then(guildMember => {//Acha o membro
          guildMember.removeRole('440348300873302016').catch(console.error);//Tira a role online
          guildMember.addRole('441385373709631488').catch(console.error);//Coloca a role gay
        })
        GeovoteBanGuto = false;
        AinxvoteBanGuto = false;
        GutovoteBanGuto = false;
      }
    }
    contador--;
  }
  if(command === "unban"){
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(member.roles.find("name", "gay") == false){
      message.reply(`Ele não está banido, não dá pra desbanir`);
      return;
    }
    if(member.user.id === '235871690838638593'){
    /// Seguinte: Se o geovanni já tiver votado, o ainx e eu não podemos votar
    //se o ainx tiver votado, eu não posso votar
    //Se quem vota é o geovanni
      if(message.author.id === '235871690838638593')
      {
        //Ele já votou? Então não pode de novo
        //Se não votou, ele está votando agora
        if(GeovoteunbanGeo === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          GeovoteunbanGeo = true;
        }
      }
      if(message.author.id === '235824104316338176'){
        if(AinxvoteunbanGeo === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          AinxvoteunbanGeo = true;
        }
      }
      if(message.author.id === '210406496301744128'){
        if(GutovoteunbanGeo === true){
          message.reply(`você já votou`);
          return;
        }  
        else{
          GutovoteunbanGeo = true;
        }
      }
      unbangeo++;
      message.channel.send(`unban vote pro geovanni: ${unbangeo}'/3'`);
      if(unbangeo == 3){
          unbangeo = 0;
          member.setNickname(`gay desbanido`);
          message.guild.fetchMember('235871690838638593').then(guildMember => {//Acha o membro
            guildMember.removeRole('441385373709631488').catch(console.error);//Tira a role gay
            guildMember.addRole('440348300873302016').catch(console.error);//Coloca a role online
          })
          GeovoteunbanGeo = false;
          AinxvoteunbanGeo = false;
          GutovoteunbanGeo = false;
        }
      }
      else if(member.user.id === '235824104316338176'){
      if(message.author.id === '235871690838638593')
      {
        if(GeovoteunbanAinx === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          GeovoteunbanAinx = true;
        }
      }
      if(message.author.id === '235824104316338176'){
        if(AinxvoteunbanAinx === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          AinxvoteunbanAinx = true;
        }
      }
      if(message.author.id === '210406496301744128'){
        if(GutovoteunbanAinx === true){
          message.reply(`você já votou`);
          return;
        }  
        else{
          GutovoteunbanAinx = true;
        }
      }
      unbanainx++;
      message.channel.send(`unban vote pro ainx: ${unbanainx}'/3'`);
      if(unbanainx == 3){
        unbanainx = 0;
        member.setNickname(`gay desbanido`);
        message.guild.fetchMember('235824104316338176').then(guildMember => {//Acha o membro
          guildMember.removeRole('441385373709631488').catch(console.error);//Tira a role gay
          guildMember.addRole('440348300873302016').catch(console.error);//Coloca a role online
        })
        GeovoteunbanAinx = false;
        AinxvoteunbanAinx = false;
        GutovoteunbanAnix = false;   
      }
    }
      else if(member.user.id === '210406496301744128'){
      if(message.author.id === '235871690838638593')
      {
        if(GeovoteunbanAinx === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          GeovoteunbanAinx = true;
        }
      }
      if(message.author.id === '235824104316338176'){
        if(AinxvoteunbanAinx === true){
          message.reply(`você já votou`);
          return;
        }
        else{
          AinxvoteunbanAinx = true;
        }
      }
      if(message.author.id === '210406496301744128'){
        if(GutovoteunbanAinx === true){
          message.reply(`você já votou`);
          return;
        }  
        else{
          GutovoteunbanAinx = true;
        }
      }
      unbanguto++;
      message.channel.send(`unban vote pro guto: ${unbanguto}'/3'`);
      if(unbanguto == 3){
        unbanguto = 0;
        member.setNickname(`gay desbanido`);
        message.guild.fetchMember('210406496301744128').then(guildMember => {//Acha o membro
          guildMember.removeRole('441385373709631488').catch(console.error);//Tira a role gay
          guildMember.addRole('440348300873302016').catch(console.error);//Coloca a role online
        })
        GeovoteunbanGuto = false;
        AinxvoteunbanGuto = false;
        GutovoteunbanGuto = false;
      }
    }
    contador--;
  }
  if(command === "desafio"){
    var numdesafios = 55;
    var esc = args.slice(0).join(' ');
      if(esc == "random"){
          esc = Math.floor(Math.random() * numdesafios)+1;
          message.channel.send(esc);
      }
      if(esc == "1"){
        message.channel.send(desafios.desafio1p1);
        message.channel.send(desafios.desafio1p2);
      }
      else if(esc == "2"){
        message.channel.send(desafios.desafio2p1);
        message.channel.send(desafios.desafio2p2);
        message.channel.send(desafios.desafio2p3);
        message.channel.send(desafios.desafio2p4);
        message.channel.send(desafios.desafio2p5);
        message.channel.send(desafios.desafio2p6);
        message.channel.send(desafios.desafio2p7);
      }
      else if(esc == "3"){
        message.channel.send(desafios.desafio3p1);
        message.channel.send(desafios.desafio3p2);
        message.channel.send(desafios.desafio3p3);
        message.channel.send(desafios.desafio3p4);
      }
      else if(esc == "4"){
        message.channel.send(desafios.desafio4p1);
        message.channel.send(desafios.desafio4p2);
        message.channel.send(desafios.desafio4p3);
        message.channel.send(desafios.desafio4p4);
        message.channel.send(desafios.desafio4p5);
        message.channel.send(desafios.desafio4p6);
      }
      else if(esc == "5"){
        message.channel.send(desafios.desafio5p1);
        message.channel.send(desafios.desafio5p2);
        message.channel.send(desafios.desafio5p3);
        message.channel.send(desafios.desafio5p4);
        message.channel.send(desafios.desafio5p5);
        message.channel.send(desafios.desafio5p6);
        message.channel.send(desafios.desafio5p7);
      }
      else if(esc == "6"){
        message.channel.send(desafios.desafio6);
      }
      else if(esc == "7"){
        message.channel.send(desafios.desafio7p1);
        message.channel.send(desafios.desafio7p2);
      }
      else if(esc == "8"){
        message.channel.send(desafios.desafio8p1);
        message.channel.send(desafios.desafio8p2);
      }
      else if(esc == "9"){
        message.channel.send(desafios.desafio9);
      }
      else if(esc == "10"){
        message.channel.send(desafios.desafio10);
      }
      else if(esc == "11"){
        message.channel.send(desafios.desafio11p1);
        message.channel.send(desafios.desafio11p2);
        message.channel.send(desafios.desafio11p3);
      }
      else if(esc == "12"){
        message.channel.send(desafios.desafio12);
      }
      else if(esc == "13"){
        message.channel.send(desafios.desafio13);
      }
      else if(esc == "14"){
        message.channel.send(desafios.desafio14p1);
        message.channel.send(desafios.desafio14p2);
      }
      else if(esc == "15"){
        message.channel.send(desafios.desafio15p1);
        message.channel.send(desafios.desafio15p2);
      }
      else if(esc == "16"){
        message.channel.send(desafios.desafio16p1);
        message.channel.send(desafios.desafio16p2);
        message.channel.send(desafios.desafio16p3);
      }
      else if(esc == "17"){
        message.channel.send(desafios.desafio17p1);
        message.channel.send(desafios.desafio17p2);
      }
      else if(esc == "18"){
        message.channel.send(desafios.desafio18);
      }
      else if(esc == "19"){
        message.channel.send(desafios.desafio19p1);
        message.channel.send(desafios.desafio19p2);
        message.channel.send(desafios.desafio19p3);
        message.channel.send(desafios.desafio19p4);
        message.channel.send(desafios.desafio19p5);
      }
      else if(esc == "20"){
        message.channel.send(desafios.desafio20p1);
        message.channel.send(desafios.desafio20p2);
        message.channel.send(desafios.desafio20p3);
        message.channel.send(desafios.desafio20p4);
        message.channel.send(desafios.desafio20p5);
        message.channel.send(desafios.desafio20p6);
        message.channel.send(desafios.desafio20p7);
      }
      else if(esc == "21"){
        message.channel.send(desafios.desafio21p1);
        message.channel.send(desafios.desafio21p2);
        message.channel.send(desafios.desafio21p3);
      }
      else if(esc == "22"){
        message.channel.send(desafios.desafio22);
      }
      else if(esc == "23"){
        message.channel.send(desafios.desafio23p1);
        message.channel.send(desafios.desafio23p2);
        message.channel.send(desafios.desafio23p3);
      }
      else if(esc == "24"){
        message.channel.send(desafios.desafio24p1);
        message.channel.send(desafios.desafio24p2);
        message.channel.send(desafios.desafio24p3);
        message.channel.send(desafios.desafio24p4);
        message.channel.send(desafios.desafio24p5);
        message.channel.send(desafios.desafio24p6);
      }
      else if(esc == "25"){
        message.channel.send(desafios.desafio25p1);
        message.channel.send(desafios.desafio25p2);
      }
      else if(esc == "26"){
        message.channel.send(desafios.desafio26p1);
        message.channel.send(desafios.desafio26p2);
        message.channel.send(desafios.desafio26p3);
        message.channel.send(desafios.desafio26p4);
        message.channel.send(desafios.desafio26p5);
        message.channel.send(desafios.desafio26p6);
        message.channel.send(desafios.desafio26p7);
        message.channel.send(desafios.desafio26p8);
      }
      else if(esc == "27"){
        message.channel.send(desafios.desafio27p1);
        message.channel.send(desafios.desafio27p2);
        message.channel.send(desafios.desafio27p3);
        message.channel.send(desafios.desafio27p4);
      }
      else if(esc == "28"){
        message.channel.send(desafios.desafio28p1);
        message.channel.send(desafios.desafio28p2);
      }
      else if(esc == "29"){
        message.channel.send(desafios.desafio29p1);
        message.channel.send(desafios.desafio29p2);
        message.channel.send(desafios.desafio29p3);
      }
      else if(esc == "30"){
        message.channel.send(desafios.desafio30);
      }
      else if(esc == "31"){
        message.channel.send(desafios.desafio31p1);
        message.channel.send(desafios.desafio31p2);
      }
      else if(esc == "32"){
        message.channel.send(desafios.desafio32);
      }
      else if(esc == "33"){
        message.channel.send(desafios.desafio33p1);
        message.channel.send(desafios.desafio33p2);
        message.channel.send(desafios.desafio33p3);
      }
      else if(esc == "34"){
        message.channel.send(desafios.desafio34);
      }
      else if(esc == "35"){
        message.channel.send(desafios.desafio35p1);
        message.channel.send(desafios.desafio35p2);
        message.channel.send(desafios.desafio35p3);
      }
      else if(esc == "36"){
        message.channel.send(desafios.desafio36);
      }
      else if(esc == "37"){
        message.channel.send(desafios.desafio37);
      }
      else if(esc == "38"){
        message.channel.send(desafios.desafio38p1);
        message.channel.send(desafios.desafio38p2); 
      }
      else if(esc == "39"){
        message.channel.send(desafios.desafio39);
      }
      else if(esc == "40"){
        message.channel.send(desafios.desafio40);
      }
      else if(esc == "41"){
        message.channel.send(desafios.desafio41p1);
        message.channel.send(desafios.desafio41p2);
      }
      else if(esc == "42"){
        message.channel.send(desafios.desafio42p1);
        message.channel.send(desafios.desafio42p2);
      }
      else if(esc == "43"){
        message.channel.send(desafios.desafio43p1);
        message.channel.send(desafios.desafio43p2);
      }
      else if(esc == "44"){
        message.channel.send(desafios.desafio44p1);
        message.channel.send(desafios.desafio44p2);
        message.channel.send(desafios.desafio44p3);
        message.channel.send(desafios.desafio44p4);
        message.channel.send(desafios.desafio44p5);
      }
      else if(esc == "45"){
        message.channel.send(desafios.desafio45p1);
        message.channel.send(desafios.desafio45p2);
        message.channel.send(desafios.desafio45p3);
        message.channel.send(desafios.desafio45p4);
      }
      else if(esc == "46"){
        message.channel.send(desafios.desafio46p1);
        message.channel.send(desafios.desafio46p2);
        message.channel.send(desafios.desafio46p3);
        message.channel.send(desafios.desafio46p4);
        message.channel.send(desafios.desafio46p5);
      }
      else if(esc == "47"){
        message.channel.send(desafios.desafio47p1);
        message.channel.send(desafios.desafio47p2);
      }
      else if(esc == "48"){
        message.channel.send(desafios.desafio48p1);
        message.channel.send(desafios.desafio48p2);
      }
      else if(esc == "49"){
        message.channel.send(desafios.desafio49);
      }
      else if(esc == "50"){
        message.channel.send(desafios.desafio50);
      }
      else if(esc == "51"){
        message.channel.send(desafios.desafio51p1);
        message.channel.send(desafios.desafio51p2);
        message.channel.send(desafios.desafio51p3);
      }
      else if(esc == "52"){
        message.channel.send(desafios.desafio52);
      }
      else if(esc == "53"){
        message.channel.send(desafios.desafio53p1);
        message.channel.send(desafios.desafio53p2);
        message.channel.send(desafios.desafio53p3);
      }
      else if(esc == "54"){
        message.channel.send(desafios.desafio54);
      }
      else if(esc == "55"){
        message.channel.send(desafios.desafio55);
      }
      else if(esc == "76"){
        message.channel.send(desafios.desafio76);
      }
      else if(esc == "77)"){
        message.channel.send(desafios.desafio77p1);
        message.channel.send(desafios.desafio77p2);
        message.channel.send(desafios.desafio77p3);
        message.channel.send(desafios.desafio77p4);
        message.channel.send(desafios.desafio77p5);
        message.channel.send(desafios.desafio77p6);
        message.channel.send(desafios.desafio77p7);
        message.channel.send(desafios.desafio77p8);
        message.channel.send(desafios.desafio77p9);
        message.channel.send(desafios.desafio77p10);
        message.channel.send(desafios.desafio77p11);
      }
      else if(esc == "79)"){
        message.channel.send(desafios.desafio79p1);
        message.channel.send(desafios.desafio79p2);
        message.channel.send(desafios.desafio70p3);
      }
      else{
        message.channel.send(`Os desafios vão de 1 à ${numdesafios}`);
        message.channel.send(`Você também pode escolher o desafio random`);
        return;
      }
    message.channel.send(`Para ver a resposta, só mandar +rd ${esc}`);
    contador--;
  }
  //Respostas das charadas
  if(command === "rd"){
    var resp = args.slice(0).join(' ');
      if(resp == "1"){ message.channel.send("A palavra única que o vigia noturno falou foi 'AMÉM', fazendo com que o chefe acreditasse que ele estava rezando e não dormindo.");}
      if(resp == "2"){ message.channel.send("Se você não conseguiu encontrar o controle remoto, você deve se aproximar da televisão e apertar o botão 'LIGA'.");}
      if(resp == "3"){ message.channel.send("Corte cuidadosamente cada um dos três comprimidos ao meio, separando-os em dois píres, com metade de cada comprimido em cada píres. Você não sabe qual comprimido é qual, mas você está 100% seguro de que cada um dos dois píres contém duas metades de Frescovit e uma metade Melhoril. Dessa forma, você volta para o frasco de Melhoril, pega mais um comprimido, corta ao meio, e adiciona uma metade a cada um dos dois píres. Agora você tem dois píres, cada um contendo duas metades de Melhoril e duas metades de Frescovit. Hoje, você toma os comprimidos de um dos píres, e o outro você reserva para o dia seguinte.");}
      if(resp == "4"){ message.channel.send("Os três irmãos são os ponteiros de um relógio: hora, minuto e segundo.");}
      if(resp == "5"){ message.channel.send("A caixa de prata contém a foto de Cláudia. Se a foto estivesse na caixa de ouro, duas mensagens seriam verdadeiras( as mensagens da caixa de ouro e da caixa de prata). Se a foto estivesse na caixa de bronze, então novamente duas mensagens seriam verdadeiras(as mensagens da caixa de bronze e da caixa de prata).");}
      if(resp == "6"){ message.channel.send("A sala 3. Leões que não comem há 3 meses estão mortos.");}
      if(resp == "7"){ message.channel.send("Quando os dois homens se entreolharam, o homem limpo pensou que seu rosto estava sujo também. O homem sujo, olhando para o rosto do primeiro, pensou que o dele estava limpo.");}
      if(resp == "8"){ message.channel.send("O viajante perguntou 'Qual o caminho que vai para a tua aldeia?'. Ele, então, segue pela estrada que o morador apontou, porque uma pessoa sincera, iria apontar para a aldeia das pessoas que falam a verdade e uma pessoa mentirosa também apontaria para a aldeia das pessoas que falam a verdade, pois sendo um mentiroso, não iria apontar para a sua própria aldeia.");}
      if(resp == "9"){ message.channel.send("Empurre a rolha para dentro da garrafa e depois agite a garrafa de cabeça para baixo até a moeda sair.");
                       message.channel.send({files: ["http://charadaslegais.com.br/e/garrafa.jpg"]});}
      if(resp == "10"){ message.channel.send("Ele espera anoitecer e passa através da primeira porta.");}
      if(resp == "11"){ message.channel.send("2(dois). Se em cada ponte você é obrigado a dar metade dos seus bolos, e você recebe um de volta, logo você ficará com 2 bolos depois de cada ponte.");}
      if(resp == "12"){ message.channel.send("Espero que você. Veja, os seres humanos, assim como os macacos, são primatas.");}
      if(resp == "13"){ message.channel.send("Ele viaja em um círculo e as pernas de fora percorrem 1 quilômetro a mais.");}
      if(resp == "14"){ message.channel.send("Apenas 1. Já que você trouxe apenas um rato e ele não pode procriar sozinho, você terá apenas 1 rato.");}
      if(resp == "15"){ message.channel.send("Sílvio era um bilionário e começou a fazer caridade e doeações, assim, depois de 10 anos, tornou-se um milionário.");}
      if(resp == "16"){ message.channel.send("Apenas 5. As outras pessoas não foram convidadas por ele.");}
      if(resp == "17"){ message.channel.send("Nada. A moeda é tão falsa quanto uma nota de três reais. Em 46 A.C(Antes de Cristo), eles não teriam como saber quantos anos depois Jesus Cristo surgiria.");}
      if(resp == "18"){ message.channel.send("Fábio disse que diria o placar antes do jogo começar, e antes do jogo começar o placar de todo jogo é sempre 0 x 0.");}
      if(resp == "19"){ message.channel.send("Não`, respondeu o diretor. `Uma pessoa normal puxaria a tampinha da banheira`.");}
      if(resp == "20"){ message.channel.send("Felipe disse a Eduardo, `Nós tínhamos concordado que me faria apenas uma pergunta e você já fez.` E foi embora deixando Eduardo admirado.");}
      if(resp == "21"){ message.channel.send("Ele foi demitido por dormir no trabalho.");}
      if(resp == "22"){ message.channel.send("Carlos está visitando seu advogado, que havia sido detido e preso.");}
      if(resp == "23"){ message.channel.send("O prisioneiro pegou uma das pérolas da jarra e escondeu na mão, em seguida engoliu a pérola. Depois ele pegou a outra pérola e mostrou a todos. A pérola era negra, e como a outra pérola foi engolida, as pessoas acharam que ela seria a branca.");
                        message.channel.send("Assim, o rei teve que libertá-lo.");}
      if(resp == "24"){ message.channel.send("João cantou `Parabéns pra você`. Essa música pode ser cantada contendo o nome de qualquer pessoa nela.");}
      if(resp == "25"){ message.channel.send("Este problema é bem famoso e intrigante. O segredo está no enunciado. Como o dono do restaurante devolveu R$5,00, a despesa foi de R$25,00. Como o garçom ficou com R$ 2,00, já temos um total de R$27,00. Por fim, como foi feita a devolução de R$ 3,00(sendo R$1,00 para cada um), totaliza-se R$30,00. Sendo assim, não ocorre o desaparecimento de R$1,00.");}
      if(resp == "26"){ message.channel.send("O rapaz atirava as flechas, depois pintava o alvo em torno delas.");}
      if(resp == "27"){ message.channel.send("Se eles não tivessem saído do ônibus, atrasando a viagem, o ônibus teria passado antes das pedras rolarem montanha abaixo.");}
      if(resp == "28"){ message.channel.send("Paulo tinha 15 anos de 1985 A.C e cinco anos mais tarde, em 1980, ele tinha 20 anos.");}
      if(resp == "29"){ message.channel.send("O matemático fez uma pequena cerca em torno de si e disse que estava do lado de fora.");
                        message.channel.send({files: ["http://charadaslegais.com.br/e/circulo.jpg"]});}
      if(resp == "30"){ message.channel.send("Eles não estavam duelando um contra o outro.");}
      if(resp == "31"){ message.channel.send("Adriana era deficiente visual. Ela estava lendo um livro em Braille.");}
      if(resp == "32"){ message.channel.send("Despeje o suco do segundo copo no quinto copo.");}
      if(resp == "33"){ message.channel.send("Como nenhum dos homens está vestindo a cor do terno que corresponde a seus nomes, e o Sr. Vermelho estava respondendo ao homem de terno azul, então o homem vestindo o terno azul só poderia ser o Sr. Verde, a quem ele respondeu. Nós então sabemos que o Sr. Verde está vestindo um terno azul. Portanto, o Sr. Vermehlo está vestindo um terno verde e Sr. Azul está vestindo um terno vermelho.");}
      if(resp == "34"){ message.channel.send("Ela disse que as pessoas estavam conseguindo fazer ligações sem ter que pagar.");}
      if(resp == "35"){ message.channel.send("Ele deveria ter respondido `4`. A regra para entrar na boate era simples. Quando um número era dito, a pessoa deveria dizer quantas letras possuía aquele número. ");}
      if(resp == "36"){ message.channel.send("36. Olha o número da pergunta");}
      if(resp == "37"){ message.channel.send("A afirmação foi feita em 1 de janeiro. O aniversário de Camila é 31 de dezembro. Camila tinha 17 anos anteontem(30 de dezembro), completou 18 anos em 31 de dezembro. Este ano, em 31 de dezembro ela completará 19 anos. E ano que vem terá 20 anos de idade.");}
      if(resp == "38"){ message.channel.send("Se for uma visita que ela quer receber, ela diz que acabou de chegar, se for uma visita que ela não quer receber, ela diz que está de saída.");}
      if(resp == "39"){ message.channel.send("Ele pendurou o chapéu no cano de sua arma.");}
      if(resp == "40"){ message.channel.send("O papagaio era surdo.");}
      if(resp == "41"){ message.channel.send("Michel é um malabarista. Quando ele chegou à ponte, ele malabarizou o ouro mantendo sempre uma barra no ar.");}
      if(resp == "42"){ message.channel.send("A outra extremidade da corda não está amarrada a nada.");}
      if(resp == "43"){ message.channel.send("Ele disse: `Você vai me condenar a seis anos de prisão.` Se ela fosse verdadeira, então o juiz teria que torná-la falsa sentenciando Leonardo a quatro anos de prisão. Se ela fosse falta, então ele teria que condenar Leonardo a seis anos de prisão, o que a tornaria verdadeira. Ao invés de contradizer a sua própria palavra, o juíz decidiu libertar Leonardo.");}
      if(resp == "44"){ message.channel.send("Tadeu disse: `Quero que minha mãe veja seu neto se balançando em um balanço de ouro`.");}
      if(resp == "45"){ message.channel.send("O garoto lambeu o sorvete e respondeu: `Porque no dia em que eu pegar a moeda de 1 real a brincadeira acaba`.");}
      if(resp == "46"){ message.channel.send("`Sua Majestade`, disse Birbal, `provavelmente não há pessoa mais leal a você que este jardineiro infeliz. Temendo que as pessoas dissessem que você o enforcou por um motivo bobo e questionassem o seu senso de justiça, ele procurou um modo de dar a você uma razão genuína para enforcá-lo.`");}
      if(resp == "47"){ message.channel.send("Luciano estava em um carro conversível. Ele foi baleado de cima para baixo.");}
      if(resp == "48"){ message.channel.send("Ele espera o guarda dormir, então começa a atravessar a ponte. Quando faltarem alguns segundos para o guarda acordar, ele dá meia volta e começa a andar em direção a sua cidade. O guarda vai pensar que ele estava indo para a cidade A e vai mandá-lo de *volta* para a cidade B.");}
      if(resp == "49"){ message.channel.send("Não há fumaça. É um trêm elétrico.");}
      if(resp == "50"){ message.channel.send("MORANGO");}
      if(resp == "51"){ message.channel.send("Liga o 1° interruptor, e espera 5 minutos. Desliga, e liga o 2° interruptor e abre a porta. Se a lâmpada estiver quente, foi o 1° interruptor, se estiver acesa, é o 2°, se não for nenhum dos dois , é o 3° interruptor.");}
      if(resp == "52"){ message.channel.send("Ela estava andando a pé.");}
      if(resp == "53"){ message.channel.send("Quando as pessoas no Exército eram atingidas na cabeça(usando um capacete de pano) elas não ficavam feridas, elas morriam. O pano pode proteger um pouco, mas não o suficiente para parar a maioria das balas. No entanto, com capacetes de aço, a força do tiro era reduzida o suficiente para não matar, mas apenas ferir. Se uma pancada na cabeça não foi fatal, então é considerada um ferimento na cabeça. Assim, antes a maioria dos tiros na cabeça era fatal, agora passaram a ser apenas lesões ou ferimentos na cabeça, mas não mortes.");}
      if(resp == "54"){ message.channel.send(" Eles não tinham umbigo na barriga, assim, eles nunca nasceram, e sim foram criados.");}
      if(resp == "55"){ message.channel.send("O fósforo.");}
      if(resp == "76"){ message.channel.send("0(zero), porque uma pessoa mais alta quer apertar a mão de uma pessoa mais baixa. Mas a pessoa mais baixa não quer apertar a mão de uma pessoa mais alta.");}
      if(resp == "77"){ message.channel.send("Confiando no seu anonimato, Paulo Jr. simplesmente enfiou seu caderno de prova no meio da pilha sobre a mesa do professor, e correu para fora da sala de aula.");}
      if(resp == "79"){ message.channel.send("Ele comprou uma caixa de tinha 100cm de comprimento. Ele então colocou a vara de pescar diagonalmente na caixa e , assim sendo, o pacote todo tinha apenas 100 cm de comprimento.");
                        message.channel.send({files: ["http://charadaslegais.com.br/e/vara.jpg"]});}
    contador--;
  }

  ///////////////COMANDOS RPG




  /*if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    //if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      //return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    //if(!member.bannable) 
      //return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    //await member.ban(reason)
      //.catch(error => message.reply(`Sorry ${message.author} I couldnt ban because of : ${error}`));
    //message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }*/
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldnt delete messages because of: ${error}`));
  }

  //////////////////////////////////////////////////////////////////////REVOLUÇÃO
  if(command === "sban"){
    message.delete().catch(O_o=>{});
    let reason = args.slice(0).join(' ');
    if(reason === "guto"){
      message.guild.fetchMember('210406496301744128').then(guildMember => {//Acha o membro
      guildMember.setNickname(`gay`);//Muda o nome
      guildMember.removeRole('440348300873302016').catch(console.error);//Tira a role online
      guildMember.addRole('441385373709631488').catch(console.error);//Coloca a role cadeia
      })
      GeovoteBanGuto = false;
      AinxvoteBanGuto = false;
      GutovoteBanGuto = false;
      banguto = 0;
    }
    else if(reason === "ainx"){
      message.guild.fetchMember('235824104316338176').then(guildMember => {
      guildMember.setNickname(`gay`);
      guildMember.removeRole('440348300873302016').catch(console.error);
      guildMember.addRole('441385373709631488').catch(console.error);
      })
      GeovoteBanAinx = false;
      AinxvoteBanAinx = false;
      GutovoteBanAinx = false;
      banainx = 0;
    }
    else if(reason === "geovanni"){
      message.guild.fetchMember('235871690838638593').then(guildMember => {
      guildMember.setNickname(`gay`);
      guildMember.removeRole('440348300873302016').catch(console.error);
      guildMember.addRole('441385373709631488').catch(console.error);
      })
      GeovoteBanGeo = false;
      AinxvoteBanGeo = false;
      GutovoteBanGeo = false;
      bangeo = 0;
    }
    else{
      message.channel.send("Só mandar +ban kuro/ainx/guto pra banir");
    }
    contador--;
  }
  if(command === "sunban"){
    message.delete().catch(O_o=>{});
    let reason = args.slice(0).join(' ');
    if(reason === "guto"){
      message.guild.fetchMember('210406496301744128').then(guildMember => {//Acha o membro
      guildMember.setNickname(`guto`);//Muda o nome
      guildMember.removeRole('441385373709631488').catch(console.error);//Tira a role online
      guildMember.addRole('440348300873302016').catch(console.error);//Coloca a role cadeia
      })
      GeovoteunbanGuto = false;
      AinxvoteunbanGuto = false;
      GutovoteunbanGuto = false;
      unbanainx = 0;
    }
    else if(reason === "ainx"){
      message.guild.fetchMember('235824104316338176').then(guildMember => {
      guildMember.setNickname(`ainx`);
      guildMember.removeRole('441385373709631488').catch(console.error);
      guildMember.addRole('440348300873302016').catch(console.error);
      })
      GeovoteunbanAinx = false;
      AinxvoteunbanAinx = false;
      GutovoteunbanAinx = false;
      unbanainx = 0;
    }
    else if(reason === "geovanni"){
      message.guild.fetchMember('235871690838638593').then(guildMember => {
      guildMember.setNickname(`kuro`);
      guildMember.removeRole('441385373709631488').catch(console.error);
      guildMember.addRole('440348300873302016').catch(console.error);
      })
      GeovoteunbanGeo = false;
      AinxvoteunbanGeo = false;
      GutovoteunbanGeo = false;
      unbangeo = 0;
    }
    else{
      message.channel.send("Só mandar +sunban geovanni/ainx/guto pra desbanir");
    }
    contador--;
  }
  if(command === "jail"){
    message.delete().catch(O_o=>{});
    let reason = args.slice(0).join(' ');
    if(reason === "todos"){
      setTimeout(function(){
        message.channel.send(`+jail guto`);
      }, 1000);
      setTimeout(function(){
        message.channel.send(`+jail ainx`);
      }, 1000);
      setTimeout(function(){
        message.channel.send(`+jail geovanni`);
      }, 1000);
    }
    else if(reason === "guto"){
      message.guild.fetchMember('210406496301744128').then(guildMember => {//Acha o membro
      guildMember.setNickname(`meliante`);//Muda o nome
      guildMember.removeRole('440348300873302016').catch(console.error);//Tira a role online
      guildMember.addRole('443065891538862103').catch(console.error);//Coloca a role cadeias
      })
    }
    else if(reason === "ainx"){
      message.guild.fetchMember('235824104316338176').then(guildMember => {
      guildMember.setNickname(`meliante`);
      guildMember.removeRole('440348300873302016').catch(console.error);
      guildMember.addRole('443065891538862103').catch(console.error);
      })
    }
    else if(reason === "geovanni"){
      message.guild.fetchMember('235871690838638593').then(guildMember => {
      guildMember.setNickname(`meliante`);
      guildMember.removeRole('440348300873302016').catch(console.error);
      guildMember.addRole('443065891538862103').catch(console.error);
      })
    }
    else{
      message.channel.send("Só mandar +jail geovanni/ainx/guto/todos pra mandar alguém pra cadeia");
    }
    contador--;
  }
  if(command === "saicadeia"){
    let reason = args.slice(0).join(' ');
    setTimeout(function(){
        message.delete().catch(O_o=>{});
      }, 100);
    if(reason === '210406496301744128'){
      message.guild.fetchMember('210406496301744128').then(guildMember => {//Acha o membro
      setTimeout(function(){
        const fetched = client.channels.get("460456364297158668").fetchMessages({limit: 99})
        .then(messages => {
          messages.array().forEach( message => {
              if(message.id == "460472076562857985"){
                guildMember.setNickname(message.content);
              }
          });
        })
        .catch(console.error);
      }, 5000);
      setTimeout(function(){
        guildMember.removeRole('443065891538862103').catch(console.error);//Tira a role online
      }, 5000);
      setTimeout(function(){
        guildMember.addRole('440348300873302016').catch(console.error);//Coloca a role cadeia
      }, 5000);
      })
    }
    else if(reason === '235824104316338176'){
      message.guild.fetchMember('235824104316338176').then(guildMember => {
      setTimeout(function(){
        const fetched = client.channels.get("460456364297158668").fetchMessages({limit: 99})
        .then(messages => {
          messages.array().forEach( message => {
              if(message.id == "460472083546112030"){
                guildMember.setNickname(message.content);
              }
          });
        })
        .catch(console.error);
      }, 1000);
      setTimeout(function(){
        guildMember.removeRole('443065891538862103').catch(console.error);//Tira a role online
      }, 1000);
      setTimeout(function(){
        guildMember.addRole('440348300873302016').catch(console.error);//Coloca a role cadeia
      }, 1000);
      })
    }
    else if(reason === '235871690838638593'){
      message.guild.fetchMember('235871690838638593').then(guildMember => {
        setTimeout(function(){
          const fetched = client.channels.get("460456364297158668").fetchMessages({limit: 99})
        .then(messages => {
          messages.array().forEach( message => {
              if(message.id == "460472097102364683"){
                guildMember.setNickname(message.content);
              }
          });
        })
        .catch(console.error);
      }, 1000);
      setTimeout(function(){
        guildMember.removeRole('443065891538862103').catch(console.error);//Tira a role online
      }, 1000);
      setTimeout(function(){
        guildMember.addRole('440348300873302016').catch(console.error);//Coloca a role cadeia
      }, 1000);
      })
    }
    contador--;
  }
}//{ do else
});

client.login(config.token);