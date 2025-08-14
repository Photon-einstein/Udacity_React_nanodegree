import PropTypes from "prop-types";

const DeleteLastItem = ({ onDeleteLastItem, buttonDisabled }) => {
  const handleDeleteLastItem = (event) => {
    onDeleteLastItem();
  };

  return (
    <button onClick={handleDeleteLastItem} disabled={buttonDisabled}>
      Delete Last Item
    </button>
  );
};

DeleteLastItem.PropTypes = {
  buttonDisabled: PropTypes.func.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired,
};

export default DeleteLastItem;
