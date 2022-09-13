import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// const SignIn = React.lazy(() => import('views/auth/signIn'));
// const Layout = React.lazy(() => import('layout/layout'));
// const RequireAuth = React.lazy(() => import('components/auth/requireAuth'));
// const Dashboard = React.lazy(() => import('views/dashboard/dashboard'));
// const Questions = React.lazy(() => import('views/questions/questions'));
// const Quiz = React.lazy(() => import('views/quiz/quiz'));
// const QuizAdmin = React.lazy(() => import('views/quizAdmin/quizAdmin'));
// const CreateQuestion = React.lazy(
//   () => import('views/createQuestion/createQuestion')
// );
// const UpdateQuestion = React.lazy(
//   () => import('views/updateQuestion/updateQuestion')
// );

const Router = () => {
  return (
    <Routes>
      {/* <Route path='/login' element={<SignIn />} />
      <Route element={<Layout />}>
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path='/questions'
          element={
            <RequireAuth>
              <Questions />
            </RequireAuth>
          }
        />
        <Route path='/restaurants'>
          <Route
            path=''
            element={
              <RequireAuth>
                <QuizAdmin />
              </RequireAuth>
            }
          />
          <Route
            path=':id'
            element={
              <RequireAuth>
                <Quiz />
              </RequireAuth>
            }
          />
        </Route>
        <Route path='/properties'>
          <Route
            path=''
            element={
              <RequireAuth>
                <CreateQuestion />
              </RequireAuth>
            }
          />
          <Route
            path=':id'
            element={
              <RequireAuth>
                <UpdateQuestion />
              </RequireAuth>
            }
          />
        </Route>

        <Route path='*' element={<Navigate to='/dashboard' replace />} />
      </Route> */}
    </Routes>
  );
};

export default Router;