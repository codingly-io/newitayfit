import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TrackList } from "./track/TrackList";
import { TrackCreate } from "./track/TrackCreate";
import { TrackEdit } from "./track/TrackEdit";
import { TrackShow } from "./track/TrackShow";
import { LessonList } from "./lesson/LessonList";
import { LessonCreate } from "./lesson/LessonCreate";
import { LessonEdit } from "./lesson/LessonEdit";
import { LessonShow } from "./lesson/LessonShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ItayFit"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Track"
          list={TrackList}
          edit={TrackEdit}
          create={TrackCreate}
          show={TrackShow}
        />
        <Resource
          name="Lesson"
          list={LessonList}
          edit={LessonEdit}
          create={LessonCreate}
          show={LessonShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
