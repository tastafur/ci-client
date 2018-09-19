import { connect } from 'react-redux';

import { unNormalize } from "../../utils";

import PhoneList from './stateless';

const mapStateToProps = state => ({
  phones: unNormalize(state.phones.phones),
});

export default connect(mapStateToProps)(PhoneList);
