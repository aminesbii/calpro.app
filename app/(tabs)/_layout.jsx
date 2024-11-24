import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      {typeof icon === 'object' ? (
        icon 
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
          tabBarActiveTintColor: '#e50914',
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
                icon={<MaterialCommunityIcons name="food" size={24} color={color} />}
                color={color}
                name="Foods"
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
          name="plans"
          options={{
            title: 'Plans',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<MaterialCommunityIcons name="clipboard-text" size={24} color={color} />}
                color={color}
                name="Plans"
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
