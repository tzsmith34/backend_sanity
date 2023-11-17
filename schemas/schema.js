import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:@sanity/base/schema-type';
import testimonials from './testimonials';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default', // Add quotes around 'default'

  // Then proceed to list our document types
  // Add your schema types directly to the "types" array
  types: schemaTypes.concat([testimonials]),
});

