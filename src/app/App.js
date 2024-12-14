import { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "../pages/Counter.jsx";
import HelloGet from "../pages/HelloGet.jsx";
import HelloQuery from "../pages/HelloQuery.jsx";

// Создание роутера приложения, который в зависимости от url отрисовывает
// определенную компоненту
// Ссылка на документацию: https://reactrouter.com/en/main/start/tutorial (демонстрация нового API)
// Ссылка на видеокурс по маршрутизации: https://www.youtube.com/playlist?list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE (старый API, но смысл такой же)
const router = createBrowserRouter([
  {
    // Корневая компонента по url: "/". Она отрисовывает лэйаут приложения,
    // куда подставляется контент странички
    path: "/counter",
    element: <Counter />,
    // Вложенные роуты, которые будут подставляться в лэйаут
  },
  {
    path: "/hello",
    element: <HelloGet />,
  },
  {
    path: "/hello_q",
    element: <HelloQuery />,
  },
]);

// Компонента приложения, которая содержит состояние приложения. Именно она вмортируется в div#root, который
// описан в index.html
export class App extends Component {
  constructor(props) {
    super(props);

    // Задаем объект пользователя
    this.state = {
      user: undefined,
    };
  }

  // Метод отрисовки компоненты
  render() {
    return (
      // Провайдинг контекста. Контекст работает по принципу шины. Через него компонента App
      // предоставляет данные дочерним компонентам. Использование контекста позволяет избежать такой проблемы
      // как props drilling или сквозной передачи пропсов через множество компонент.
      // Контекст имеет пропс value, куда мы передаем объект, содержащий данные контекста
      // Видеоролик по React Context: https://www.youtube.com/watch?v=W_-TO_reSGs
      // В этом ролике автор показывает синтаксис работы с контекстом для функциональных компонент. В целом можете использовать пример,
      // который рассматривали на семинар, но так же можете воспользоваться примером из урока
      <>
        {/* // Компонента провайдинга роутера. Ее использование важно для работы маршрутизации приложения
                // Чтобы роутер заработал, ему необходмо передатать объект конфигурации роутера в качестве пропса */}
        <RouterProvider router={router} />
      </>
    );
  }
}
