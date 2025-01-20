import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { useIsTablet } from '../hooks/useIsTablet';
import { useSplitView } from '../hooks/useSplitView';
import SplitViewProvider from '../providers/SplitViewProvider';

interface SplitViewProps extends React.ComponentProps<typeof View> {
  master: React.ReactElement;
  detail: React.ReactElement;

  style?: ViewStyle;
  masterStyle?: ViewStyle;
  detailStyle?: ViewStyle;
}

const SplitView = ({
  master,
  detail,
  style,
  masterStyle,
  detailStyle,
  ...props
}: SplitViewProps) => {
  const isTablet = useIsTablet();

  if (!isTablet) {
    return <SplitViewProvider>{master}</SplitViewProvider>;
  }

  return (
    <SplitViewProvider>
      <View
        style={{
          ...styles.container,
          ...style,
        }}
        {...props}
      >
        <View
          style={{
            ...styles.masterView,
            ...masterStyle,
          }}
        >
          {master}
        </View>
        <View
          style={{
            ...styles.detailView,
            ...detailStyle,
          }}
        >
          <DetailView>{detail}</DetailView>
        </View>
      </View>
    </SplitViewProvider>
  );
};

const DetailView = ({ children }: PropsWithChildren<object>) => {
  const { setDetailNavigator } = useSplitView();

  return (
    <NavigationIndependentTree>
      <NavigationContainer ref={setDetailNavigator}>
        {children}
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  masterView: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  detailView: {
    flex: 2,
  },
});

export default SplitView;
