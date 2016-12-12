/**
 * Created by vadim on 12.12.2016.
 */
suite('Tests page "About ..."', function(){
    test('page must contain a link to the contact page', function(){
        assert($('a[href="/contact"]').length);
    });
});
