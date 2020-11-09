import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";
import {SharedElement} from "react-navigation-shared-element";
import SearchInput from "../search-input";
import Copy from "../copy";
import layoutStyles from "../../styles/layout";

const ListHeader = ({
  title,
  value,
  searchMode,
  onSearchInputFocus,
  onCancel,
  onTextChange,
  onClear
}) => {
  const handleSearchInputFocus = () => {
    onSearchInputFocus();
  };

  return (
    <View style={layoutStyles.listHeaderContainer}>
      <SharedElement id="search-element">
        <SearchInput
          value={value}
          searchMode={searchMode}
          onFocus={handleSearchInputFocus}
          onCancel={onCancel}
          onTextChange={onTextChange}
          onClear={onClear}
        />
      </SharedElement>
      <View style={layoutStyles.listHeaderTextContainer}>
        <Copy size="lg" color="blue" weight="bold">
          {title}
        </Copy>
      </View>
    </View>
  );
};

ListHeader.propTypes = {
  onSearchInputFocus: PropTypes.func,
  title: PropTypes.string
};

export default ListHeader;
