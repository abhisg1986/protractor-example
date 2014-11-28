

var GoogleTranslatePage = function() {
    // page elements...
    this.url = 'http://translate.google.com/';
    this.languageDropdown = $('#gt-sl-gms');
    this.norwegian = element(by.id(':1l'));
    this.selectedLanguageButton = $('.jfk-button-collapse-left.jfk-button-checked');
    this.sourceTextbox = $('#source');
    this.resultTextbox = $('#result_box span');

    // helper functions...
    this.goto = function() {
        browser.get(this.url);
    };

    this.enterSourceText = function(text) {
        this.sourceTextbox.sendKeys(text);
    };

    this.resultText = function() {
        var result = this.resultTextbox;

        return browser.wait(function() {
            return result.getText();
        });
    };
};

module.exports = new GoogleTranslatePage();