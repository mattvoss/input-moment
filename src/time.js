import cx from 'classnames';
import React, { Component } from 'react';
import InputSlider from 'react-input-slider';

export default class extends Component {
  changeHours = pos => {
    const m = this.props.moment;
    m.hours(parseInt(pos.x, 10));
    this.props.onChange(m);
  };

  changeMinutes = pos => {
    const m = this.props.moment;
    m.minutes(parseInt(pos.x, 10));
    this.props.onChange(m);
  };

  render() {
    const m = this.props.moment;

    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="showtime">
          <span className="time">{m.format('hh')}</span>
          <span className="separater">:</span>
          <span className="time">{m.format('mm')}</span>
          <span 
            className="am"
            style={{
              marginTop: (m.format('a') === 'am') ? '0px' : '40px'
            }}
          >
            {m.format('A')}
          </span>
        </div>

        <div className="sliders">
          <div className="time-text">Hours:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={23}
            x={m.hour()}
            onChange={this.changeHours}
          />
          <div className="time-text">Minutes:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={59}
            x={m.minute()}
            onChange={this.changeMinutes}
          />
        </div>
      </div>
    );
  }
}
