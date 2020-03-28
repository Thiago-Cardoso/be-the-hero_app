import React from 'react';
import {Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text , TouchableOpacity , Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './styles';

export default function Detail() {
const navigation = useNavigation();
const message = 'Hello APD, Im getting in touch because I would like to help';

  function navigateBack(){
    navigation.goBack()
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: 'hero of the case',
      recipients: ['thiagocardosooti@gmail.com'],
      body: message,
    })
  }

  function sendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=98140892;text=${message}`);
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
            <TouchableOpacity onPress={navigateBack}>              
                <Feather name="arrow-right" size={28} color="#E02041" />
            </TouchableOpacity>
        </View>
        <View style={styles.incident}>
            <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG</Text>
            <Text style={styles.incidentValue}>APD</Text>

            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>APD</Text>

            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>APD</Text>
        </View>
        <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Save the Day!</Text>
            <Text style={styles.heroTitle}>Be the error of this case.</Text>
            <Text style={styles.heroDescription}>Contact.</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                  <Text style={styles.actionText}>WhasApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={sendMail}>
                  <Text style={styles.actionText}>Email</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}
