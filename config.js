const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~ffd0cTNodacfdc5563f2f8558aa9189f6576', //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL,//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://linkbio.co/iLyAsKm",
    CHANNEL : "https://chat.whatsapp.com/DCu6F9eirLvCo0gB8PgbTw",
    PMB_MSG : "pm msgs isn't allowed",
    PMBC_MSG : "pm call isn't allowed",
    AUTOMUTE_MSG : "_group will been muted at @time_",
    AUTOUNMUTE_MSG : "_group will unmute at @time_",
    GIT : "www.instagram.com/the_km4",
    WAGRP : 'www.instagram.com/the_km4',
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
    REACT : toBool(process.env.REACT || "false"),
    AUTO_BIO : toBool(process.env.AUTO_BIO || "false"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "false"),
    AUTO_CHAT_PM : toBool(process.env.AUTO_CHAT_PM || "false"),
    AUTO_CHAT_GRP : toBool(process.env.AUTO_CHAT_GRP || "false"),
    FOOTER : process.env.FOOTER || "ɪʟʏᴀs,ᴋᴍ",
    PASSWORD : process.env.PASSWORD || 'kamali-bot~md',
    WARNCOUND : process.env.WARNCOUND || 3,
    ALIVE_DATA : process.env.ALIVE_DATA || "$text>_iam alive now &sender_",
    BOT_INFO : process.env.BOT_INFO || "212625451590;KAMALI-BOT-MD;ILYAS;https://telegra.ph/file/c6ba7236049356210a8b5.jpg",
    WORKTYPE : process.env.WORKTYPE || "public",
    PREFIX : process.env.PREFIX || false,
    WELCOME_MSG : process.env.WELCOME_MSG || "$text>_hey bro/sis_ *&user*\nthanks for join;$image>&pp;",
    EXIT_MSG : process.env.EXIT_MSG || "$text>_goodbye _ *&user*;$image>&pp;",
    LANG : process.env.LANG || "en",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us, jid2@g.us",//set chat similarly
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    AUDIO_DATA : process.env.AUDIO_DATA || "ɪʟʏᴀs;ᴋᴍ;https://telegra.ph/file/6aff079fb273e2d122a3c.jpg",
    STICKER_DATA : process.env.AUDIO_DATA || "kamali;bot",
    INSTAGRAM :  process.env.INSTAGRAM || "nullX",
    CAPTION : process.env.CAPTION || "created by www.instagram.com/the_km4",
    SUDO : process.env.SUDO || "212625451590"
};
