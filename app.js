import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import googleMeetApi from './googleMeetApi.js';

puppeteer.use(StealthPlugin());
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-notifications", "--mute-audio", "--enable-automation"],
        // ignoreDefaultArgs: true
    });

    const context = browser.defaultBrowserContext();
    await context.overridePermissions(
        "https://meet.google.com/", ["microphone", "camera", "notifications"]
    );

    const page = await browser.newPage();
    
    // going to sign-in page
    await googleMeetApi.authentication(page, "assistantaurora563@gmail.com", "dsfsdfsdd");
    
    // going to Meet after signing in
    await googleMeetApi.meetLobby(page, "sff-kacq-xhi");

    // turn off cam using Ctrl+E
    await googleMeetApi.turnOffCam(page);

    //turn off mic using Ctrl+D
    await googleMeetApi.turnOffMic(page);

    
    // browser.close();
})();