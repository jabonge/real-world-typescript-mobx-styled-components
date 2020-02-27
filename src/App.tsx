import React, { FC } from 'react';
// import { useObserver } from 'mobx-react';
// import useStores from './hooks/useStores';
import Header from './common/Header';
import GlobalStyles from './styles/globalStyles';
import { Switch, Route } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import CustomModal from './common/Modal';

// function useUserStore() {
//   const { UserStore } = useStores();
//   return useObserver(() => ({
//     user: UserStore.user,
//     loading: UserStore.loading,
//     getUser: UserStore.getUser
//   }));
// }

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <CustomModal />
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

// const App: FC = () => {
//   useEffect(() => {
//     userStore.getUser();
//   }, []);

//   return useObserver(() => (
//     <>
//       {userStore.loading ? (
//         <h1>...loading</h1>
//       ) : userStore.user ? (
//         <h1>{userStore.user.username}</h1>
//       ) : (
//         <div>hi first</div>
//       )}
//     </>
//   ));
// };

export default App;
