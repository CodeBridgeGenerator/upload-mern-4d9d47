import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleStudentDetailsPage from "../components/app_components/StudentDetailsPage/SingleStudentDetailsPage";
import StudentDetailProjectLayoutPage from "../components/app_components/StudentDetailsPage/StudentDetailProjectLayoutPage";
import SingleTicketsPage from "../components/app_components/TicketsPage/SingleTicketsPage";
import TicketProjectLayoutPage from "../components/app_components/TicketsPage/TicketProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
<Route path="/studentDetails/:singleStudentDetailsId" exact element={<SingleStudentDetailsPage />} />
<Route path="/studentDetails" exact element={<StudentDetailProjectLayoutPage />} />
<Route path="/tickets/:singleTicketsId" exact element={<SingleTicketsPage />} />
<Route path="/tickets" exact element={<TicketProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
        </Routes>
    );
}

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
