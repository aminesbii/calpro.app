import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const WeightInput = () => {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const selectUnit = (selectedUnit) => {
    setUnit(selectedUnit);
    setDropdownVisible(false);
  };

  return (
    <View>
     
        <View className="border-2 border-gray-300 w-full h-16 px-4 bg-black rounded-3xl focus:border-secondary items-center flex-row space-x-4" >
        <TextInput
          className="flex-1 text-base text-white font-pregular mt-0.5"
          value={weight}
          placeholderTextColor='#646464'
          placeholder={`Weight (${unit})`}
          onChangeText={setWeight}
        />

        {/* Dropdown Button */}
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton} className="  border-2 border-secondary">
          <Text style={styles.dropdownText}>{unit}</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown Modal */}
      <Modal transparent visible={isDropdownVisible} animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
          <View style={styles.dropdownMenu}>
            <TouchableOpacity onPress={() => selectUnit('kg')} style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>kg</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectUnit('lbs')} style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>lbs</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    width: 75,
    paddingVertical: 5,
    paddingHorizontal: 16,
    backgroundColor: '#e85002',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownText: {
    color: 'white',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    backgroundColor: 'white',
    width: 100,
    borderRadius: 8,
    paddingVertical: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  dropdownItemText: {
    fontSize: 16,
    color: 'black',
  },
});

export default WeightInput;
