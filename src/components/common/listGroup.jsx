import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
      this.props;
    return (
      <React.Fragment>
        <ul className="list-group m-2">
          {items.map((item) => (
            <li
            key={item[textProperty]}
              onClick={() => onItemSelect(item)}
              className={
                item === selectedItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              style={{ cursor: "pointer" }}
            >
              {item[textProperty]}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
