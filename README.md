# frontend-survival-week02

* Babel REPL Test
  * <https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=EwFgbAzABGxgnEA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.22.9&externalPlugins=&assumptions=%7B%7D>
  * presets stage-*
    * 0-4 단계까지 있고, 올라갈수록 stable 한 버전이다.
      * <https://stackoverflow.com/questions/37251552/whats-the-difference-between-babel-preset-stage-0-babel-preset-stage-1-etc>

* React Element / React Node / JSX.Element
  * 범주: ReactNode > ReactElement > JSX.Element
  * ReactElement 는 React.createElement 의 반환 형태 (객체)
  * ReactNode 는 ReactElement 의 상위집합.
  * JSX.Element 는 ReactElement 과 거의 호환되고, TS 로 JSX 를 짜면 반환되는 타입이다.
  * 함수형 컴포넌트는 ReactElement 를 리턴하고, 클래스형 컴포넌트는 ReactNode 를 리턴한다. 때문에
    * <https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement/59840095#59840095>
  * <https://www.howdy-mj.me/react/react-node-and-jsx-element>

* 왜 import React 하지않아도 되는가?
  * Babel 의 새로운 JSX transform
    * react/jsx-runtime 로 JSX 구문을 jsx 함수로 변환한다.
    * 빌드 시점에 Babel 이 주입하는 방식. 때문에 개발자는 react/jsx-runtime 을 임포트하지않아도 된다.
  * Reference, <https://so-so.dev/react/import-react-from-react/>