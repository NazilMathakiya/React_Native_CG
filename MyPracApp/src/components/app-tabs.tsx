import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>


      {/* counter */}
      <NativeTabs.Trigger name="CounterPrac">
        <NativeTabs.Trigger.Label>Counter</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

        {/* API */} 
      <NativeTabs.Trigger name="fetchApi">
        <NativeTabs.Trigger.Label>API</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

       {/* download */} 
      <NativeTabs.Trigger name="download">
        <NativeTabs.Trigger.Label>download</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>


    </NativeTabs>

    
  );
}