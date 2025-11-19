import React, { useRef, useEffect, ReactNode } from 'react';
import { View, TouchableOpacity, Modal, Animated, PanResponder } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';
import { styles } from './BaseModal.styles';

interface BaseModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  height?: number; // Percentage of screen height (0-1)
  showDragIndicator?: boolean;
  showCloseButton?: boolean;
  enableDragAnywhere?: boolean; // Allow dragging from anywhere in the modal
}

export default function BaseModal({
  visible,
  onClose,
  title,
  children,
  height = 0.8,
  showDragIndicator = true,
  showCloseButton = true,
  enableDragAnywhere = true,
}: BaseModalProps) {
  const translateY = useRef(new Animated.Value(1000)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  // PanResponder for drag-to-close gesture on drag indicator
  const dragIndicatorPanResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Only activate if dragging down
        return gestureState.dy > 5 && Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 150 || gestureState.vy > 0.5) {
          // Close modal
          handleClose();
        } else {
          // Snap back to original position
          Animated.timing(translateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  // PanResponder for drag-to-close gesture anywhere in the modal
  const modalPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponderCapture: (_, gestureState) => {
        // Only activate if dragging down and not on interactive elements
        return enableDragAnywhere && gestureState.dy > 5 && Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 150 || gestureState.vy > 0.5) {
          // Close modal
          handleClose();
        } else {
          // Snap back to original position
          Animated.timing(translateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  // Animation entrance/exit
  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      opacity.setValue(0);
      translateY.setValue(1000);
    }
  }, [visible]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 1000,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
      translateY.setValue(1000);
      opacity.setValue(0);
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="none"
      transparent={true}
      onRequestClose={handleClose}
    >
      <Animated.View style={[styles.overlay, { opacity }]}>
        <TouchableOpacity
          style={styles.overlayTouchable}
          activeOpacity={1}
          onPress={handleClose}
        />
        <Animated.View
          style={[
            styles.modalContainer,
            {
              height: `${height * 100}%`,
              transform: [{ translateY }],
            },
          ]}
          {...(enableDragAnywhere ? modalPanResponder.panHandlers : {})}
        >
          {/* Drag Indicator */}
          {showDragIndicator && (
            <View style={styles.dragIndicatorContainer} {...dragIndicatorPanResponder.panHandlers}>
              <View style={styles.dragIndicator} />
            </View>
          )}

          {/* Header */}
          {(title || showCloseButton) && (
            <View style={styles.header}>
              {title && <View style={styles.titleContainer}>{title}</View>}
              {showCloseButton && (
                <TouchableOpacity onPress={handleClose} activeOpacity={0.7}>
                  <Ionicons name="close" size={28} color={colors.secondary} />
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* Content */}
          {children}
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}
