# expo-hamro-image-picker

Dynamic Image/Files Picker For Expo

## Basic Usage

```js
import React from 'react';
import { View, Button } from 'react-native';
import ExpoHamroImagePicker from 'expo-hamro-image-picker';

export default function Test() {
    const [showPicker, setShowPicker] = useState(false);

    const handleSubmit = (data) => {
        console.log(data)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <ExpoHamroImagePicker
                    handlePickerClose={()=>console.log("picker closed")}
                    enablePicker={showPicker}
                    handleSubmit={handleSubmit}
                    enableEditor={true}
                    enableMultiSelect={true}
                    headerText="New Image"
                />
                <Button title="Open Image Picker" onPress={()=>setShowPicker(true)}/>
            </View>
        )
    }
}
```
## Props

| Parameter     | type  | required |  default | description   |
| ------------- | ----- | -------- | -------- | ------------- |
| enablePicker|boolean|Yes||open/hide image picker|
| headerText|string|No|New Post|header text shows at top|
| enableAlbums|boolean|No|true|allows select albums|
| enableCameraCapture|boolean|No|true|allows capture image using camera|
| enableMultiSelect|boolean|No|false|allows select multiple image/file|
| multiSelectOptions|MultiSelectOptionsProps|No|```js { minimumImageCount: 1, maximumImageCount: -1 }```|configuration for multi image/file select|
| backButtonClose|boolean|No|true|close image picker on back button press|
| coverScreen|boolean|No|true|covers entire screen|
| swipeToClose|boolean|No|true|swipe down to close|
| multipleSelectEnabled|boolean|No|false|multiple image/file select enabled by default when picker opens|
| ImageComponent|Component|No|ImageBackground|allows to use different Image Component. i.e. Image/FastImage etc.|
| handlePickerClose|function|No|```js ()=>{console.log("picker closes")}```|triggers when picker closes|
| handleSubmit|function|No|```js (data)=>{console.log("picked image", data)}```|triggers when everything is done|
| enableEditor|boolean|No|true|enable editor to allow edit picked image|
| editorOptions|ImageEditorProps|No||Image Editor Configurations: https://github.com/thomas-coldwell/expo-image-editor|

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT