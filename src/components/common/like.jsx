import React, { Component } from "react";

class Like extends Component {
  render() {
    const { liked, onLike } = this.props;
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";
    return <i onClick={onLike} className={classes} aria-hidden="true"></i>;
  }
}

export default Like;
