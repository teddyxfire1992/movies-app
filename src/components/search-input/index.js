import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import {View, TextInput, Image, TouchableOpacity} from "react-native";
import Copy from "../copy";
import searchImage from "../../../assets/images/search.png";
import clearImage from "../../../assets/images/clear.png";
import layoutStyles from "../../styles/layout";

const SearchInput = ({
  value,
  searchMode,
  onFocus,
  onCancel,
  onTextChange,
  onClear
}) => {
  const input = useRef(null);

  useEffect(() => {
    if (searchMode) {
      focusInput();
    }
  }, []);

  const focusInput = () => {
    input.current.focus();
  };

  const clearInput = () => {
    input.current.clear();
    onClear();
  };

  const getInputWidth = () => ({width: searchMode ? "80%" : "100%"});

  const getCancelContainerDimensions = () => ({
    width: searchMode ? "20%" : 0,
    height: searchMode ? "auto" : 0
  });

  return (
    <View style={layoutStyles.flexRow}>
      <View style={[layoutStyles.searchContainer, getInputWidth()]}>
        <TouchableOpacity
          style={layoutStyles.searchIconContainer}
          onPress={focusInput}>
          <Image source={searchImage} />
        </TouchableOpacity>
        <TextInput
          ref={input}
          placeholder="Search"
          onChangeText={(text) => onTextChange(text)}
          onFocus={() => (!searchMode ? onFocus() : null)}
          style={layoutStyles.searchInput}
          value={value}
        />
        {searchMode && (
          <TouchableOpacity
            onPress={clearInput}
            style={layoutStyles.searchIconContainer}>
            <Image source={clearImage} />
          </TouchableOpacity>
        )}
      </View>
      <View style={getCancelContainerDimensions()}>
        <TouchableOpacity style={layoutStyles.cancelButton} onPress={onCancel}>
          <Copy color="blue">Cancel</Copy>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  searchMode: PropTypes.bool,
  onFocus: PropTypes.func,
  onCancel: PropTypes.func,
  onTextChange: PropTypes.func,
  onClear: PropTypes.func
};

export default SearchInput;
