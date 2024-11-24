import React, { useState } from 'react';
import { Alert, Modal, ScrollView, StyleSheet,Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';

const Gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
];

const Goals = [
    { label: 'Maintain ', value: 'Maintain' },
    { label: 'Bulk', value: 'Bulk' },
    { label: 'Cut', value: 'Cut' },
];

const Calculator = () => {

    const [isSubmitting, setSubmitting] = useState(false);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState(null);
    const [goal, setGoal] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [unit, setUnit] = useState('kg');
    const [isDropdownVisible, setDropdownVisible] = useState(false);


    const calculateMacros = () => {
        if (!weight || !height || !age || !gender || goal === null) {
            Alert.alert("Please fill out all fields");
            return;
        }

        const weightInKg = unit === 'lbs' ? parseFloat(weight) * 0.453592 : parseFloat(weight);
        const heightInCm = parseFloat(height);

        let BMR;
        if (gender === 'Male') {
            BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * parseFloat(age) + 5;
        } else {
            BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * parseFloat(age) - 161;
        }

        let dailyCalories = BMR * 1.2;


        if (goal === 'bulk') {
            dailyCalories += 500;
        } else if (goal === 'cut') {
            dailyCalories -= 500;
        }

        const carbs = (dailyCalories * 0.5) / 4;
        const protein = (dailyCalories * 0.25) / 4;
        const fats = (dailyCalories * 0.25) / 9;

        Alert.alert(
            "Macro Calculation",
            `Based on your inputs:
            - Calories: ${dailyCalories.toFixed(0)} kcal
            - Carbs: ${carbs.toFixed(0)}g
            - Protein: ${protein.toFixed(0)}g
            - Fats: ${fats.toFixed(0)}g`
        );

        
    };


    return (
        <SafeAreaView style={styles.container} className="w-full bg-black">
            <ScrollView>
            <View
          className=" flex justify-center h-full  my-6"
          style={{
            minHeight: Dimensions.get("window").height - 250,
          }}
           >
              
                <View className="border-2 border-gray-400 w-full h-16 px-4 mt-5 rounded-3xl focus:border-secondary-100 items-center flex-row space-x-4">
                    <TextInput
                        className="flex-1 text-base text-white font-pregular mt-0.5"
                        value={height}
                        placeholderTextColor='#646464'
                        keyboardType="numeric"
                        placeholder="type ypur height (cm)"
                        onChangeText={setHeight}
                    />
                </View>

                <View>
                    <View className="border-2 border-gray-400 w-full h-16 px-4 rounded-3xl focus:border-secondary-100 items-center flex-row space-x-4 mt-5">
                        <TextInput
                            className="flex-1 text-base text-white font-pregular mt-0.5"
                            value={weight}
                            placeholderTextColor='#646464'
                            keyboardType="numeric"
                            placeholder={`type your Weight (${unit})`}
                            onChangeText={setWeight}
                        />
                        <TouchableOpacity onPress={() => setDropdownVisible(!isDropdownVisible)} style={styles.dropdownButton} className="border-2 border-secondary">
                            <Text style={styles.dropdownText}>{unit}</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal transparent visible={isDropdownVisible} animationType="fade">
                        <TouchableOpacity style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
                            <View style={styles.dropdownMenu}>
                                <TouchableOpacity onPress={() => setUnit('kg')} style={styles.dropdownItem}>
                                    <Text style={styles.dropdownItemText}>kg</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setUnit('lbs')} style={styles.dropdownItem}>
                                    <Text style={styles.dropdownItemText}>lbs</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>

                <View className="border-2 border-gray-400 w-full h-16 px-4 bg-black rounded-3xl focus:border-secondary-100 items-center flex-row space-x-4 mt-5">
                    
                    <TextInput
                        className="flex-1 text-base text-white font-pregular mt-0.5"
                        value={age}
                        placeholderTextColor='#646464'
                        keyboardType="numeric"
                        placeholder="type your age"
                        onChangeText={setAge}
                    />
                </View>
                <View style={styles.genderGoalContainer} >
                    <View style={styles.genderContainer}  className="mt-2">
                    <Dropdown
                            style={[styles.dropdowns, isFocus && { borderColor: '#e50914' }]}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholderStyle={{ color: '#646464' }} 
                            data={Gender}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select Gender' : '...'}
                            value={gender}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setGender(item.value);
                                setIsFocus(false);
                            }}
                        />

                    </View>

                    <View style={styles.goalContainer} className="mt-2" >
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: '#e50914' } ]}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholderStyle={{ color: '#646464' }} 
                            data={Goals}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select Goal' : '...'}
                            value={goal}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setGoal(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>
                </View>
                
                <View className="m-1">
                <CustomButton
                title="Calculate Macros"
                handlePress={calculateMacros}
                containerStyles="mt-1"
                isLoading={isSubmitting}/> 
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    input: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        marginVertical: 5,
    },
    dropdownButton: {
        width: 75,
        paddingVertical: 5,
        paddingHorizontal: 16,
        backgroundColor: '#e50914',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        color: 'white',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    genderGoalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
        marginTop: 20,
        margin: 2,
    },
    genderContainer: {
        flex: 1,
        marginRight: 10,
    },
    goalContainer: {
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dropdownMenu: {
        backgroundColor: '#eaeaea',
        borderRadius: 10,
        padding: 10,
        width: 200,
        elevation: 5,
    },
    dropdownItem: {
        padding: 10,
    },
    dropdownItemText: {
        fontSize: 16,
    },
    dropdown: {
      height: 60,
      borderColor: '#191919',
      borderWidth: 2,
      borderRadius: 16,
      paddingHorizontal: 12,
  },
   dropdowns: {
    height: 60,
    borderColor: '#191919',
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 12,
},
    selectedTextStyle: {
        color: 'white',
    },
});

export default Calculator;
