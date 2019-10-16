//This polyfills is explicit to IE because @presets/env doesn't support it with "useBuiltIns": "usage" it is necesary to add manually
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';
import 'core-js/features/object/assign';
