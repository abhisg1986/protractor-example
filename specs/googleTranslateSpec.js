var translatePage = require('../pages/googleTranslatePage.js');

describe ('google translate test with pages objects', function() {
    xit('should translate Spanish to English', function() {
        // given at the translate pages...
        translatePage.goto();

        // when select a language...
        translatePage.selectSourceLanguage('Spanish');

        // and entering word in selected language...
        translatePage.enterSourceText('queso');

        // then word is translated to english...
        expect(translatePage.translation()).toBe('cheese');
    });
});

