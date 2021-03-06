import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', function (assert) {
    visit('/');
    andThen(() => {
        assert.equal(currentURL(), '/rentals', 'Should redirect automatically');
    });

});

test('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(() => {
        assert.equal(currentURL(), '/about', 'Should navigate to about');
    });
});

test('should link to contact information.', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(() => {
        assert.equal(currentURL(), '/contact', 'Should navigate to contact')
    });
});

test('should list available rentals.', function (assert) {
    visit('/');
    andThen(() => {
        assert.equal(find('.listing').length, 3, 'Should see 3 listings');
    });
});

test('should filter the list of rentals by city.', function (assert) {
    visit('/');
    fillIn('.list-filter input', 'Seattle');
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(() => {
        assert.equal(find('.listing').length, 1, 'Should show 1 listings');
        assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'Should contain 1 listings with location Seattle');
    });
});

test('should show details for a selected rental', function (assert) {
});
