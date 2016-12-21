/**
 * Created by vadim on 12.12.2016.
 */
suite('Global Tests', function () {
    test('This page has a valid header', function () {
        assert(document.title && document.title.match(/\S/) &&
            document.title.toLocaleUpperCase() !== 'TODO');
    });
});