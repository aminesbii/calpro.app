import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      {typeof icon === 'object' ? (
        icon // Render component if `icon` is an Ionicons component
      ) : (
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
      )}
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#e85002',
          tabBarInactiveTintColor: '#a7a7a7',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<MaterialIcons name="space-dashboard" size={24} color={color} />}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
                <Tabs.Screen
          name="foods"
          options={{
            title: 'Foods',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<Ionicons name="fast-food" size={26} color={color} />}
                color={color}
                name="Food List"
                focused={focused}
              />
            ),
          }}
        />
        
        <Tabs.Screen
          name="scan"
          options={{
            title: 'Scan',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<MaterialCommunityIcons name="barcode-scan" size={24} color={color} />}
                color={color}
                name="Scan"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="calculator"
          options={{
            title: 'Calculator',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<FontAwesome6 name="calculator" size={24} color={color} />}
                color={color}
                name="Calculator"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<MaterialIcons name="account-circle" size={24} color={color} />}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
