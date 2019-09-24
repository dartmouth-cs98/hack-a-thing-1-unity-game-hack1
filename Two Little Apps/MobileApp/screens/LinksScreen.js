import React from 'react';
import { ScrollView, StyleSheet, Linking, Text } from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textHead}>Quotes</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/aristotle-quotes")}>Aristotle</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/albert-einstein-quotes")}>Albert Einstein</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/ralph-waldo-emerson-quotes")}>Ralph Waldo Emerson</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/steve-jobs-quotes")}>Steve Jobs</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/c-s-lewis-quotes")}>C. S. Lewis</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/abraham-lincoln-quotes")}>Abraham Lincoln</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/plato-quotes")}>Plato</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/j-k-rowling-quotes")}>J. K. Rowling</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/dr-seuss-quotes")}>Dr. Seuss</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/william-shakespeare-quotes")}>William Shakespeare</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/socrates-quotes")}>Socrates</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/j-r-r-tolkien-quotes")}>J. R. R. Tolkien</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("https://www.brainyquote.com/authors/george-washington-quotes")}>George Washington</Text>
      <Text style={styles.text} onPress={ () => Linking.openURL("http://wisdomquotes.com/famous-quotes/")}>Other Quotes</Text>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  textHead: {
    fontSize: 25,
    textAlign: 'center',
    color: '#001'
  },
  text: {
    fontSize: 20,
    padding: 15,
    textAlign: 'center'
  }
});
