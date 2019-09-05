// useContext: is a function that says "look at some Context object and give us access to that things value prop"
import React, { useContext, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";

import { Context as BlogContext } from "../context/BlogContext";

import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  // retrieves the value prop from the parent component (BlogContext)
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  // is used to make sure that we only run some bit of code one time when a component is first rendered
  useEffect(() => {
    // is called anytime that we first navigate to this screen
    // also, is called anytime that the screen "appears" back from other screen
    getBlogPosts();
    // Focus -> the primary screen on the device (so, the IndexScreen gets displayed)
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    return () => {
      // as soon as IndexScreen is no longer visible, then go ahead and clean it up
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

// we can use this object right here to customize the different things that are
//displayed inside of our header and what happens whenever users say taps on them or something like that.
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    // will be displayed on the right hand side of the header
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather style={styles.plusIcon} name="plus" />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  plusIcon: {
    fontSize: 30,
    marginRight: 10
  }
});

export default IndexScreen;
