import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const ProductsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [searchText, setSearchText] = useState('');
  const [cartCount, setCartCount] = useState(7);

  const categories = ['All Items', 'Hoodie', 'Jacket', 'T-shirt', 'Shoes', 'Sport', 'Shirt'];

  const products = [
    {
      id: 1,
      name: 'Blaze Blue Dynamic Runner Shoes',
      price: 79.99,
      image: '👟',
      sizes: [36, 37, 38, 39],
      color: '#00BCD4',
      stock: 24,
      productId: '#PRD891',
    },
    {
      id: 2,
      name: 'Blue Surge High-Performance Trainer',
      price: 79.99,
      image: '👟',
      sizes: [36, 37, 38, 39],
      color: '#1E40AF',
      stock: 18,
      productId: '#PRD892',
    },
    {
      id: 3,
      name: 'Swift Glow All-Terrain',
      price: 79.99,
      image: '👟',
      sizes: [36, 37, 38, 39],
      color: '#60A5FA',
      stock: 32,
      productId: '#PRD893',
    },
    {
      id: 4,
      name: 'Lush Stride Comfort Walker Shoes',
      price: 79.99,
      image: '👟',
      sizes: [36, 37, 38, 39],
      color: '#3B82F6',
      stock: 15,
      productId: '#PRD894',
    },
    {
      id: 5,
      name: 'Velocity Sprint Racing Shoes',
      price: 89.99,
      image: '👟',
      sizes: [37, 38, 39, 40],
      color: '#EF4444',
      stock: 20,
      productId: '#PRD895',
    },
    {
      id: 6,
      name: 'Urban Trek City Walker',
      price: 69.99,
      image: '👟',
      sizes: [36, 37, 38, 39],
      color: '#8B5CF6',
      stock: 28,
      productId: '#PRD896',
    },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <View style={[styles.productImageContainer, { backgroundColor: item.color + '20' }]}>
        <Text style={styles.productImage}>{item.image}</Text>
        <View style={[styles.colorDot, { backgroundColor: item.color }]} />
      </View>
      <Text style={styles.productName} numberOfLines={2}>
        {item.name}
      </Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>

      <View style={styles.sizesContainer}>
        {item.sizes.slice(0, 4).map((size, index) => (
          <View
            key={index}
            style={[styles.sizeChip, index === 0 && styles.sizeChipActive]}
          >
            <Text
              style={[styles.sizeText, index === 0 && styles.sizeTextActive]}
            >
              {size}
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>🛒 Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        title="Online Transaction"
        showNotification={true}
        showMenu={true}
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Keyword"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="sliders" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryChip,
                selectedCategory === item && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.categoryTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      {/* Products Grid */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.productsContainer}
        showsVerticalScrollIndicator={false}
      />

      <BottomNav navigation={navigation} activeRoute="Products" />

      {/* Floating Cart Button */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Order')}
      >
        <Icon name="shopping-cart" size={26} color="#fff" />
        {cartCount > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Floating Add Product Button */}
      <TouchableOpacity
        style={styles.addProductButton}
        onPress={() => navigation.navigate('CreateProduct')}
      >
        <Icon name="plus" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1a1a1a',
  },
  searchButton: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#4DB8AC',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: '#4DB8AC',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#fff',
  },
  productsContainer: {
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  productImage: {
    fontSize: 50,
  },
  colorDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 5,
    height: 40,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  sizesContainer: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 10,
  },
  sizeChip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sizeChipActive: {
    backgroundColor: '#4DB8AC',
    borderColor: '#4DB8AC',
  },
  sizeText: {
    fontSize: 11,
    color: '#666',
  },
  sizeTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#4DB8AC',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  cartButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#4DB8AC',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#EF4444',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addProductButton: {
    position: 'absolute',
    bottom: 160,
    right: 20,
    backgroundColor: '#2196F3',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default ProductsScreen;
