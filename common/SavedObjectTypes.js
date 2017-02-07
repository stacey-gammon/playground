export const SavedObjectTypes = {
  VISUALIZATION: 'visualization',
  DASHBOARD: 'dashboard'
};

export function allSavedObjectTypes() {
  return [SavedObjectTypes.VISUALIZATION, SavedObjectTypes.DASHBOARD];
}