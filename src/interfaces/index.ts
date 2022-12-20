import { ImageEditorProps } from "expo-image-editor";

export interface FileCollectorProps {
    submitSingleData: Function,
    submitMultipleData: Function,
    ImageComponent: any,
    enableAlbums: boolean,
    enableMultiSelect: boolean,
    enableCameraCapture: boolean,
    multiSelectOptions: MultiSelectOptionsProps,
    modalRef: any,
    headerText: string,
    multipleSelectEnabled: boolean,
}

interface MultiSelectOptionsProps {
    minimumImageCount: number,
    maximumImageCount: number
}

export interface HeaderProps {
    modalRef: any,
    headerText: string,
    enableDone: boolean,
    multiSelectSubmit: Function
}

export interface AlbumPickerProps {
    showAlbums: boolean,
    selectedAlbum: any,
    albums: any,
    handleAlbumClick: Function,
}

export interface HamroImagePickerProps {
    handlePickerClose: Function,
    handleSubmit: Function,
    enablePicker: boolean,
    enableAlbums: boolean,
    ImageComponent: any,
    enableCameraCapture: boolean,
    enableMultiSelect: boolean,
    multiSelectOptions: MultiSelectOptionsProps,
    headerText: string,
    backButtonClose: boolean,
    coverScreen: boolean,
    swipeToClose: boolean,
    enableEditor: boolean,
    editorOptions: ImageEditorProps,
    multipleSelectEnabled: boolean,
}