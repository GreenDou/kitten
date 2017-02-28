import * as React from 'react';
import { connect } from 'react-redux';

interface IComponentNameProps { };

interface IComponentNameState { };

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  public render(): any {
    return (<span>Body</span>);
  }
}

export default connect(
  (state) => ({
    // Map state to props
  }),
  {
    // Map dispatch to props
  })(ComponentName);
