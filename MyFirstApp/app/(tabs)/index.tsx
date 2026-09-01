import { View, Text, StyleSheet } from 'react-native';

type StudentProps = {
  id: number;
  name: string;
  age: number;
  course: string;
  city: string;
};

function Student({ id, name, age, course, city }: StudentProps) {
  return (
    <View style={styles.studentCard}>
      <Text style={styles.studentText}>
        Student: {id}{'\n'}
        Name: {name}{'\n'}
        Age: {age}{'\n'}
        Course: {course}{'\n'}
        City: {city}
      </Text>
    </View>
  );
}

function Students() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Students:
      </Text>

      <Student
        id={1}
        name="Nazil"
        age={18}
        course="React Native"
        city="Wankaner"
      />

      <Student
        id={2}
        name="Arman"
        age={19}
        course="BCA"
        city="Wankaner"
      />

      <Student
        id={3}
        name="Aman"
        age={14}
        course="10th"
        city="Wankaner"
      />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Students />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },

  heading: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  studentCard: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Shadow for Android
    elevation: 4,
  },

  studentText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 28,
  },
});