export const SavedObjectTypes = {
  VISUALIZATION: 'visualization',
  DASHBOARD: 'dashboard'
};

export function getCoreSavedObjectTypes() {
  return [SavedObjectTypes.VISUALIZATION, SavedObjectTypes.DASHBOARD];
}