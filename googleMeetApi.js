
// authentication
async function authentication(page, email, password, timeout = 10000) {
    const navigationPromise = page.waitForNavigation();
  await page.goto('https://accounts.google.com/');
  await navigationPromise;

  await page.waitForSelector('input[type="email"]');
  await page.click('input[type="email"]');
  await page.keyboard.type(email);

  await page.waitForSelector('#identifierNext');
  await page.click('#identifierNext');

  await page.waitForTimeout(3500);
  await page.keyboard.type(password);

  await page.keyboard.press('Enter');
  await navigationPromise;
}

// meet lobby 
async function meetLobby(page, meetCode, timeout = 10000) {
  const navigationPromise = page.waitForNavigation();
  await page.waitForTimeout(2500);
  await page.goto("https://meet.google.com/" + meetCode + "/?pli=1");
  await navigationPromise;
}

// turn off cam using Ctrl+E
async function turnOffCam(page, timeout = 10000) {
    await page.waitForTimeout(8000);
    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyE');
    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(2000);
}

// turn off mic using Ctrl+D
async function turnOffMic(page, timeout = 10000) {
    await page.waitForTimeout(1000);
    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyD');
    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(2000);
}

// join meet

// accept all tips 

// open chat section 

export default {
    authentication,
    meetLobby,
    turnOffCam,
    turnOffMic
};