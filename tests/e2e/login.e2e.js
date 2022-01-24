module.exports = {
  'login test': function (browser) {
    browser
      .url(process.env.VUE_DEV_SERVE_URL + 'login')
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'TaskAgile')
      .end()
  }
}