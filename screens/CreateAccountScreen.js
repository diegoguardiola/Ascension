import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const CreateAccountScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom Color'],
          justifyContent: 'center',
        },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth({ paddingBottom: 35 }, dimensions.width)}
      >
        {/* Title */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 24,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Create account'}
        </Text>
        {/* sub title */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              marginTop: 8,
              opacity: 0.6,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Lorem ipsum dolor sit amet'}
        </Text>
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Email */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
            },
            dimensions.width
          )}
        >
          {'Email'}
        </Text>
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newTextInputValue => {
            try {
              setTextInputValue(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          webShowOutline={true}
          editable={true}
          placeholder={'Enter your email address'}
          placeholderTextColor={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 5,
              borderRightWidth: 1,
              borderTopWidth: 1,
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
              height: 52,
              marginTop: 12,
              paddingBottom: 8,
              paddingLeft: 16,
              paddingRight: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
          value={textInputValue}
        />
        {/* Continue with Email */}
        <Button
          iconPosition={'left'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_5'],
              borderRadius: 24,
              fontFamily: 'System',
              fontSize: 16,
              fontWeight: '700',
              height: 56,
              marginTop: 35,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Continue with Email'}
        />
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 25,
            },
            dimensions.width
          )}
        >
          <Divider
            color={theme.colors['Custom Color_14']}
            style={StyleSheet.applyWidth(
              { height: 1, width: 60 },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_14'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                paddingLeft: 16,
                paddingRight: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Or continue with'}
          </Text>
          <Divider
            color={theme.colors['Custom Color_14']}
            style={StyleSheet.applyWidth(
              { height: 1, width: 60 },
              dimensions.width
            )}
          />
        </View>

        <Touchable
          style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color_2'],
                borderLeftWidth: 1,
                borderRadius: 24,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.IconGoogle}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 16,
                },
                dimensions.width
              )}
            >
              {'Continue with Google'}
            </Text>
          </View>
        </Touchable>

        <Touchable
          style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color_2'],
                borderLeftWidth: 1,
                borderRadius: 24,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.IconApple}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 16,
                },
                dimensions.width
              )}
            >
              {'Continue with Apple'}
            </Text>
          </View>
        </Touchable>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 45,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                opacity: 0.64,
              },
              dimensions.width
            )}
          >
            {'Already have an account? '}
          </Text>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LoginEmailScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_5'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Login'}
            </Text>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CreateAccountScreen);
