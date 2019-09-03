import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={content => setContent(content)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

/**
 * I'm going to write out blog post form dot default props and I'll set that equal to an object so this
default props property right here can be used to give our component some default property values.
In other words if we ever show this component and we choose not to pass in some given prop this object
right here will be used to fill in some default values. Inside of here we can put in initial values and
I'll set that to an object that has a title of empty string and content of empty string as well so now
anytime that we show our blog post form inside of our create screen we do not make use of the initial
values prop.
 */

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    paddingHorizontal: 5,
    margin: 5
  },

  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;
