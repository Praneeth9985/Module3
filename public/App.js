"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function InventoryTable(props) {
  var productRows = props.products.map(function (product) {
    return React.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    className: "bordered-table"
  }, "Product Name"), React.createElement("th", {
    className: "bordered-table"
  }, "Price"), React.createElement("th", {
    className: "bordered-table"
  }, "Category"), React.createElement("th", {
    className: "bordered-table"
  }, "Image"))), React.createElement("tbody", null, productRows));
}

function ProductRow(props) {
  var product = props.product;
  return React.createElement("tr", null, React.createElement("td", {
    className: "bordered-table"
  }, product.productName), React.createElement("td", {
    className: "bordered-table"
  }, '$' + product.pricePerUnit), React.createElement("td", {
    className: "bordered-table"
  }, product.category), React.createElement("td", {
    className: "bordered-table"
  }, " ", React.createElement("a", {
    href: product.imageUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, "View")));
}

var ProductAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductAdd, _React$Component);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductAdd).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var product = {
        category: form.category.value,
        pricePerUnit: parseFloat(form.pricePerUnit.value.replace('$', '')),
        productName: form.productName.value,
        imageUrl: form.imageUrl.value
      };
      this.props.createProduct(product);
      form.category.value = 'Shirts';
      form.pricePerUnit.value = "$";
      form.productName.value = "";
      form.imageUrl.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        id: "inventoryForm",
        name: "productAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("table", {
        className: "formTable"
      }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, "Category"), React.createElement("td", {
        className: "formTableData"
      }, "Price Per Unit")), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, React.createElement("select", {
        id: "categoryList",
        name: "category"
      }, React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), React.createElement("option", {
        value: "Accessories"
      }, "Accessories"))), React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "pricePerUnit",
        defaultValue: "$"
      }))), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, "Product Name"), React.createElement("td", {
        className: "formTableData"
      }, "Image URL")), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "productName"
      })), React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "imageUrl"
      }))))), React.createElement("button", {
        id: "addButton"
      }, "Add Product"));
    }
  }]);

  return ProductAdd;
}(React.Component);

function jsonDateReviver(key, value) {
  return value;
}

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query) {
    var variables,
        response,
        body,
        result,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            variables = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            _context3.prev = 1;
            _context3.next = 4;
            return fetch('graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.text();

          case 7:
            body = _context3.sent;
            result = JSON.parse(body, jsonDateReviver);
            return _context3.abrupt("return", result.data);

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            alert("Error in sending data to server: ".concat(_context3.t0.message));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

var Inventory = /*#__PURE__*/function (_React$Component2) {
  _inherits(Inventory, _React$Component2);

  function Inventory() {
    var _this2;

    _classCallCheck(this, Inventory);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Inventory).call(this));
    _this2.state = {
      products: []
    };
    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Inventory, [{
    key: "createProduct",
    value: function () {
      var _createProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(product) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "mutation productAdd($product: ProductInputs!) {\n\t\t\tproductAdd(product: $product) {\n\t\t\t\tid\n\t\t\t}\n\t\t}";
                _context.next = 3;
                return graphQLFetch(query, {
                  product: product
                });

              case 3:
                data = _context.sent;

                if (data) {
                  this.loadData();
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createProduct(_x2) {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "query {\n\t\t\tproductList {\n\t\t\t\tid category productName pricePerUnit\n\t\t\t\timageUrl\n\t\t\t}\n\t\t}";
                _context2.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context2.sent;

                if (data) {
                  this.setState({
                    products: data.productList
                  });
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement("div", {
        id: "tableHeader"
      }, "Showing all available products"), React.createElement("hr", {
        align: "left"
      }), React.createElement(InventoryTable, {
        products: this.state.products
      }), React.createElement("div", {
        id: "fieldsHeader"
      }, "Add a new product to inventory"), React.createElement("hr", {
        align: "left"
      }), React.createElement(ProductAdd, {
        createProduct: this.createProduct
      }));
    }
  }]);

  return Inventory;
}(React.Component);

var element = React.createElement(Inventory, null);
ReactDOM.render(element, document.getElementById('content'));