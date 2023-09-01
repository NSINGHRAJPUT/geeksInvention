
import './App.css';
import React, { lazy, Suspense } from 'react';
import Fallback from './components/FallBack/Fallback';
const Clients = lazy(() => import('./components/Clients/Clients'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Hero = lazy(() => import('./components/Header/Hero'));
const Info = lazy(() => import('./components/Info/Info'));
const Platforms = lazy(() => import('./components/Platforms/Platforms'));
const Teams = lazy(() => import('./components/Teams/Teams'));
const WorkList1 = lazy(() => import('./components/Work-list/WorkList1'));
const WorkList2 = lazy(() => import('./components/Work-list/Worklist2'));
const Header = lazy(() => import('./components/Header/Header'));

function App() {
  return (
    <>
      <Suspense fallback=
        {<Fallback />}>
        <Header />
        <Hero />
        <WorkList1 />
        <WorkList2 />
        <Info />
        <Clients />
        <Platforms />
        <Teams />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
