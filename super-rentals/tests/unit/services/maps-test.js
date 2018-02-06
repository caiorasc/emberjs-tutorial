import { moduleFor, test } from 'ember-qunit';



moduleFor('service:maps', 'Unit | Service | maps', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function (assert) {
  let service = this.subject();
  assert.ok(service);
});

// moduleForComponent('location-map', 'Integration | Component | location map', {
//   integration: true
// });




// import EmberObject from '@ember/object';

// const DUMMY_ELEMENT = {};

// let MapUtilStub = EmberObject.extend({
//   createMap(element, location) {
//     this.assert.ok(element, 'createMap called with element');
//     this.assert.ok(location, 'createMap called with location');
//     return DUMMY_ELEMENT;
//   }
// });

// moduleFor('service:maps', 'Unit | Service | maps');

// test('should create a new map if one isnt cached for location', function (assert) {
//   assert.expect(4);
//   let stubMapUtil = MapUtilStub.create({ assert });
//   let mapService = this.subject({ mapUtil: stubMapUtil });
//   let element = mapService.getMapElement('San Francisco');
//   assert.ok(element, 'element exists');
//   assert.equal(element.className, 'map', 'element has class name of map');
// });

// test('should use existing map if one is cached for location', function (assert) {
//   assert.expect(1);
//   let stubCachedMaps = EmberObject.create({
//     sanFrancisco: DUMMY_ELEMENT
//   });
//   let stubMapUtil = MapUtilStub.create({ assert });
//   let mapService = this.subject({ cachedMaps: stubCachedMaps });
//   let element = mapService.getMapElement('San Francisco');
//   assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
// });