import PropTypes from "prop-types";

const Item = ({ item }) => {
  return <li>{item}</li>;
};

Item.PropTypes = {
  item: PropTypes.string.isRequired,
};

export default Item;
