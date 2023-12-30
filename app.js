const { App } = require('@slack/bolt');


// Initializes your app with your bot token and signing secret
const app = new App({
  token: "xoxb-2210535565-6416225480785-K23LEoEsAVkUNc1wCDmv1NCx",
  signingSecret: "eed99e1ff3786b366f15c0113b112331",
  appToken: "xapp-1-A06BSKDFNKF-6400070013558-0b77b986e6cf2238dd5e9e859fe216e86188546278c696dd045b81030ec20d58",
  socketMode: true
});

app.event('member_joined_channel', async ({ event, client, logger }) => {
    try {
    if (event.channel == "C0266FRGT") {
  await app.client.chat.postMessage({
    channel: "GLFAEL1SL",
    text: ` There's a new hack clubber who joined the slack! They haven't gone through toriel yet, <@${event.user}>`})
    }

}
  catch(error) {
      console.error(error)
    }
  
  });

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();