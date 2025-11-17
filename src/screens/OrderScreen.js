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

const OrderScreen = ({ navigation }) => {
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      name: 'BlazePink Dynamic Runner Shoes',
      size: 44,
      price: 79.99,
      quantity: 1,
      image: '👟',
    },
    {
      id: 2,
      name: 'Pink Surge High-Performance Trainer',
      size: 44,
      price: 79.99,
      quantity: 1,
      image: '👟',
    },
    {
      id: 3,
      name: 'Lush Stride Comfort Walker Shoes',
      size: 44,
      price: 79.99,
      quantity: 2,
      image: '👟',
    },
  ]);

  const updateQuantity = (id, delta) => {
    setOrderItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateSubTotal = () => {
    return orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const subTotal = calculateSubTotal();
  const membershipDiscount = 0;
  const taxRate = 0.1;
  const tax = subTotal * taxRate;
  const total = subTotal - membershipDiscount + tax;
  const totalItems = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Header
        title="Order Details"
        showBack={true}
        onBackPress={() => navigation.goBack()}
        rightText="#AR928"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Customer Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Information</Text>
          <View style={styles.customerInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Customer Name</Text>
              <Text style={styles.infoValue}>Prabowo Sasmito</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Membership ID</Text>
              <Text style={styles.infoValue}>Membership ID</Text>
            </View>
          </View>
        </View>

        {/* Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Items</Text>
          {orderItems.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <View style={styles.itemImageContainer}>
                <Text style={styles.itemImage}>{item.image}</Text>
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSize}>Size {item.size}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <View style={styles.itemControls}>
                <TouchableOpacity
                  style={styles.controlButton}
                  onPress={() => updateQuantity(item.id, -1)}
                >
                  <Text style={styles.controlButtonText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity
                  style={[styles.controlButton, styles.incrementButton]}
                  onPress={() => updateQuantity(item.id, 1)}
                >
                  <Text style={[styles.controlButtonText, styles.incrementText]}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Order Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Item</Text>
              <Text style={styles.summaryValue}>{totalItems} Item</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Sub Total</Text>
              <Text style={styles.summaryValue}>${subTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Membership Discount</Text>
              <Text style={styles.summaryValue}>${membershipDiscount}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax (10%)</Text>
              <Text style={styles.summaryValue}>${tax.toFixed(1)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${total.toFixed(1)}</Text>
            </View>
          </View>
        </View>

        {/* Process Transaction Button */}
        <TouchableOpacity style={styles.processButton}>
          <Text style={styles.processButtonText}>Process Transaction</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  section: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  customerInfo: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#999',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  itemImageContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemImage: {
    fontSize: 30,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  itemSize: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  itemControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  controlButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incrementButton: {
    backgroundColor: '#4DB8AC',
  },
  controlButtonText: {
    fontSize: 18,
    color: '#666',
    fontWeight: '600',
  },
  incrementText: {
    color: '#fff',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    width: 20,
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  processButton: {
    backgroundColor: '#4DB8AC',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  processButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderScreen;
