import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../../components/commons/Loader';

import '../../styles/bootstrap.scss';
import './style.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    phonesFetch: PropTypes.func,
    isLoading: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { phonesFetch } = this.props;
    phonesFetch();
  }

  render() {
    const { children, isLoading } = this.props;
    return (
      <div className={'app'}>
        { isLoading &&
          <Loader customStyle={'login'} />
        }
        { !isLoading &&
          children
        }
      </div>
    );
  }
}
