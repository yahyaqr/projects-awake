import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Import User Context
import { UserContext } from '../../core/UserContext';

// Import Components
import UserIdentityCard from '../../components/Card/UserIdentityCard';
import TrialSettingsCard from '../../components/Card/TrialSettingsCard';

function ProfileScreen({ navigation }) {
  const { logout } = useContext(UserContext);
  const handleLogout = () => {
    logout(navigation);
  };

  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
        <Button
          style={styles.headerButton}
          title='Logout'
          onPress={handleLogout}
        />
      </View>
      <View style={styles.content}>
        <UserIdentityCard
          headerText={'User Identity'}
          subheaderText={'Sub User Identity'}
        ></UserIdentityCard>
        <TrialSettingsCard
          headerText={'Trial Settings'}
          subheaderText={'Sub User Identity'}
        ></TrialSettingsCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    maxHeight: '75px',
    width: '100%',
  },
  headerText: {
    fontSize: '24px',
    fontWeight: '700',
  },
  content: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

export default ProfileScreen;
