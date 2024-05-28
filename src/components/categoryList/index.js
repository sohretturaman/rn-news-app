/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { Pressable } from "react-native";

const categoryData = [
  "general",
  "economy",
  "sport",
  "entertainment",
  "technology",
  "business",
  "science",
];
const CategoryList = (props) => {
  const { selectedCategoryInfo, selectedCategory } = props
  const [catgPressedItem, setCatgPressedItem] = useState(selectedCategory);

  const CategoryRenderItem = ({ item }) => {
    const selectedItem = catgPressedItem === item;
    function onCategoryPress({ item }) {
      setCatgPressedItem(item);
      selectedCategoryInfo(item);
    }

    return (
      <View
        style={[
          styles.catgItemContiner,
          {
            backgroundColor: selectedItem ? '#17036D' : '#D3D3D3',
          },
        ]}
      >
        <Pressable
          onPress={onCategoryPress.bind(this, { item })}
          style={({ pressed }) => [
            styles.catgTitleWrapper,
            pressed && styles.pressedStyle,
          ]}
        >
          <Text
            style={[
              styles.catgTitle,
              { color: selectedItem ? "#fff" : '#333333' },
            ]}
          >
            {" "}
            {item}
          </Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View style={styles.catgListWrapper}>
      <FlatList
        data={categoryData}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryRenderItem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  catgTitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 2,
  },
  catgListWrapper: {
    marginVertical: 10,
  },
  catgItemContiner: {
    marginHorizontal: 5,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  catgTitleWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  pressedStyle: {
    opacity: 0.5,
  },
});