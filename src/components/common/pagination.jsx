import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { pageSize, itemCount, onPageChange, currentPage } = this.props;
    const pageCount = Math.ceil(itemCount / pageSize);
    //convert pageCount to array using lodash
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
      <React.Fragment>
        <nav>
          <ul className="pagination">
            {pages.map((page) => (
              <li
                key={page}
                className={
                  page == currentPage ? "page-item active" : "page-item"
                }
                style={{ cursor: "pointer" }}
              >
                <a className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired, 
  onPageChange: PropTypes.func.isRequired, 
  currentPage: PropTypes.number.isRequired
}

export default Pagination;
