import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from "./views/screens/layout";
import ScreenHome from "./views/screens/home";
import ScreenDiscography from "./views/screens/discography";
import ScreenDownloads from "./views/screens/downloads";
import ScreenScreenTabs from "./views/screens/screenTabs";
import ScreenTutorials from "./views/screens/tutorials"
import ScreenBackingTracks from "./views/screens/backingTracks";
import ScreenVideos from "./views/screens/videos";
import ScreenPhotos from "./views/screens/photos";
import ScreenContact from "./views/screens/contact";
import ScreenLyrics from "./views/screens/lyrics";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={ScreenHome} />
            <Route path="/discografia" component={ScreenDiscography} />
            <Route path="/descargas" component={ScreenDownloads} />
            <Route path="/screenTabs" component={ScreenScreenTabs} />
            <Route path="/tutoriales" component={ScreenTutorials} />
            <Route path="/backingTracks" component={ScreenBackingTracks} />
            <Route path="/videos" component={ScreenVideos} />
            <Route path="/fotos" component={ScreenPhotos} />
            <Route path="/contacto" component={ScreenContact} />
            <Route path="/lyrics" component={ScreenLyrics} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
