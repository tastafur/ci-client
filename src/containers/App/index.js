import { connect } from 'react-redux';

import App from './stateless';
import { phonesFetch } from '../../actions/phones';

const mapStateToProps = state => ({
  isLoading: state.common.isLoading,
});

const mapDispatchToProps = dispatch => ({
  phonesFetch: () => dispatch(phonesFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
