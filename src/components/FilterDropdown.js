import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy, categories, initialProducts } from "../store/filterSlice";

export const FilterDropdown = () => {
  const [showDropdownOne, setShowDropdownOne] = useState(false);
  const [showDropdownTwo, setShowDropdownTwo] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.filterState);

  // function to set product list to low - high (ascending) order
  function handleSortLowToHigh(products) {
    dispatch(setSortBy("lowtohigh"));
    setShowDropdownOne(!showDropdownOne);
  }

  // function to set product list to high - low (descending) order
  function handleSortHighToLow(products) {
    dispatch(setSortBy("hightolow"));
    setShowDropdownOne(!showDropdownOne);
  }

  function setMenCategory(products) {
    dispatch(categories("men's clothing"));
    setShowDropdownTwo(!showDropdownTwo);
  }

  function setWomenCategory(products) {
    dispatch(categories("women's clothing"));
    setShowDropdownTwo(!showDropdownTwo);
  }

  function setJeweleryCategory(products) {
    dispatch(categories("jewelery"));
    setShowDropdownTwo(!showDropdownTwo);
  }

  function setElectronicCategory(products) {
    dispatch(categories("electronics"));
    setShowDropdownTwo(!showDropdownTwo);
  }

  function clearFilter() {
    dispatch(initialProducts());
  }

  return (
    <div className="filter-buttons">
      <section>
        <button
          onClick={() => setShowDropdownOne(!showDropdownOne)}
          className="btn"
          type="button"
        >
          Sorted By{" "}
        </button>

        {showDropdownOne && (
          <div className="sort-button">
            <ul>
              <li onClick={() => handleSortLowToHigh(state.productList)}>
                <span className="dropdown-text">Price - Low To High</span>
              </li>
              <li onClick={() => handleSortHighToLow(state.productList)}>
                <span className="dropdown-text">Price - High To Low</span>
              </li>
            </ul>
          </div>
        )}
      </section>

      <section>
        <button
          onClick={() => setShowDropdownTwo(!showDropdownTwo)}
          className="btn"
          type="button"
        >
          Category
        </button>

        {showDropdownTwo && (
          <div className="sort-button">
            <ul>
              <li onClick={() => setMenCategory(state.productList)}>
                <span className="dropdown-text">Men's Cloth</span>
              </li>
              <li onClick={() => setWomenCategory(state.productList)}>
                <span className="dropdown-text">Women's Cloth</span>
              </li>
              <li onClick={() => setJeweleryCategory(state.productList)}>
                <span className="dropdown-text">Jewelery</span>
              </li>
              <li onClick={() => setElectronicCategory(state.productList)}>
                <span className="dropdown-text">Electronics</span>
              </li>
            </ul>
          </div>
        )}
      </section>
      <section>
        <button onClick={() => clearFilter()} className="clear" type="button">
          {" "}
          Clear Filter{" "}
        </button>
      </section>
    </div>
  );
};
