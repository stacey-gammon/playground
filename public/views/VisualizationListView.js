import React from 'react';
import { VisualizationTable } from '../Components/Table/VisualizationTable';
import { PromptForItems } from '../UiFramework/Table/PromptForItems';
import { VisualizationActions } from '../actions/VisualizationActions';

export class VisualizationListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    VisualizationActions.fetchVisualizations();
  }

  render() {
    const { visualizations } = this.props;
    return (
        <div className="dashboard_list">

          <div className="dashboard_list__body">
            {
              visualizations.length > 0
                  ? <VisualizationTable visualizations={visualizations}/>
                  : <PromptForItems title="visualizations" onAdd={() => {}}/>
            }
          </div>
        </div>
    );
  }
}

VisualizationListView.propTypes = {
  visualizations: React.PropTypes.array
};