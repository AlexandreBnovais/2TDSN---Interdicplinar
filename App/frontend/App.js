import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Layout } from './src/layout/stackLayout/layout';

export default function App() {  
  return (
    <SafeAreaProvider>
      <Layout />
    </SafeAreaProvider>
  )
}
