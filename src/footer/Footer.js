import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

class Footer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Footer">
    <p className="darkgreen">copyright</p>
      </div>
    )
  }
}
Footer.propTypes = {
}

export default Footer;