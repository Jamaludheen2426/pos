// Header.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({
  title,
  showBack = false,
  onBackPress,
  rightText = '',
  showNotification = false,
  showMenu = false,
  showHelp = false,
  showSearch = false,
}) => {
  return (
    // only apply safe inset on the top; no manual paddingTop
    <SafeAreaView edges={['top']} style={styles.headerWrapper}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
        animated
      />

      <View style={styles.header}>
        <View style={styles.leftSection}>
          {showBack && (
            <TouchableOpacity
              onPress={onBackPress}
              style={styles.backButton}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Icon name="chevron-left" size={22} color="#1a1a1a" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.centerSection}>
          <Text numberOfLines={1} style={styles.headerTitle}>
            {title}
          </Text>
        </View>

        <View style={styles.rightSection}>
          {rightText ? <Text style={styles.rightText}>{rightText}</Text> : null}

          {showHelp && (
            <TouchableOpacity style={styles.iconButton} hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}>
              <Icon name="help-circle" size={18} color="#666" />
            </TouchableOpacity>
          )}

          {showSearch && (
            <TouchableOpacity style={styles.iconButton} hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}>
              <Icon name="search" size={18} color="#666" />
            </TouchableOpacity>
          )}

          {showNotification && (
            <TouchableOpacity style={styles.iconButton} hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}>
              <Icon name="bell" size={20} color="#1a1a1a" />
            </TouchableOpacity>
          )}

          {showMenu && (
            <TouchableOpacity style={styles.iconButton} hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}>
              <Icon name="menu" size={20} color="#1a1a1a" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12, // slightly reduced horizontal padding
    paddingVertical: 8, // reduced vertical padding to shrink height
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  leftSection: {
    width: 44, // smaller fixed width
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightSection: {
    minWidth: 44,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  backButton: {
    padding: 4,
  },

  headerTitle: {
    fontSize: 16, // slightly smaller title
    fontWeight: '600',
    color: '#1a1a1a',
  },

  rightText: {
    fontSize: 13,
    color: '#666',
    marginRight: 6,
  },

  iconButton: {
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
});

export default Header;
