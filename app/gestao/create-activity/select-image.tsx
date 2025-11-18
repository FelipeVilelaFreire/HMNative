import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { ImagePicker } from '@/src/components/features/ImagePicker';

export default function SelectImagePage() {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const handleNext = (selectedUris: string[]) => {
    console.log('Fotos selecionadas:', selectedUris);
    router.push({
      pathname: '/add',
      params: { images: JSON.stringify(selectedUris) },
    });
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImagePicker
        onCancel={handleCancel}
        onNext={handleNext}
        maxSelection={5}
      />
    </>
  );
}
