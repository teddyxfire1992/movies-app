import React from "react";
import {FlatList} from "react-native";
import PropTypes from "prop-types";
import ListItem from "../list-item";
import layoutStyles from "../../styles/layout";
import ListHeader from "../list-header";

const List = ({
  data,
  title,
  value,
  searchMode,
  onEndReached,
  onSearchInputFocus,
  onCancel,
  onTextChange,
  onClear
}) => {
  const renderData = ({item, index}) => {
    return <ListItem key={`movie-${index}`} index={index} data={item} />;
  };

  const handleEndReached = () => {
    onEndReached();
  };

  return (
    <FlatList
      style={layoutStyles.flatList}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.2}
      numColumns={3}
      data={data}
      renderItem={renderData}
      keyExtractor={(item) => item.id.toString()}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <ListHeader
          title={title}
          value={value}
          searchMode={searchMode}
          onSearchInputFocus={onSearchInputFocus}
          onCancel={onCancel}
          onTextChange={onTextChange}
          onClear={onClear}
        />
      }
    />
  );
};

List.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  onEndReached: PropTypes.func,
  onSearchInputFocus: PropTypes.func
};

export default List;
