import React from 'react';
import {Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text , TouchableOpacity , Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './styles';

export default function Detail() {
const navigation = useNavigation();
const route = useRoute();

const incident = route.params.incident;
const message = `Hello ${incident.name}, Im getting in touch because I would like to help "${incident.title}" with value 
of ${Intl.NumberFormat('pt-BR',
{style: 'currency' ,
 currency: 'BRL'
 }).format(incident.value)}`;

  function navigateBack(){
    navigation.goBack()
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `hero of the case: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
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
            <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name} of {incident.city}/{incident.uf}</Text>

            <Text style={styles.incidentProperty}>CASE:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALUE:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR',
               {style: 'currency' ,
                currency: 'BRL'
                }).format(incident.value)}
            </Text>
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
