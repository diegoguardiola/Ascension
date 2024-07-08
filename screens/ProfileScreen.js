import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, Text, View } from 'react-native';

const ProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [Logout, setLogout] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(0,0,0)' },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            height: 48,
            justifyContent: 'space-between',
            paddingLeft: 24,
            paddingRight: 24,
          },
          dimensions.width
        )}
      >
        {/* Left Section */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images.Logo}
            style={StyleSheet.applyWidth(
              { height: 28, width: 28 },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Inter_700Bold',
                fontSize: 20,
                marginLeft: 16,
              },
              dimensions.width
            )}
          >
            {'Account'}
          </Text>
        </View>
        {/* Right Section */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Create */}
          <Touchable
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Custom Color'],
                  borderLeftWidth: 2,
                  borderRadius: 100,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 38,
                  justifyContent: 'center',
                  width: 115,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: 'rgb(255, 255, 255)',
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 5,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Create'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
      {/* User */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: theme.colors['Divider'],
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
            paddingBottom: 24,
            paddingLeft: 24,
            paddingRight: 24,
          },
          dimensions.width
        )}
      >
        {/* Details */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* SF.png */}
          <Image
            resizeMode={'cover'}
            source={{
              uri: 'https://static.draftbit.com/images/placeholder-image.png',
            }}
            style={StyleSheet.applyWidth(
              { height: 80, width: 80 },
              dimensions.width
            )}
          />
          <View>
            {/* Name */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: 'rgb(255, 255, 255)',
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 18,
                  marginLeft: 20,
                },
                dimensions.width
              )}
            >
              {'Diego Guardiola'}
            </Text>
            {/* Status */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: 'rgb(255, 255, 255)',
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  marginLeft: 20,
                  marginTop: 8,
                },
                dimensions.width
              )}
            >
              {'Offline'}
            </Text>
          </View>
        </View>
        {/* Edit */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('UpdateProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              name={'AntDesign/setting'}
              style={StyleSheet.applyWidth(
                { backgroundColor: 'rgb(255, 255, 255)' },
                dimensions.width
              )}
            />
          </View>
        </Touchable>
      </View>
      {/* Logout Modal */}
      <>
        {!Logout ? null : (
          <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType={'slide'}
            transparent={true}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.3,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom #ffffff'],
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  bottom: 0,
                  height: 254,
                  justifyContent: 'space-evenly',
                  left: 0,
                  overflow: 'hidden',
                  paddingBottom: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 15,
                  position: 'absolute',
                  right: 0,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_8'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 21,
                  },
                  dimensions.width
                )}
              >
                {'Logout'}
              </Text>
              <Divider
                color={theme.colors.divider}
                style={StyleSheet.applyWidth(
                  { height: 2, width: '100%' },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                  },
                  dimensions.width
                )}
              >
                {'Are you sure you want to log out?'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Cancel */}
                <Button
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      setLogout(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_18'],
                      borderRadius: 100,
                      color: theme.colors['Custom Color'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      height: 58,
                      textAlign: 'center',
                      width: '47%',
                    },
                    dimensions.width
                  )}
                  title={'Cancel'}
                />
                {/* Yes, Logout */}
                <Button
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      setLogout(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.primary,
                      borderRadius: 100,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      height: 58,
                      textAlign: 'center',
                      width: '47%',
                    },
                    dimensions.width
                  )}
                  title={'Yes, Logout'}
                />
              </View>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
