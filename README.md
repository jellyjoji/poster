# 엘레벤탈 포스터 이미지 변경

## 이벤트 처리 방식을 사용하여 클릭 이벤트 표현

https://javascript.info/event-delegation

## 반복문 사용

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

### 이미지 변경

이미지와 색상의 데이터는 data.js 에서 사용

```jsx
target.src = `./assets/${data.name}.jpeg`;
target.alt = data.alt;
```

```jsx
visualImg.src = `./assets/${data[i].name}.jpeg`;
visualImg.alt = data[i].alt;
```

### 텍스트 변경

```jsx
nickname.textContent = data[i].name;
```

### 배경색 변경

```jsx
elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
```

```jsx
body.style.background = `linear-gradient(to bottom, ${data[i].color[0]}, ${data[i].color[1]})`;
```
