import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Panel } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import { reslugify } from '../../utils';

import './style.scss';

export default class PhoneDetail extends Component {
  static propTypes = {
    phones: PropTypes.object,
    params: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      phone: props.phones[reslugify(props.params.phoneName)]
    }
  }
  render() {
    const { phone } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  Mobile: {phone.DeviceName}
                  <img
                    className={'icons-os'}
                    src={`http://localhost:3000/${phone.icon}.png`}
                  />
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                {
                  Object.keys(phone).map((key, index) =>
                    (key === 'DeviceName' || index > 7) ? null : <p key={index}>{key + ': ' + phone[key]}</p>)
                }
              </Panel.Body>
            </Panel>
            <LinkContainer to={'/phone-list'}>
              <img
                className={'icons-os icon-arrow button-back'}
                src={`http://localhost:3000/icon-back.png`}
              />
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    );
  }
}
