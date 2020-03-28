import React from 'react';
import {Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png'

 import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail(){
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headerText}>
              Total of <Text style={styles.headerTextBold}>0 cases</Text>
          </Text>
      </View>
       <Text styles={styles.title}>Helcome</Text>
       <Text styles={styles.description}>Choose one of the cases below and save the day</Text>


        <FlatList 
          data={[1,2,3 , 4 , 5]}
          styles={styles.incidentList}
          KeyExtractor={incident => String(incident)}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>APD</Text>

            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>APD</Text>

            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>APD</Text>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={navigateToDetail}
              >
                <Text style={styles.detailsButtonText}>View more Detail</Text>
                <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>

          </View>
          )}
        />
   </View> 
   
  );
}
