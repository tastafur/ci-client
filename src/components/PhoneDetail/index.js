import { connect } from 'react-redux';

import PhoneDetail from './stateless';

const mapStateToProps = state => ({
  phones: state.phones.phones,
});

/*const mapDispatchToProps = dispatch => ({
  askForPersonSubmit: () => dispatch(askForPersonSubmit())
});*/

export default connect(mapStateToProps)(PhoneDetail);
