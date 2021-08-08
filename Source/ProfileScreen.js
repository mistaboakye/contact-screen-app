import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/scrapa.jpg")} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.text}>
          <Text style={styles.textHeader}>School</Text>
          <Text style={styles.textDetails}>
            University of Proffesional Studies
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textHeader}>Email</Text>
          <Text style={styles.textDetails}>skyscrapa@gmail.com </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textHeader1}>Name</Text>
          <Text style={styles.textDetails1}>Daniel Mensah</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textHeader1}>Nick Name</Text>
          <Text style={styles.textDetails1}>Sky Scrapa</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textHeader1}>Emergency Contact</Text>
          <Text style={styles.textDetails1}>+233 209414362</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upate Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  imageContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textContainer: {
    flex: 0.55,
  },
  text: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  textHeader: {
    color: "gray",
    fontSize: 18,
  },
  textHeader1: {
    color: "#1d87fb",
    fontSize: 18,
  },
  textDetails: {
    fontSize: 18,
    borderBottomWidth: 0.3,
    borderBottomColor: "yellow",
  },
  textDetails1: {
    fontSize: 18,
    borderBottomWidth: 0.3,
    borderBottomColor: "#bec5cc",
  },
  buttonContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 350,
    height: 70,
    backgroundColor: "#1d87fb",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
});
