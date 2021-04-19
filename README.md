
# react-native-usefulapp

## Getting started

`$ npm install react-native-usefulapp --save`

### Mostly automatic installation

`$ react-native link react-native-usefulapp`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-usefulapp` and add `RNUsefulapp.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNUsefulapp.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.exampleapp.RNUsefulappPackage;` to the imports at the top of the file
  - Add `new RNUsefulappPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-usefulapp'
  	project(':react-native-usefulapp').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-usefulapp/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-usefulapp')
  	```


## Usage
```javascript
import RNUsefulapp from 'react-native-usefulapp';

// TODO: What to do with the module?
RNUsefulapp;
```
  