import { ImageBackground, View, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FileCollector from "./FileCollector";
import { ImageEditor } from "expo-image-editor";
import Modal from "react-native-modalbox";
import * as imagePicker from "expo-image-picker";
import { HamroImagePickerProps } from "./interfaces";

const HamroImagePicker = ({
  handlePickerClose,
  handleSubmit,
  enablePicker,
  enableAlbums,
  ImageComponent,
  enableCameraCapture,
  enableMultiSelect,
  multiSelectOptions,
  headerText,
  backButtonClose,
  coverScreen,
  swipeToClose,
  enableEditor,
  editorOptions,
  multipleSelectEnabled,
}: HamroImagePickerProps) => {
  const [selectedImageData, setSelectedImageData] = useState<any>({});
  const modalRef = useRef<any>();

  useEffect(() => {
    if (enableCameraCapture) {
      getCameraPermission();
    }
    getMediaLibraryPermission();
  }, [enableCameraCapture]);

  const getMediaLibraryPermission = React.useCallback(async () => {
    const { granted } = await imagePicker.getMediaLibraryPermissionsAsync();
    if (!granted) {
      const result = await imagePicker.requestMediaLibraryPermissionsAsync();
      if (!result.granted) {
        Alert.alert("Error", "Permission denied");
      }
    }
  }, []);

  const getCameraPermission = React.useCallback(async () => {
    const { granted } = await imagePicker.getCameraPermissionsAsync();
    if (!granted) {
      const result = await imagePicker.requestCameraPermissionsAsync();
      if (!result.granted) {
        Alert.alert("Error", "Permission denied");
      }
    }
  }, []);

  const submitSingleData = (data: any) => {
    if (enableEditor) {
      setSelectedImageData(data);
    } else {
      handleSubmit({ hasMultiple: false, data });
      modalRef.current.close();
    }
  };

  const submitMultipleData = (data: any) => {
    handleSubmit({ hasMultiple: true, data });
    modalRef.current.close();
  };

  return (
    <Modal
      isOpen={enablePicker}
      onClosed={() => handlePickerClose()}
      position={enablePicker ? "center" : undefined}
      backButtonClose={backButtonClose}
      coverScreen={coverScreen}
      swipeToClose={swipeToClose}
      ref={modalRef}
    >
      {enablePicker ? (
        <View style={{ flex: 1, backgroundColor: "#000000" }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <FileCollector
              submitSingleData={submitSingleData}
              enableAlbums={enableAlbums}
              ImageComponent={ImageComponent}
              enableMultiSelect={enableMultiSelect}
              enableCameraCapture={enableCameraCapture}
              multiSelectOptions={multiSelectOptions}
              modalRef={modalRef}
              headerText={headerText}
              submitMultipleData={submitMultipleData}
              multipleSelectEnabled={multipleSelectEnabled}
            />

            <ImageEditor
              visible={enableEditor && selectedImageData.id ? true : false}
              onCloseEditor={() => setSelectedImageData({})}
              imageUri={selectedImageData?.uri}
              onEditingComplete={(result) => {
                handleSubmit({ hasMultiple: false, data: result });
                modalRef.current.close();
              }}
              asView={editorOptions.asView}
              mode={editorOptions.mode}
              fixedCropAspectRatio={editorOptions.fixedCropAspectRatio}
              lockAspectRatio={editorOptions.lockAspectRatio}
              minimumCropDimensions={editorOptions.minimumCropDimensions}
              throttleBlur={editorOptions.throttleBlur}
              allowedTransformOperations={
                editorOptions.allowedTransformOperations
              }
              allowedAdjustmentOperations={
                editorOptions.allowedAdjustmentOperations
              }
            />
          </View>
        </View>
      ) : null}
    </Modal>
  );
};

export default HamroImagePicker;

HamroImagePicker.defaultProps = {
  handlePickerClose: () => {},
  handleSubmit: () => {},
  enableAlbums: true,
  ImageComponent: ImageBackground,
  enableCameraCapture: true,
  enableMultiSelect: false,
  multiSelectOptions: {
    minimumImageCount: 1,
    maximumImageCount: -1,
  },
  headerText: "New Post",
  backButtonClose: true,
  coverScreen: true,
  swipeToClose: true,
  enableEditor: true,
  editorOptions: {
    asView: false,
    mode: "full",
    fixedCropAspectRatio: 16 / 9,
    lockAspectRatio: false,
    minimumCropDimensions: {
      width: 100,
      height: 100,
    },
    throttleBlur: false,
    allowedTransformOperations: ["crop", "rotate"],
    allowedAdjustmentOperations: ["blur"],
  },
  multipleSelectEnabled: false,
};
