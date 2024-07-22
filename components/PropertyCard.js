import { Dimensions, Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({
    rooms,
    children,
    property,
    adults,
    selectedDates,
    availableRooms,
  }) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Info" , {
          name: property.name,
          rating: property.rating,
          oldPrice: property.oldPrice,
          newPrice: property.newPrice,
          photos: property.photos,
          availableRooms: property.rooms,
          children: children,
          adults: adults,
          rooms: rooms,
          selectedDates: selectedDates
        })}
        style={{ flexDirection: "row", margin: 15, backgroundColor: "white" }}
      >
        <View>
          {/* at most devices height should be : height / 4 */}
          <Image
            style={{ height: 248, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{property.rating}</Text>
            <View
              style={{
                width: 100,
                paddingVertical: 3,
                backgroundColor: "#6CB4EE",
                borderRadius: 5,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 15, color: "white" }}
              >
                Genius Level
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: 210,
              fontWeight: "bold",
              color: "gray",
              marginTop: 6,
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 18 }}>
              Rs. {property.newPrice * adults}
            </Text>
          </View>

          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel Room : 1 bed
            </Text>
          </View>
          
          {/* borderRadius: 5 */}
          <View
            style={{
              backgroundColor: "#6082B6",
              paddingVertical: 2,
              marginTop: 2,
              borderRadius: 7,
              width: 150,
              paddingHorizontal: 3,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
