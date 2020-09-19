Feature('login');

Scenario('test the Jiunge lOgin page ', (I) => {
I.amOnPage();
I.click('//*[@id="logIn"]');
I.fillField('//form/div/div/div/input','tmehrotra@abnosoftwares.com');
I.click('Password');
I.fillField('Password','12345678');
I.click('//*[@id="studentLogin"]/div/div/div[4]/button');
I.saveScreenshot('debug.png',true);
I.seeElement('//*[@id="hCart"]');
});
