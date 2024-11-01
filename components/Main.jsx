import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export function Main() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={[styles.container, width]}>
        <Text style={styles.title}>Inicio</Text>
        <ScrollView>
          {/* <View style={styles.buscar}>
          <BuscarSVG />
          <Text>Buscar</Text>
        </View> */}
          <Text style={styles.subtitulo}>Actividades recientes</Text>
          <View style={styles.containerActividades}>
            <View style={styles.activitiesCard}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8s",
                }}
              />
              <View>
                <Text style={styles.subtituloCard}>Gym</Text>
                <Text style={styles.text}>5 actividades pendientes</Text>
                <Text style={styles.text}>10 actividades finalizadas</Text>
                <Text style={styles.text}>3 logros obtenidos</Text>
              </View>
            </View>
            <View style={styles.activitiesCard}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8s",
                }}
              />
              <View>
                <Text style={styles.subtituloCard}>Gym</Text>
                <Text style={styles.text}>5 actividades pendientes</Text>
                <Text style={styles.text}>10 actividades finalizadas</Text>
                <Text style={styles.text}>3 logros obtenidos</Text>
              </View>
            </View>
            <View style={styles.activitiesCard}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8s",
                }}
              />
              <View>
                <Text style={styles.subtituloCard}>Gym</Text>
                <Text style={styles.text}>5 actividades pendientes</Text>
                <Text style={styles.text}>10 actividades finalizadas</Text>
                <Text style={styles.text}>3 logros obtenidos</Text>
              </View>
            </View>
            <View style={styles.activitiesCard}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8s",
                }}
              />
              <View>
                <Text style={styles.subtituloCard}>Gym</Text>
                <Text style={styles.text}>5 actividades pendientes</Text>
                <Text style={styles.text}>10 actividades finalizadas</Text>
                <Text style={styles.text}>3 logros obtenidos</Text>
              </View>
            </View>
          </View>
          <Text style={styles.subtitulo}>Tareas por realizar</Text>
          <View style={styles.containerTareas}>
            <View style={styles.tareas}>
              <Text>Ir al gym</Text>
              <Text>Hoy a las 8:00 pm</Text>
            </View>
            <View style={styles.tareas}>
              <Text>Ir al gym</Text>
              <Text>Hoy a las 8:00 pm</Text>
            </View>
            <View style={styles.tareas}>
              <Text>Ir al gym</Text>
              <Text>Hoy a las 8:00 pm</Text>
            </View>
            <View style={styles.tareas}>
              <Text>Ir al gym</Text>
              <Text>Hoy a las 8:00 pm</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    color: "#301D18",
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtituloCard: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 0,
  },
  text: {
    color: "#828282",
    fontSize: 12,
  },
  buscar: {
    backgroundColor: "#F4F5F0",
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#3D4133",
    padding: 5,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 20,
  },
  activitiesCard: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#494F3C",
    padding: 10,
  },
  containerActividades: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  containerTareas: {
    height: 300,
    borderWidth: 3,
    borderColor: "#494F3C",
    backgroundColor: "#F4F5F0",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
    marginBottom: 20,
  },
  tinyLogo: {
    aspectRatio: 1 / 1,
    objectFit: "contain",
  },
  tareas: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    borderColor: "#494F3C",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
