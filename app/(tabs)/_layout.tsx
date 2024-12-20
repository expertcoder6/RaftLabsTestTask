import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    // <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs
        // initialRouteName={'Home'}
        backBehavior="initialRoute"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: 'absolute',
            // bottom: verticalScale(25, 25),
            left: 15,
            right: 15,
            borderRadius: 100,
            height: 60,
            borderTopColor: 'black',
            backgroundColor: 'black',
            // ...(isKeyboardVisible ? {} : {bottom: verticalScale(25, 25)}),
          },
        }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="propertyDetails"
        options={{
          title: 'PropertyDetails',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: 'Booking',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
