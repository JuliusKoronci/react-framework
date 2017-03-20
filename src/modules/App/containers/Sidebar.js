// @flow
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../scss/sidebar.css';

class Sidebar extends Component {

  static displayName = 'Sidebar';

  static defaultProps = {};

  static propTypes = {};

  render () {
    return (
      <aside className={styles.sidebar}>
				<h1>Page Title</h1>
				<ul>
					<li>
						<a href="#">Nav 1 link</a>
					</li>
				</ul>
			</aside>
    );
  }
}

function _mapStateToProps (state) {
  return {
    state: state
  };
}
function _mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(_mapStateToProps, _mapDispatchToProps)(Sidebar);
