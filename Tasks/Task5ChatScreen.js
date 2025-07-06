import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import backgroundImage from './Task5ChatScreenbackground.jpg';

export default function Task5ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    'Merhabalar.',
    'Diyarbakırdan Amerikaya kadar kucak dolusu saygılar, sevgiler..',
  ]);

  const scrollViewRef = useRef(null);

  const handleSend = () => {
    if (message.trim() === '') return;

    setMessages(prev => [...prev, message]);
    setMessage('');

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.inner}>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={styles.messagesContainer}
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({ animated: true })
            }
            keyboardShouldPersistTaps="handled"
          >
            {messages.map((msg, index) => (
              <Text key={index} style={styles.message}>{msg}</Text>
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message"
              placeholderTextColor="#888"
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  message: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 20, 
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FF7F',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginLeft: 10,
    height: 40,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
