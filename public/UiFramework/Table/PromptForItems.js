import React from 'react';

export class PromptForItems extends React.Component {
  render() {
    return <div className="kuiPanel kuiPanel--centered kuiPanel--withHeader">
      <div className="kuiPromptForItems">
        <div className="kuiPromptForItems__message">
          Looks like you don&rsquo;t have any { this.props.title }. Let&rsquo;s add some!
        </div>

        <div className="kuiPromptForItems__actions">
          <a
              className="kuiButton kuiButton--primary kuiButton--iconText"
              onClick={ this.props.onAdd }
          >
            <span className="kuiButton__icon kuiIcon fa-plus"></span>
            Add a dashboard
          </a>
        </div>
      </div>
    </div>
  }
}

PromptForItems.PropTypes = {
  title: React.PropTypes.string,
  onAdd: React.PropTypes.func
}