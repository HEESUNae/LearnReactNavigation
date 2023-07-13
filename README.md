# React-Native Navigation

## React Navigation

```
npm i @react-navigation/native
npm i react-native-screens react-native-safe-area-context

cd ios
pod install
```

- 헤더 타이틀 변경
- 헤더 스타일 커스텀
- 헤더의 좌측, 타이틀, 우측 영역에 다른 컴포넌트 보여주기
- 헤더 숨기기

## Native Stack Navigator

```
npm i @react-navigation/native-stack

cd ios
pod install
```

- 다른 페이지로 이동
- 라우터 파라미터
- 뒤로가기

## Drawer Navigator

```
npm i @react-navigation/drawer react-native-gesture-handler react-native-reanimated

cd ios
pod install

// 캐시삭제
npm start -- --reset-cache
```

**babel.config.js**

```
module.exports = {
   plugins: ['react-native-reanimated/plugin']
}
```

- 햄버거 메뉴 클릭시 드로어 네비게이션 실행
- 드로어 네비게이션 스타일 커스텀
- 드로어 네비게이션 다른 UI로 변경

## Bottom Tab Navigation

```
npm i @react-navigation/bottom-tabs react-native-vector-icons

// use typescript
npm i --save-dev @types/react-native-vector-icons

cd ios
pod install
```

- 하단 탭 네비게이션 아이콘 변경
- 하단 탭 네비게이션 스타일 커스텀
- Native Stack Navigater 와 함께 사용

> 아이콘 변경

**ios/LearnReactNavigation/Info.plist**

```
...
	<key>UIAppFonts</key>
	<array>
		<string>MaterialIcons.ttf</string>
	</array>
</dict>
</plist>
```

**android/app/build.gradle**

```
...
project.ext.vectoricons = [
    iconFontNames: ['MaterialIcons.ttf']
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Material Top Tabs Navigation

```
npm i @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view

cd ios
pod install
```

- 머터리얼 상단 탭 네비게이션 스타일 커스텀
