/**
 *
 * @param item {SavedObject}
 * @param visTypes {}
 * @returns {*|undefined}
 */
export function getVisualizationType(item, visTypes) {
  let typeName = item.typeName;
  if (item.visState) {
    typeName = JSON.parse(item.visState).type;
  }

  return visTypes.byName[typeName];
}