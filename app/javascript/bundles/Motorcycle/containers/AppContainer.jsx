import * as React from "react";
import { connect } from "react-redux";
import { startedPreload } from "../actions/MotorcycleActions";
import MotorcyclesList from "../components/MotorcyclesList";

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.preloadStarted()
  };

  render() {
    return (
      <MotorcyclesList />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    preloadStarted: () => dispatch(startedPreload())
  };
};

export default connect(null, mapDispatchToProps)(AppContainer)
