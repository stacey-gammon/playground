/**
 * @typedef {Object} ColumnDefinition
 *
 * @property {string} id - Unique id to represent this column.
 * @property {function|string} sortBy - Either a string representing a field on the object
 * to sort by, or a function that takes the object and returns a sortable value.
 * @property {Element|string} title - Either an element, for more complex column headers, or
 * a string.
 * @property {function} getRow - Either a string representing a field on the object, or
 * a function. Used to display rows.
 * @property {string=} className - custom className to use for the column header.
 * @property {boolean=true} isSortable - whether or not this column should be sortable.
 */
