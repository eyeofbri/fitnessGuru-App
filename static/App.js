"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("content");

var InitialOutput = function (_React$Component) {
  _inherits(InitialOutput, _React$Component);

  function InitialOutput() {
    _classCallCheck(this, InitialOutput);

    return _possibleConstructorReturn(this, (InitialOutput.__proto__ || Object.getPrototypeOf(InitialOutput)).apply(this, arguments));
  }

  _createClass(InitialOutput, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        " This is a placeholder for the initial output section."
      );
    }
  }]);

  return InitialOutput;
}(React.Component);

var History = function (_React$Component2) {
  _inherits(History, _React$Component2);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  _createClass(History, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        " This is a placeholder for the history section."
      );
    }
  }]);

  return History;
}(React.Component);

var UserGoals = function (_React$Component3) {
  _inherits(UserGoals, _React$Component3);

  function UserGoals() {
    _classCallCheck(this, UserGoals);

    return _possibleConstructorReturn(this, (UserGoals.__proto__ || Object.getPrototypeOf(UserGoals)).apply(this, arguments));
  }

  _createClass(UserGoals, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        " This is a placeholder for the goals section."
      );
    }
  }]);

  return UserGoals;
}(React.Component);

var FoodSearch = function (_React$Component4) {
  _inherits(FoodSearch, _React$Component4);

  function FoodSearch() {
    _classCallCheck(this, FoodSearch);

    return _possibleConstructorReturn(this, (FoodSearch.__proto__ || Object.getPrototypeOf(FoodSearch)).apply(this, arguments));
  }

  _createClass(FoodSearch, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        " ",
        "You can look up the calories for any food here.",
        React.createElement("br", null)
      );
    }
  }]);

  return FoodSearch;
}(React.Component);

var UpcSearch = function (_React$Component5) {
  _inherits(UpcSearch, _React$Component5);

  function UpcSearch() {
    _classCallCheck(this, UpcSearch);

    return _possibleConstructorReturn(this, (UpcSearch.__proto__ || Object.getPrototypeOf(UpcSearch)).apply(this, arguments));
  }

  _createClass(UpcSearch, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        " ",
        React.createElement("br", null),
        "You can also search by UPC Code.",
        React.createElement("br", null)
      );
    }
  }]);

  return UpcSearch;
}(React.Component);

var Modal = function (_React$Component6) {
  _inherits(Modal, _React$Component6);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var modalStyle = {
        display: "block"
      };

      // Render nothing if the "show" prop is false
      if (!this.props.show) {
        return null;
      }
      return React.createElement(
        "div",
        { className: "modal", style: modalStyle },
        React.createElement(
          "div",
          { className: "modal-dialog" },
          React.createElement(
            "div",
            { className: "modal-content" },
            React.createElement(
              "div",
              { className: "modal-header" },
              React.createElement(
                "button",
                {
                  type: "button",
                  onClick: this.props.onClose,
                  className: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true"
                },
                "\xD7"
              ),
              React.createElement(
                "h4",
                { className: "modal-title" },
                "Add Food to Calorie Tracker"
              )
            ),
            React.createElement(
              "div",
              { className: "modal-body" },
              this.props.children,
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-lg-2" },
                    React.createElement(
                      "label",
                      { htmlFor: "inputItemName", className: "control-label" },
                      "Item Name"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-lg-10" },
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "inputItemName",
                      placeholder: "e.g. T Bone Steak"
                    })
                  )
                ),
                React.createElement("br", null),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-lg-2" },
                    React.createElement(
                      "label",
                      { htmlFor: "inputBrandName", className: "control-label" },
                      "Brand Name"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-lg-10" },
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "inputBrandName",
                      placeholder: "e.g. Peter Leuger's Steak House"
                    })
                  )
                ),
                React.createElement("br", null),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-lg-2" },
                    React.createElement(
                      "label",
                      { htmlFor: "inputCalories", className: "control-label" },
                      "Calories"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-lg-10" },
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "inputCalories",
                      placeholder: "e.g. 1050"
                    })
                  )
                ),
                React.createElement("br", null),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-lg-2" },
                    React.createElement(
                      "label",
                      {
                        htmlFor: "inputServingSizeQuantity",
                        className: "control-label"
                      },
                      "Serving Size Quantity"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-lg-10" },
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "inputServingSizeQuantity",
                      placeholder: "e.g. 1"
                    })
                  )
                ),
                React.createElement("br", null),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-lg-2" },
                    React.createElement(
                      "label",
                      {
                        htmlFor: "inputServingSizeUnit",
                        className: "control-label"
                      },
                      "Serving Size Unit"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-lg-10" },
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "inputServingSizeUnit",
                      placeholder: "e.g. serving"
                    })
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "modal-footer" },
              React.createElement(
                "button",
                {
                  onClick: this.props.onClose,
                  type: "button",
                  className: "btn btn-default",
                  "data-dismiss": "modal"
                },
                "Close"
              ),
              React.createElement(
                "button",
                { type: "button", className: "btn btn-primary" },
                "Save changes"
              )
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(React.Component);

Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};

var CalorieTracker = function (_React$Component7) {
  _inherits(CalorieTracker, _React$Component7);

  function CalorieTracker(props) {
    _classCallCheck(this, CalorieTracker);

    var _this7 = _possibleConstructorReturn(this, (CalorieTracker.__proto__ || Object.getPrototypeOf(CalorieTracker)).call(this, props));

    _this7.state = { isOpen: false };
    _this7.toggleModal = _this7.toggleModal.bind(_this7);
    return _this7;
  }

  _createClass(CalorieTracker, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(FoodSearch, null),
        React.createElement("br", null),
        React.createElement(
          "div",
          { className: "form-group has-warning " },
          React.createElement(
            "label",
            { className: "control-label", htmlFor: "inputWarning" },
            "Food Search:",
            " "
          ),
          React.createElement("input", { size: "100", className: "" }),
          React.createElement(
            "a",
            null,
            React.createElement("i", { className: "fa fa-search", "aria-hidden": "true", type: "button" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(UpcSearch, null),
            React.createElement("br", null),
            React.createElement(
              "label",
              { className: "control-label", htmlFor: "inputWarning" },
              "UPC Search: \xA0"
            ),
            React.createElement("input", { size: "100", className: "" }),
            React.createElement(
              "a",
              null,
              React.createElement("i", { className: "fa fa-search", "aria-hidden": "true", type: "button" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("br", null),
              "Keep track of your caloric intake here!",
              React.createElement(
                "div",
                { className: "CalorieTracker" },
                React.createElement(
                  "button",
                  {
                    type: "submit",
                    onClick: this.toggleModal,
                    href: "#",
                    className: "btn btn-primary btn-sm"
                  },
                  "add food"
                ),
                React.createElement(Modal, { show: this.state.isOpen, onClose: this.toggleModal }),
                React.createElement(
                  "table",
                  { className: "table table-striped table-hover " },
                  React.createElement(
                    "thead",
                    null,
                    React.createElement(
                      "tr",
                      null,
                      React.createElement(
                        "th",
                        null,
                        "Item Name"
                      ),
                      React.createElement(
                        "th",
                        null,
                        "Brand Name"
                      ),
                      React.createElement(
                        "th",
                        null,
                        "Calories"
                      ),
                      React.createElement(
                        "th",
                        null,
                        "Serving Size Quantity"
                      ),
                      React.createElement(
                        "th",
                        null,
                        "Serving Size Unit"
                      )
                    )
                  ),
                  React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                      "tr",
                      null,
                      React.createElement(
                        "td",
                        { id: "contentItemName" },
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        { id: "contentBrandName" },
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        { id: "contentCalories" },
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        { id: "contentServingSizeQ" },
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        { id: "contentServingSizeU" },
                        "Column content"
                      )
                    ),
                    React.createElement(
                      "tr",
                      null,
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      )
                    ),
                    React.createElement(
                      "tr",
                      { className: "info" },
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      )
                    ),
                    React.createElement(
                      "tr",
                      { className: "success" },
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      )
                    ),
                    React.createElement(
                      "tr",
                      { className: "danger" },
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      )
                    ),
                    React.createElement(
                      "tr",
                      { className: "warning" },
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      )
                    ),
                    React.createElement(
                      "tr",
                      { className: "active" },
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      ),
                      React.createElement(
                        "td",
                        null,
                        "Column content"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CalorieTracker;
}(React.Component);

var Dashboard = function (_React$Component8) {
  _inherits(Dashboard, _React$Component8);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "jumbotron" },
            React.createElement(
              "div",
              { className: "welcome", id: "welcome" },
              React.createElement(
                "h1",
                { className: "welcome" },
                "Welcome George"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-4" },
            React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h2",
                  null,
                  "Initial Output"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "div",
                  { className: "InitialOutput" },
                  "Panel content",
                  React.createElement(InitialOutput, null)
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-8" },
            React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h2",
                  null,
                  "George's Goals"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "div",
                  { className: "userGoals" },
                  "Panel content",
                  React.createElement(UserGoals, null)
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-4" },
            React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h2",
                  null,
                  "History"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "div",
                  { className: "history" },
                  "Panel content",
                  React.createElement(History, null)
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-8" },
            React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h2",
                  null,
                  "Calorie Tracker"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "div",
                  { className: "calorieTracker" },
                  React.createElement(CalorieTracker, null)
                )
              )
            )
          )
        )
      ) //<!-- close container -->
      ;
    }
  }]);

  return Dashboard;
}(React.Component);

ReactDOM.render(React.createElement(Dashboard, null), contentNode); // Render the component inside the content Node