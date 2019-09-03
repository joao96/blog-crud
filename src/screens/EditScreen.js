import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(BlogContext);

  // will be the blogpost we want to edit
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => {
          // will send the user to exact previous screen that he/she was looking at
          navigation.pop();
        })
      }
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
