webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(256);


/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	/* eslint react/no-multi-comp: 0 */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-slider/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(34);
	var Slider = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Range = Slider.Range;
	
	var style = { width: 400, margin: 50 };
	
	function log(value) {
	  console.log(value); //eslint-disable-line
	}
	
	var CustomizedRange = React.createClass({
	  displayName: 'CustomizedRange',
	  getInitialState: function getInitialState() {
	    return {
	      lowerBound: 20,
	      upperBound: 40,
	      value: [20, 40]
	    };
	  },
	  onLowerBoundChange: function onLowerBoundChange(e) {
	    this.setState({ lowerBound: +e.target.value });
	  },
	  onUpperBoundChange: function onUpperBoundChange(e) {
	    this.setState({ upperBound: +e.target.value });
	  },
	  onSliderChange: function onSliderChange(value) {
	    log(value);
	    this.setState({
	      value: value
	    });
	  },
	  handleApply: function handleApply() {
	    var _state = this.state,
	        lowerBound = _state.lowerBound,
	        upperBound = _state.upperBound;
	
	    this.setState({ value: [lowerBound, upperBound] });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'label',
	        null,
	        'LowerBound: '
	      ),
	      React.createElement('input', { type: 'number', value: this.state.lowerBound, onChange: this.onLowerBoundChange }),
	      React.createElement('br', null),
	      React.createElement(
	        'label',
	        null,
	        'UpperBound: '
	      ),
	      React.createElement('input', { type: 'number', value: this.state.upperBound, onChange: this.onUpperBoundChange }),
	      React.createElement('br', null),
	      React.createElement(
	        'button',
	        { onClick: this.handleApply },
	        'Apply'
	      ),
	      React.createElement('br', null),
	      React.createElement('br', null),
	      React.createElement(Range, { allowCross: false, value: this.state.value, onChange: this.onSliderChange })
	    );
	  }
	});
	
	var DynamicBounds = React.createClass({
	  displayName: 'DynamicBounds',
	  getInitialState: function getInitialState() {
	    return {
	      min: 0,
	      max: 100
	    };
	  },
	  onSliderChange: function onSliderChange(value) {
	    log(value);
	  },
	  onMinChange: function onMinChange(e) {
	    this.setState({
	      min: +e.target.value || 0
	    });
	  },
	  onMaxChange: function onMaxChange(e) {
	    this.setState({
	      max: +e.target.value || 100
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'label',
	        null,
	        'Min: '
	      ),
	      React.createElement('input', { type: 'number', value: this.state.min, onChange: this.onMinChange }),
	      React.createElement('br', null),
	      React.createElement(
	        'label',
	        null,
	        'Max: '
	      ),
	      React.createElement('input', { type: 'number', value: this.state.max, onChange: this.onMaxChange }),
	      React.createElement('br', null),
	      React.createElement('br', null),
	      React.createElement(Range, { defaultValue: [20, 50], min: this.state.min, max: this.state.max,
	        onChange: this.onSliderChange
	      })
	    );
	  }
	});
	
	var ControlledRange = function (_React$Component) {
	  _inherits(ControlledRange, _React$Component);
	
	  function ControlledRange(props) {
	    _classCallCheck(this, ControlledRange);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.handleChange = function (value) {
	      _this.setState({
	        value: value
	      });
	    };
	
	    _this.state = {
	      value: [20, 40, 60, 80]
	    };
	    return _this;
	  }
	
	  ControlledRange.prototype.render = function render() {
	    return React.createElement(Range, { value: this.state.value, onChange: this.handleChange });
	  };
	
	  return ControlledRange;
	}(React.Component);
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Range\uFF0C`allowCross=false`'
	    ),
	    React.createElement(Range, { allowCross: false, defaultValue: [0, 20], onChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Range\uFF0C`step=20` '
	    ),
	    React.createElement(Range, { step: 20, defaultValue: [20, 20], onBeforeChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Range\uFF0C`step=20, dots` '
	    ),
	    React.createElement(Range, { dots: true, step: 20, defaultValue: [20, 40], onAfterChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Range\uFF0Cdisabled'
	    ),
	    React.createElement(Range, { allowCross: false, defaultValue: [0, 20], onChange: log, disabled: true })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Controlled Range'
	    ),
	    React.createElement(ControlledRange, null)
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Multi Range'
	    ),
	    React.createElement(Range, { count: 3, defaultValue: [20, 40, 60, 80], pushable: true })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Customized Range'
	    ),
	    React.createElement(CustomizedRange, null)
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Range with dynamic `max` `min`'
	    ),
	    React.createElement(DynamicBounds, null)
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=range.js.map