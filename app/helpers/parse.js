import Ember from 'ember';

export function parse(params/*, hash*/) {
  return Ember.String.htmlSafe(params);
}

export default Ember.Helper.helper(parse);
