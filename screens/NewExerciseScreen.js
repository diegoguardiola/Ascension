import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Pressable, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Modal, StatusBar, Text, View } from 'react-native';

const NewExerciseScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }

      const entry = StatusBar.pushStackEntry?.({ barStyle: 'dark-content' });
      return () => StatusBar.popStackEntry?.(entry);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(0,0,0)' },
        dimensions.width
      )}
    >
      <View style={StyleSheet.applyWidth({ height: 200 }, dimensions.width)}>
        {/* New Exercise */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'workoutScratch',
                value: '1',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              { top: 50 }
            ),
            dimensions.width
          )}
          title={'New Strength Workout'}
        />
      </View>
      {/* Strength Modal */}
      <Modal
        supportedOrientations={['portrait', 'landscape']}
        transparent={false}
        animationType={'slide'}
        presentationStyle={'fullScreen'}
        visible={parseInt(Constants['workoutScratch'], 10)}
      >
        {/* Close Strength Modal */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'workoutScratch',
                value: '0',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ top: 50 }, dimensions.width)}
          title={'Close Modal'}
        />
        {/* New Exercise */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'exerciseList',
                value: '1',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ top: 50 }, dimensions.width)}
          title={'New Exercise'}
        />
      </Modal>
      {/* Exercise Modal */}
      <Modal
        animationType={'none'}
        supportedOrientations={['portrait', 'landscape']}
        transparent={false}
        visible={parseInt(Constants['exerciseList'], 10)}
      >
        <View
          style={StyleSheet.applyWidth(
            { gap: 75, justifyContent: 'space-evenly' },
            dimensions.width
          )}
        >
          {/* New Exercise */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'exerciseList',
                  value: '0',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ top: 50 }, dimensions.width)}
            title={'Close'}
          />
          <Pressable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'exerciseList',
                  value: '0',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            androidRippleBorderless={false}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {'Squat'}
            </Text>
          </Pressable>
          {/* Pressable 2 */}
          <Pressable>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {'Bench Press'}
            </Text>
          </Pressable>
          {/* Pressable 3 */}
          <Pressable>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {'Pull Up'}
            </Text>
          </Pressable>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(NewExerciseScreen);
