import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Card = ({ name, baseGoal, food, exercise, remaining }) => {
  const progress = ((baseGoal - food + exercise) / baseGoal) * 100;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>Remaining = Goal - Food + Exercise</Text>

      <AnimatedCircularProgress
        size={120}
        width={10}
        fill={progress}
        tintColor="red"
        backgroundColor="#111111"
        lineCap="round"
        rotation={0} // Start the progress animation from the top
      >
        {(fill) => (
          <View style={styles.circleContent}>
            <Text style={styles.remainingCalories}>{Math.round(progress)}%</Text>
            <Text style={styles.remainingText}>Progress</Text>
          </View>
        )}
      </AnimatedCircularProgress>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Base Goal</Text>
        <Text style={styles.infoText}>{baseGoal}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Food</Text>
        <Text style={styles.infoText}>{food}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Exercise</Text>
        <Text style={styles.infoText}>{exercise}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 15,
    width: 320,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 12,
    marginVertical: 8,
  },
  circleContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  remainingCalories: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  remainingText: {
    color: 'white',
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
  },
});

export default Card;
