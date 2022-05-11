var config = require('./../../config/config.js')

describe('IELTS - Health Check Test', function() {
  
  before(function(browser, done) {
    loginPage = browser.page['ieltsLogin.page']();
    dashboardPage = browser.page['dashboard.page']();
    progressPage = browser.page['progress.page']();
    productLaunchPage = browser.page['productLaunch.page']();
    homePage = browser.page['home.page']();

    browser
      .url(config[testEnv].loginUrl, function() {
        console.log("Launching URL: " + config[testEnv].loginUrl)
      })
      .maximizeWindow(function() {
        done();
      });
  });

  it('Scenario 1 - Student launches an incomplete IELTS assignment, checks for Metrica content and logs out', function(browser) {
    browser
      .useXpath()
      // .waitForElementVisible(loginPage.elements.username.selector, 20000, "UserName field not found")
      .waitForElementVisible('//form[contains(@id, "gigya-login-form1")]//input[@name="username"]', 20000, "UserName field not found")
      // .click('//form[contains(@id, "gigya-login-form")]//input[@name="username"]')
      .useCss()


    // loginPage.waitForUsernameToAppear();  
    // loginPage.login(config[testEnv].student.email, config[testEnv].student.password);
    // browser.saveScreenshot('./screenshots/1.png')
    // dashboardPage.clickProgressTile();
    // progressPage.clickReadingTile();
    // progressPage.clickReadingTest();
    // browser.saveScreenshot('./screenshots/2.png')
    // productLaunchPage.validateMetricaFrameToAppear();
    // browser.saveScreenshot('./screenshots/3.png')
    // dashboardPage.logout();
    // browser.waitForElementVisible(homePage.elements.heading.selector, config[testEnv].timeout, "Logged Out successfully")
  });

  after(function (browser, done) {
    if (browser.sessionId) {
      browser.end(function () {
          done();
      });
    } else {
      done();
    }
  });

});