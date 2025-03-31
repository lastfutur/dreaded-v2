//ping.js

module.exports = async (context) => {
        const { client, m, pantane-speed } = context;


await m.reply(`Pong\n${pantane-speed.toFixed(4)}ms`)

}
