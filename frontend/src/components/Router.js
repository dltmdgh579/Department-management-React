import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import AllList from "../page/personnel-info/list/AllList";
import PersonnelInfoDetail from "../page/personnel-info/detail/PersonnelInfoDetail";
import GroupInfo from "../page/department/group/GroupInfo";
import DepartmentInfo from "../page/department/DepartmentInfo";
import PersonnelPost from "../page/personnel-info/post/PersonnelPost";
import AbsentInfo from "../page/department/group/AbsentInfo";
import AddGroupMember from "../page/department/group/AddGroupMember";
import DepartmentMemberList from "../page/department/DepartmentMemberList";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>

      {/* 전체 인원 리스트 페이지 */}
      <Route path="/list" element={<AllList />}></Route>
      {/* 인원 추가 작성 페이지 */}
      <Route path="/personnel/post" element={<PersonnelPost />}></Route>
      {/* 인원 상세정보 */}
      <Route path="/detail/:id" element={<PersonnelInfoDetail />}></Route>

      {/* 부서 상세 페이지 */}
      <Route path="/:department" element={<DepartmentInfo />}></Route>
      <Route
        path="/:department/list"
        element={<DepartmentMemberList />}
      ></Route>

      {/* 부서 별 그룹 상세페이지 */}
      <Route path="/:department/:group" element={<GroupInfo />}></Route>
      <Route path="/:department/:group/absent" element={<AbsentInfo />}></Route>
      <Route path="/list/add" element={<AddGroupMember />}></Route>
    </Routes>
  </BrowserRouter>
);
