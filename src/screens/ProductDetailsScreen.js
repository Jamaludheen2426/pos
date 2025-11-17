import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params || {
    product: {
      id: 1,
      name: 'Lush Stride Comfort Walker Shoes',
      price: 79.99,
      image: '👟',
      productId: '#PRD892',
      stock: 24,
      description:
        'The Lush Stride Comfort Walker Shoes combine superior cushioning, breathable materials, and an ergonomic design to keep your feet comfortable and supported all day.',
    },
  };

  const [selectedSize, setSelectedSize] = useState(36);
  const [quantity, setQuantity] = useState(1);

  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44];

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Product Details"
        showBack={true}
        onBackPress={() => navigation.goBack()}
        rightText={product.productId}
        showHelp={true}
        showSearch={true}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Text style={styles.productImage}>{product.image}</Text>
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{product.name}</Text>

          <Text style={styles.descriptionLabel}>Product Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          {/* Select Size */}
          <Text style={styles.sectionLabel}>Select Size</Text>
          <View style={styles.sizesContainer}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeChip,
                  selectedSize === size && styles.sizeChipActive,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.sizeTextActive,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Quantity */}
          <View style={styles.quantityContainer}>
            <View>
              <Text style={styles.quantityLabel}>Quantity</Text>
            </View>
            <View style={styles.stockContainer}>
              <Text style={styles.stockText}>Stock : {product.stock}</Text>
            </View>
          </View>

          <View style={styles.quantityControls}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={decrementQuantity}
            >
              <Text style={styles.quantityButtonText}>−</Text>
            </TouchableOpacity>
            <View style={styles.quantityDisplay}>
              <Text style={styles.quantityText}>{quantity}</Text>
            </View>
            <TouchableOpacity
              style={[styles.quantityButton, styles.incrementButton]}
              onPress={incrementQuantity}
            >
              <Text style={[styles.quantityButtonText, styles.incrementText]}>
                +
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>🛒 Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomNav navigation={navigation} activeRoute="ProductDetails" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    fontSize: 150,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 20,
  },
  descriptionLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#1a1a1a',
    lineHeight: 22,
    marginBottom: 25,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  sizesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 25,
  },
  sizeChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  sizeChipActive: {
    backgroundColor: '#4DB8AC',
    borderColor: '#4DB8AC',
  },
  sizeText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  sizeTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  stockContainer: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  stockText: {
    fontSize: 14,
    color: '#666',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quantityButton: {
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incrementButton: {
    backgroundColor: '#4DB8AC',
  },
  quantityButtonText: {
    fontSize: 24,
    color: '#666',
    fontWeight: '600',
  },
  incrementText: {
    color: '#fff',
  },
  quantityDisplay: {
    width: 50,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#4DB8AC',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProductDetailsScreen;
