import { StatusBar, StyleSheet, View, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/mainBackground.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={['transparent', 'rgba(0,0,0,0.8)', '#000']}
        locations={[0.35, 0.55, 0.7]}
      />
      <View style={[styles.contentContainer, { paddingBottom: bottom || 20 }]}>
        <Text style={styles.title}>Some of the best coffee in the city!</Text>
        <Text style={styles.subtitle}>Fresh beans, true Arabica, and carefully roasted.</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.65,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
  },
  title: {
    marginBottom: 16,
    color: "#FFF",
    fontFamily: "Sora-SemiBold",
    fontSize: 34,
    textAlign: "center",
    letterSpacing: 0.34,
  },
  subtitle: {
    marginBottom: 24,
    color: "#A9A9A9",
    fontFamily: "Sora-Regular",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  button: {
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 21,
    borderRadius: 16,
    backgroundColor: "#C67C4E",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Sora-SemiBold",
    fontSize: 16,
  },
});

export default App;
