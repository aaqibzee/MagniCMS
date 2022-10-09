(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/jXb":
/*!****************************************************************!*\
  !*** ./src/app/teacher/teacher-form/teacher-form.component.ts ***!
  \****************************************************************/
/*! exports provided: TeacherFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherFormComponent", function() { return TeacherFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/teacher.service */ "sz4S");
/* harmony import */ var src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/course.service */ "Pv0z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");






class TeacherFormComponent {
    constructor(service, courseService) {
        this.service = service;
        this.courseService = courseService;
        this.courses = [];
        this.subjectsDropdownSettings = {};
        this.coursesDropdownSettings = {};
        this.subjectsDropdownSettings = {
            singleSelection: false,
            idField: 'Id',
            textField: 'Name',
            noDataAvailablePlaceholderText: 'Select Course First',
            limitSelection: 6,
            itemsShowLimit: 6,
            allowSearchFilter: true
        };
        this.coursesDropdownSettings = {
            singleSelection: false,
            idField: 'Id',
            textField: 'Name',
            limitSelection: 6,
            itemsShowLimit: 6,
            allowSearchFilter: true
        };
        courseService.refreshList();
        this.courses = courseService.courseList;
    }
    ngOnInit() {
        this.resetFormData();
    }
    onSubmit(form) {
        this.service.formData.Subjects = this.service.selectedSubjects.map(x => x.Id);
        this.service.formData.Courses = this.service.selectedCourses.map(x => x.Id);
        if (this.service.formData.Id == 0) {
            this.inserRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    }
    inserRecord(form) {
        this.service.postTeacher().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    updateRecord(form) {
        this.service.putTeacher().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    resetForm(form) {
        form.form.reset();
        this.resetFormData();
    }
    resetFormData() {
        this.service.resetFormData();
    }
}
TeacherFormComponent.ɵfac = function TeacherFormComponent_Factory(t) { return new (t || TeacherFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"])); };
TeacherFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherFormComponent, selectors: [["app-teacher-form"]], decls: 41, vars: 13, consts: [["ngNativeValidate", "", 3, "submit"], ["form", "ngForm"], ["type", "hidden", "name", "id", 3, "value"], [1, "form-group"], [1, "label", "label-default"], [1, "lbl-required"], ["placeholder", " Name", "name", "name", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["Name", "ngModel"], ["type", "date", "placeholder", "Pick Date Of Birth", "name", "dob", "max", "2005-12-31", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["dob", "ngModel"], ["placeholder", "Salary", "name", "salary", "type", "number", "min", "0", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["salary", "ngModel"], ["name", "coursesSelect", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], ["name", "subjectSelect", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange"], [1, "row"], [1, "form-group", "col-md-6"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block", 3, "click"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block"]], template: function TeacherFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TeacherFormComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.service.formData.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.service.formData.Birthday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Salary $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherFormComponent_Template_input_ngModelChange_22_listener($event) { return ctx.service.formData.Salary = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ng-multiselect-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherFormComponent_Template_ng_multiselect_dropdown_ngModelChange_28_listener($event) { return ctx.service.selectedCourses = $event; })("onSelect", function TeacherFormComponent_Template_ng_multiselect_dropdown_onSelect_28_listener($event) { return ctx.service.onCourseSelect($event); })("onDeSelect", function TeacherFormComponent_Template_ng_multiselect_dropdown_onDeSelect_28_listener($event) { return ctx.service.onCourseDeselect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ng-multiselect-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherFormComponent_Template_ng_multiselect_dropdown_ngModelChange_33_listener($event) { return ctx.service.selectedSubjects = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherFormComponent_Template_button_click_36_listener() { return ctx.resetFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Salary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Course(s)")("settings", ctx.coursesDropdownSettings)("data", ctx.courses)("ngModel", ctx.service.selectedCourses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Subject(s)")("settings", ctx.subjectsDropdownSettings)("data", ctx.service.subjectsForSelectedCourses)("ngModel", ctx.service.selectedSubjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.Id != 0 ? "Update" : "Add", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]], styles: [".lbl-required[_ngcontent-%COMP%] {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InRlYWNoZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxibC1yZXF1aXJlZCB7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-form',
                templateUrl: './teacher-form.component.html',
                styleUrls: ['./teacher-form.component.css'],
            }]
    }], function () { return [{ type: _shared_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] }]; }, null); })();


/***/ }),

/***/ "/naD":
/*!***************************************!*\
  !*** ./src/app/shared/grade.model.ts ***!
  \***************************************/
/*! exports provided: Grade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grade", function() { return Grade; });
class Grade {
    constructor() {
        this.Id = 0;
        this.Title = '';
        this.StartingMarks = 0;
        this.EndingMarks = 0;
        this.Course = null;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal\Projects\Angular\Magni CMS\MagniCMS\MagniCollegeManagementSystem\Client\src\main.ts */"zUnb");


/***/ }),

/***/ "0EBP":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Constants */ "z9QB");
/* harmony import */ var _shared_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/subject.service */ "lLrn");
/* harmony import */ var _shared_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/result.service */ "CLH5");
/* harmony import */ var _shared_grade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/grade.service */ "uab5");
/* harmony import */ var _subject_form_subject_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject-form/subject-form.component */ "mugH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SubjectComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectComponent_tr_31_Template_td_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const subj_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.UpdateSubject(subj_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectComponent_tr_31_Template_td_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const subj_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.DeleteSubject(subj_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subj_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subj_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subj_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subj_r1.Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subj_r1.Course == null ? null : subj_r1.Course.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subj_r1.CreditHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((subj_r1.Teacher == null ? null : subj_r1.Teacher.Name) ? subj_r1.Teacher == null ? null : subj_r1.Teacher.Name : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subj_r1.Students == null ? null : subj_r1.Students.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.GetAverageGrade(subj_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.GetTooltipForDeleteButton(subj_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.IsDeleteable(subj_r1));
} }
class SubjectComponent {
    constructor(service, resultService, gradeService, ngZone) {
        this.service = service;
        this.resultService = resultService;
        this.gradeService = gradeService;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.service.refreshList();
        window[_shared_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].subjectComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
    }
    UpdateSubject(record) {
        this.service.populateForm(record);
    }
    DeleteSubject(record) {
        this.service.deleteSubject(record.Id).subscribe(result => {
            this.service.refreshList();
        }, error => {
            console.log(error);
        });
    }
    IsDeleteable(record) {
        var _a;
        return ((_a = record.Students) === null || _a === void 0 ? void 0 : _a.length) <= 0 && record.Teacher == null;
    }
    GetTooltipForDeleteButton(std) {
        return this.IsDeleteable(std) ? "" : "Delete Students and Teacher associated to this Subject first";
    }
    GetAverageGrade(subject) {
        var _a, _b, _c;
        let resultsForTheSubject = (_b = (_a = this.resultService) === null || _a === void 0 ? void 0 : _a.getList()) === null || _b === void 0 ? void 0 : _b.filter(x => { var _a; return ((_a = x.Subject) === null || _a === void 0 ? void 0 : _a.Id) == subject.Id; });
        let sum = 0;
        if (resultsForTheSubject == null) {
            return 'Grades not assigned yet';
        }
        resultsForTheSubject === null || resultsForTheSubject === void 0 ? void 0 : resultsForTheSubject.forEach(function (x) {
            sum += x.ObtainedMarks;
        });
        let average = sum / resultsForTheSubject.length;
        let grade = (_c = this.gradeService.getList()) === null || _c === void 0 ? void 0 : _c.find(x => {
            var _a, _b;
            return ((_a = x.Course) === null || _a === void 0 ? void 0 : _a.Id) == ((_b = subject.Course) === null || _b === void 0 ? void 0 : _b.Id) &&
                x.StartingMarks <= average &&
                x.EndingMarks >= average;
        });
        if (grade == null) {
            return 'N/A';
        }
        return grade === null || grade === void 0 ? void 0 : grade.Title;
    }
}
SubjectComponent.ɵfac = function SubjectComponent_Factory(t) { return new (t || SubjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
SubjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubjectComponent, selectors: [["app-subject"]], decls: 32, vars: 1, consts: [[1, "jumbotron", "py-3"], [1, "display-4", "text-center"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", "data-toggle", "tooltip", 1, "btn", "btn-danger", 3, "disabled", "title"]], template: function SubjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-subject-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Subject Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Credit Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Teacher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Students Enrolled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Average Grade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SubjectComponent_tr_31_Template, 23, 10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.subjectList);
    } }, directives: [_subject_form_subject_form_component__WEBPACK_IMPORTED_MODULE_5__["SubjectFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subject',
                templateUrl: './subject.component.html',
                styles: []
            }]
    }], function () { return [{ type: _shared_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] }, { type: _shared_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"] }, { type: _shared_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "0pn7":
/*!**********************************************************!*\
  !*** ./src/app/grade/grade-form/grade-form.component.ts ***!
  \**********************************************************/
/*! exports provided: GradeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeFormComponent", function() { return GradeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_grade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/grade.service */ "uab5");
/* harmony import */ var src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/course.service */ "Pv0z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GradeFormComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeFormComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const course_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onCourseSelect(course_r6); })("click", function GradeFormComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const course_r6 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return _r2.value = course_r6.Name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r6.Name, " ");
} }
class GradeFormComponent {
    constructor(service, courseService) {
        this.service = service;
        this.courseService = courseService;
    }
    ngOnInit() {
        this.resetFormData();
    }
    onSubmit(form) {
        if (this.IsFormInvalid()) {
            this.SetValidationMessages();
            return;
        }
        if (this.service.formData.Id == 0) {
            this.inserRecord(form);
            return;
        }
        this.updateRecord(form);
    }
    IsFormInvalid() {
        return this.service.formData.Course == null;
    }
    SetValidationMessages() {
        this.service.CourseSelcetValidationMesage = ": Required";
    }
    onCourseSelect(course) {
        this.service.formData.Course = course;
        this.service.CourseSelcetValidationMesage = "";
    }
    inserRecord(form) {
        this.service.postGrade().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    updateRecord(form) {
        this.service.putGrade().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    resetForm(form) {
        form.form.reset();
        this.resetFormData();
    }
    resetFormData() {
        this.service.resetFormData();
    }
}
GradeFormComponent.ɵfac = function GradeFormComponent_Factory(t) { return new (t || GradeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_grade_service__WEBPACK_IMPORTED_MODULE_1__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"])); };
GradeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeFormComponent, selectors: [["app-grade-form"]], decls: 44, vars: 8, consts: [["ngNativeValidate", "", 3, "submit"], ["form", "ngForm"], ["type", "hidden", "name", "id", 3, "value"], [1, "label", "label-default"], [1, "lbl-required"], [1, "form-group"], ["placeholder", "Grade Title", "name", "title", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["Title", "ngModel"], [1, "label", "label-default", "text-danger"], [1, "dropdown"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", 1, "btn", "btn-secondary", "dropdown-toggle", "drp-dwn"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["selectedCourse", ""], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["type", "number", "required", "", "min", "0", "max", "100", "placeholder", "Starting Marks", "name", "startingMarks", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["StartingMarks", "ngModel"], ["type", "number", "required", "", "min", "0", "max", "100", "placeholder", "EndingMarks", "name", "endingMarks", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["EndingMarks", "ngModel"], [1, "row"], [1, "form-group", "col-md-6"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block", 3, "click"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block"], ["type", "button", 1, "dropdown-item", 3, "click"]], template: function GradeFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function GradeFormComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GradeFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.service.formData.Title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GradeFormComponent_button_22_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Starting Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GradeFormComponent_Template_input_ngModelChange_28_listener($event) { return ctx.service.formData.StartingMarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ending Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GradeFormComponent_Template_input_ngModelChange_35_listener($event) { return ctx.service.formData.EndingMarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeFormComponent_Template_button_click_39_listener() { return ctx.resetFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.CourseSelcetValidationMesage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.service.formData == null ? null : ctx.service.formData.Course == null ? null : ctx.service.formData.Course.Name) ? ctx.service.formData == null ? null : ctx.service.formData.Course == null ? null : ctx.service.formData.Course.Name : "Select Course", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courseService.courseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.StartingMarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.EndingMarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.Id != 0 ? "Update" : "Add", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: [".drp-dwn[_ngcontent-%COMP%] {\n    width: 260px;\n    max-width: 100%;\n    height: 48px;\n    max-height: 100%;\n}\n.lbl-required[_ngcontent-%COMP%] {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImdyYWRlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcnAtZHduIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLmxibC1yZXF1aXJlZCB7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grade-form',
                templateUrl: './grade-form.component.html',
                styleUrls: ['./grade-form.component.css'],
                styles: []
            }]
    }], function () { return [{ type: _shared_grade_service__WEBPACK_IMPORTED_MODULE_1__["GradeService"] }, { type: src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CLH5":
/*!******************************************!*\
  !*** ./src/app/shared/result.service.ts ***!
  \******************************************/
/*! exports provided: ResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return ResultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "z9QB");
/* harmony import */ var _result_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result.model */ "u9X8");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ResultService {
    constructor(http) {
        this.http = http;
        this.formData = new _result_model__WEBPACK_IMPORTED_MODULE_2__["Result"]();
        this.SubjectSelcetValidationMesage = '';
        this.CourseSelcetValidationMesage = '';
        this.StudentSelcetValidationMesage = '';
        this.refreshList();
    }
    IsFormInvalid() {
        return this.formData.Course == null
            || this.formData.Student == null
            || this.formData.Subject == null
            || this.formData.Grade == null;
    }
    SetValidationMessages() {
        this.SubjectSelcetValidationMesage = this.formData.Subject == null ? ": Required" : '';
        this.CourseSelcetValidationMesage = this.formData.Course == null ? ": Required" : '';
        this.StudentSelcetValidationMesage = this.formData.Student == null ? ": Required" : '';
    }
    populateForm(student) {
        this.formData = Object.assign({}, student);
    }
    postResult() {
        return this.http.post(_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].resultsBase, this.formData);
    }
    putResult() {
        return this.http.put(_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].resultsBase + '/' + this.formData.Id, this.formData);
    }
    deleteResult(id) {
        return this.http.delete(_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].resultsBase + '/' + id);
    }
    refreshList() {
        this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].resultsBase)
            .toPromise()
            .then(res => this.resultsList = res);
    }
    resetFormData() {
        this.formData = new _result_model__WEBPACK_IMPORTED_MODULE_2__["Result"]();
        this.SubjectSelcetValidationMesage = '';
        this.CourseSelcetValidationMesage = '';
        this.StudentSelcetValidationMesage = '';
    }
    getList() {
        return this.resultsList;
    }
}
ResultService.ɵfac = function ResultService_Factory(t) { return new (t || ResultService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ResultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResultService, factory: ResultService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LLLq":
/*!*************************************************************!*\
  !*** ./src/app/course/course-form/course-form.component.ts ***!
  \*************************************************************/
/*! exports provided: CourseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseFormComponent", function() { return CourseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/course.service */ "Pv0z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CourseFormComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.resetFormData();
    }
    onSubmit(form) {
        if (this.service.formData.Id == 0) {
            this.inserRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    }
    inserRecord(form) {
        this.service.postCourse().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    updateRecord(form) {
        this.service.putCourse().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    resetForm(form) {
        form.form.reset();
        this.resetFormData();
    }
    resetFormData() {
        this.service.resetFormData();
    }
}
CourseFormComponent.ɵfac = function CourseFormComponent_Factory(t) { return new (t || CourseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"])); };
CourseFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseFormComponent, selectors: [["app-course-form"]], decls: 31, vars: 5, consts: [["ngNativeValidate", "", 3, "submit"], ["form", "ngForm"], ["type", "hidden", "name", "id", 3, "value"], [1, "label", "label-default"], [1, "lbl-required"], [1, "form-group"], ["placeholder", "Course Name", "name", "Name", "required", "", "maxlength", "100", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["CourseCode", "ngModel"], ["placeholder", "Course Code", "name", "code", "required", "", "maxlength", "100", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "3", "placeholder", "Total Credit Hours", "name", "name", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["SubjectsCount", "ngModel"], [1, "row"], [1, "form-group", "col-md-6"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block", 3, "click"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block"]], template: function CourseFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CourseFormComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.service.formData.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.service.formData.Code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total Credit Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseFormComponent_Template_input_ngModelChange_22_listener($event) { return ctx.service.formData.TotalCreditHours = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseFormComponent_Template_button_click_26_listener() { return ctx.resetFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.TotalCreditHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.Id != 0 ? "Update" : "Add", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: [".lbl-required[_ngcontent-%COMP%] {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiY291cnNlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYmwtcmVxdWlyZWQge1xuICAgIGNvbG9yOiByZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-form',
                templateUrl: './course-form.component.html',
                styleUrls: ['./course-form.component.css'],
            }]
    }], function () { return [{ type: _shared_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"] }]; }, null); })();


/***/ }),

/***/ "Pv0z":
/*!******************************************!*\
  !*** ./src/app/shared/course.service.ts ***!
  \******************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _course_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course.model */ "vQy0");
/* harmony import */ var _shared_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Constants */ "z9QB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CourseService {
    constructor(http) {
        this.http = http;
        this.formData = new _course_model__WEBPACK_IMPORTED_MODULE_1__["Course"]();
        this.refreshList();
    }
    resetFormData() {
        this.formData = new _course_model__WEBPACK_IMPORTED_MODULE_1__["Course"]();
    }
    postCourse() {
        return this.http.post(_shared_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].coursesBase, this.formData);
    }
    putCourse() {
        return this.http.put(_shared_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].coursesBase + '/' + this.formData.Id, this.formData);
    }
    deleteCourse(id) {
        return this.http.delete(_shared_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].coursesBase + '/' + id);
    }
    refreshList() {
        this.http.get(_shared_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].coursesBase)
            .toPromise()
            .then(res => this.courseList = res);
    }
    getList() {
        return this.courseList;
    }
}
CourseService.ɵfac = function CourseService_Factory(t) { return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseService, factory: CourseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [[1, "navbar", "navbar-light", "bg-light"], [1, "form-inline"], ["type", "button", "routerLink", "Student", 1, "btn", "btn-outline-success"], ["type", "button", "routerLink", "Teacher", 1, "btn", "btn-outline-success"], ["type", "button", "routerLink", "Subject", 1, "btn", "btn-outline-success"], ["type", "button", "routerLink", "Course", 1, "btn", "btn-outline-success"], ["type", "button", "routerLink", "Results", 1, "btn", "btn-outline-success"], ["type", "button", "routerLink", "Grade", 1, "btn", "btn-outline-success"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Manage Students ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Manage Teachers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Manage Subjects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Manage Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Manage Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Manage Grades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "VVDR":
/*!*******************************************!*\
  !*** ./src/app/shared/student.service.ts ***!
  \*******************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _student_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.model */ "mj4c");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "z9QB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course.service */ "Pv0z");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "lLrn");







class StudentService {
    constructor(http, courseService, subjectService) {
        this.http = http;
        this.courseService = courseService;
        this.subjectService = subjectService;
        this.courseDropDownDefaultValue = 'Select Course';
        this.genderDropDownDefaultValue = 'Select Gender';
        this.genderOptions = ['Male', 'Female', 'Other'];
        this.SubjectsSelcetValidationMesage = '';
        this.CourseSelcetValidationMesage = '';
        this.selectedCourseByStudent = this.courseDropDownDefaultValue;
        this.formData = new _student_model__WEBPACK_IMPORTED_MODULE_1__["Student"]();
        this.refreshList();
    }
    resetFormData() {
        this.formData = new _student_model__WEBPACK_IMPORTED_MODULE_1__["Student"]();
        this.selectedCourseByStudent = this.courseDropDownDefaultValue;
        this.selectedSubjectsByStudent = null;
        this.subjectsInselcetedCourse = null;
        this.SubjectsSelcetValidationMesage = '';
    }
    onSelectCourse(course) {
        var _a, _b;
        if ((course === null || course === void 0 ? void 0 : course.Id) != ((_b = (_a = this.formData) === null || _a === void 0 ? void 0 : _a.Course) === null || _b === void 0 ? void 0 : _b.Id)) {
            this.selectedCourseByStudent = course.Name;
            this.formData.Course = course;
            this.subjectsInselcetedCourse = this.subjectService.getList().filter(x => { var _a; return ((_a = x.Course) === null || _a === void 0 ? void 0 : _a.Id) == (course === null || course === void 0 ? void 0 : course.Id); });
            this.selectedSubjectsByStudent = [];
            this.SubjectsSelcetValidationMesage = course.TotalCreditHours + ' Credit Hours Left';
            this.CourseSelcetValidationMesage = '';
        }
    }
    populateForm(student) {
        this.selectedCourseByStudent = student.Course.Name;
        this.formData = Object.assign({}, student);
        this.subjectsInselcetedCourse = this.subjectService.getList().filter(x => { var _a, _b; return ((_a = x.Course) === null || _a === void 0 ? void 0 : _a.Id) == ((_b = student.Course) === null || _b === void 0 ? void 0 : _b.Id); });
        this.selectedSubjectsByStudent = this.getSelctedSubjectListWithAllDetails();
    }
    getSelctedSubjectListWithAllDetails() {
        let list = [];
        let form = this.formData;
        this.subjectsInselcetedCourse.filter(function (x) {
            var _a;
            if ((_a = form === null || form === void 0 ? void 0 : form.Subjects) === null || _a === void 0 ? void 0 : _a.includes(x.Id)) {
                list.push(x);
            }
        });
        return list;
    }
    postStudent() {
        return this.http.post(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].studentsBase, this.formData);
    }
    putStudent() {
        return this.http.put(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].studentsBase + '/' + this.formData.Id, this.formData);
    }
    deleteStudent(id) {
        return this.http.delete(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].studentsBase + '/' + id);
    }
    refreshList() {
        this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].studentsBase)
            .toPromise()
            .then(res => this.studentsList = res);
    }
    getList() {
        return this.studentsList;
    }
}
StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"])); };
StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"] }, { type: _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.component */ "hLTS");
/* harmony import */ var _student_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student/student-form/student-form.component */ "u4XX");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teacher/teacher.component */ "kgOV");
/* harmony import */ var _teacher_teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teacher/teacher-form/teacher-form.component */ "/jXb");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subject/subject.component */ "0EBP");
/* harmony import */ var _subject_subject_form_subject_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subject/subject-form/subject-form.component */ "mugH");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course/course.component */ "ioW2");
/* harmony import */ var _course_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./course/course-form/course-form.component */ "LLLq");
/* harmony import */ var _grade_grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./grade/grade-form/grade-form.component */ "0pn7");
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./grade/grade.component */ "nA50");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-date-picker */ "GL1M");
/* harmony import */ var _result_result_form_result_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./result/result-form/result-form.component */ "uBW2");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./result/result.component */ "nNT0");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot(),
            ng2_date_picker__WEBPACK_IMPORTED_MODULE_18__["DpDatePickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
        _student_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_9__["StudentFormComponent"],
        _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__["TeacherComponent"],
        _teacher_teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_11__["TeacherFormComponent"],
        _subject_subject_component__WEBPACK_IMPORTED_MODULE_12__["SubjectComponent"],
        _subject_subject_form_subject_form_component__WEBPACK_IMPORTED_MODULE_13__["SubjectFormComponent"],
        _course_course_component__WEBPACK_IMPORTED_MODULE_14__["CourseComponent"],
        _course_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_15__["CourseFormComponent"],
        _grade_grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_16__["GradeFormComponent"],
        _grade_grade_component__WEBPACK_IMPORTED_MODULE_17__["GradeComponent"],
        _result_result_form_result_form_component__WEBPACK_IMPORTED_MODULE_19__["ResultFormComponent"],
        _result_result_component__WEBPACK_IMPORTED_MODULE_20__["ResultComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"], ng2_date_picker__WEBPACK_IMPORTED_MODULE_18__["DpDatePickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
                    _student_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_9__["StudentFormComponent"],
                    _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__["TeacherComponent"],
                    _teacher_teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_11__["TeacherFormComponent"],
                    _subject_subject_component__WEBPACK_IMPORTED_MODULE_12__["SubjectComponent"],
                    _subject_subject_form_subject_form_component__WEBPACK_IMPORTED_MODULE_13__["SubjectFormComponent"],
                    _course_course_component__WEBPACK_IMPORTED_MODULE_14__["CourseComponent"],
                    _course_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_15__["CourseFormComponent"],
                    _grade_grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_16__["GradeFormComponent"],
                    _grade_grade_component__WEBPACK_IMPORTED_MODULE_17__["GradeComponent"],
                    _result_result_form_result_form_component__WEBPACK_IMPORTED_MODULE_19__["ResultFormComponent"],
                    _result_result_component__WEBPACK_IMPORTED_MODULE_20__["ResultComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot(),
                    ng2_date_picker__WEBPACK_IMPORTED_MODULE_18__["DpDatePickerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f3Tx":
/*!*****************************************!*\
  !*** ./src/app/shared/subject.model.ts ***!
  \*****************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
class Subject {
    constructor() {
        this.Id = 0;
        this.Name = '';
        this.Code = '';
        this.Teacher = null;
        this.Course = null;
        this.CreditHours = 0;
    }
}


/***/ }),

/***/ "hLTS":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Constants */ "z9QB");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/student.service */ "VVDR");
/* harmony import */ var _shared_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/result.service */ "CLH5");
/* harmony import */ var _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-form/student-form.component */ "u4XX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function StudentComponent_tr_31_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r4 = ctx.$implicit;
    const counter_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", counter_r5 + 1, ":", ctx_r2.GetSubjectName(subject_r4), " ");
} }
function StudentComponent_tr_31_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r6 = ctx.$implicit;
    const counter_r7 = ctx.index;
    const std_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", counter_r7 + 1, ":", ctx_r3.GetGrade(subject_r6, std_r1.Id), " ");
} }
function StudentComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StudentComponent_tr_31_div_10_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StudentComponent_tr_31_div_12_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentComponent_tr_31_Template_td_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const std_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.UpdateStudent(std_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentComponent_tr_31_Template_td_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const std_r1 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.DeleteStudent(std_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const std_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](std_r1.RegisterationNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](std_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](std_r1.Birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](std_r1.Course == null ? null : std_r1.Course.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", std_r1.Subjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", std_r1.Subjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](std_r1.Course == null ? null : std_r1.Course.TotalCreditHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((std_r1.Course == null ? null : std_r1.Course.TotalCreditHours) - ctx_r0.GetAvailedCreditHours(std_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.GetTooltipForDeleteButton(std_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.IsDeleteable(std_r1));
} }
class StudentComponent {
    constructor(ngZone, service, resultService) {
        this.ngZone = ngZone;
        this.service = service;
        this.resultService = resultService;
        this.deleteButtonToolTip = '';
        this.selectedItem = '';
        this.service.refreshList();
        this.resultService.refreshList();
    }
    ngOnInit() {
        window[_shared_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].studentComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
    }
    UpdateStudent(record) {
        this.service.populateForm(record);
    }
    DeleteStudent(record) {
        this.service.deleteStudent(record.Id).subscribe(result => {
        }, error => {
            console.log(error);
        });
        if (record.Id == this.service.formData.Id) {
            this.service.resetFormData();
        }
    }
    GetSubjectName(subjectId, stdId) {
        var _a, _b, _c;
        let subject = (_c = (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.subjectService) === null || _b === void 0 ? void 0 : _b.subjectList) === null || _c === void 0 ? void 0 : _c.find(x => x.Id == subjectId);
        return subject === null || subject === void 0 ? void 0 : subject.Name;
    }
    GetAvailedCreditHours(student) {
        var _a, _b, _c;
        let availedCreditHourse = 0;
        let subjects = (_c = (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.subjectService) === null || _b === void 0 ? void 0 : _b.subjectList) === null || _c === void 0 ? void 0 : _c.filter(x => { var _a; return (_a = student.Subjects) === null || _a === void 0 ? void 0 : _a.includes(x.Id); });
        subjects === null || subjects === void 0 ? void 0 : subjects.forEach(x => {
            availedCreditHourse += x.CreditHours;
        });
        return availedCreditHourse;
    }
    GetGrade(subjectId, stdId) {
        var _a, _b, _c, _d, _e, _f;
        let subject = (_c = (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.subjectService) === null || _b === void 0 ? void 0 : _b.subjectList) === null || _c === void 0 ? void 0 : _c.find(x => x.Id == subjectId);
        let result = (_d = this.resultService.resultsList) === null || _d === void 0 ? void 0 : _d.find(x => { var _a, _b; return ((_a = x.Student) === null || _a === void 0 ? void 0 : _a.Id) == stdId && ((_b = x.Subject) === null || _b === void 0 ? void 0 : _b.Id) == subject.Id; });
        return ((_e = result === null || result === void 0 ? void 0 : result.Grade) === null || _e === void 0 ? void 0 : _e.Title) ? "(" + ((_f = result === null || result === void 0 ? void 0 : result.Grade) === null || _f === void 0 ? void 0 : _f.Title) + ")" : "TBD";
    }
    IsDeleteable(std) {
        var _a;
        return ((_a = std.Results) === null || _a === void 0 ? void 0 : _a.length) <= 0;
    }
    GetTooltipForDeleteButton(std) {
        return this.IsDeleteable(std) ? "" : "Delete Results associated to this Student first";
    }
}
StudentComponent.ɵfac = function StudentComponent_Factory(t) { return new (t || StudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"])); };
StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["app-student"]], inputs: { selectedItem: "selectedItem" }, decls: 32, vars: 1, consts: [[1, "jumbotron", "py-3"], [1, "display-4", "text-center"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", "data-toggle", "tooltip", 1, "btn", "btn-danger", 3, "disabled", "title"]], template: function StudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-student-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Registeration Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Birthday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Subjects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Grades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Total Credit Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Remaining Credit Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, StudentComponent_tr_31_Template, 23, 10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.studentsList);
    } }, directives: [_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_4__["StudentFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student',
                templateUrl: './student.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _shared_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] }, { type: _shared_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"] }]; }, { selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ioW2":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Constants */ "z9QB");
/* harmony import */ var _shared_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/course.service */ "Pv0z");
/* harmony import */ var _shared_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/result.service */ "CLH5");
/* harmony import */ var _shared_grade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/grade.service */ "uab5");
/* harmony import */ var _course_form_course_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-form/course-form.component */ "LLLq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CourseComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_tr_29_Template_td_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const course_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.PopulateForm(course_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_tr_29_Template_td_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const course_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.DeleteCourse(course_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.TotalCreditHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.Students == null ? null : course_r1.Students.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.Teachers == null ? null : course_r1.Teachers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.GetAverageGrade(course_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.GetTooltipForDeleteButton(course_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.IsDeleteable(course_r1));
} }
class CourseComponent {
    constructor(service, ngZone, resultService, gradeService) {
        this.service = service;
        this.ngZone = ngZone;
        this.resultService = resultService;
        this.gradeService = gradeService;
        gradeService.refreshList();
        resultService.refreshList();
    }
    ngOnInit() {
        this.service.refreshList();
        window[_shared_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].courseComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
    }
    PopulateForm(course) {
        //assign the object copy and not the original object
        this.service.formData = Object.assign({}, course);
    }
    GetAverageGrade(course) {
        var _a, _b;
        let resultsForTheCourse = (_a = this.resultService.getList()) === null || _a === void 0 ? void 0 : _a.filter(x => x.Course.Id == course.Id);
        let sum = 0;
        if (resultsForTheCourse == null) {
            return 'Grades not assigned yet';
        }
        resultsForTheCourse === null || resultsForTheCourse === void 0 ? void 0 : resultsForTheCourse.forEach(function (x) {
            sum += x.ObtainedMarks;
        });
        let average = sum / resultsForTheCourse.length;
        let grade = (_b = this.gradeService.getList()) === null || _b === void 0 ? void 0 : _b.find(x => x.Course.Id == course.Id &&
            x.StartingMarks <= average &&
            x.EndingMarks >= average);
        if (grade == null) {
            return 'N/A';
        }
        return grade === null || grade === void 0 ? void 0 : grade.Title;
    }
    DeleteCourse(course) {
        this.service.deleteCourse(course.Id).subscribe(result => {
        }, error => {
            console.log(error);
        });
    }
    IsDeleteable(course) {
        var _a, _b, _c;
        var result = ((_a = course.Students) === null || _a === void 0 ? void 0 : _a.length) <= 0
            && ((_b = course.Teachers) === null || _b === void 0 ? void 0 : _b.length) <= 0
            && ((_c = course.Subjects) === null || _c === void 0 ? void 0 : _c.length) <= 0;
        return result;
    }
    GetTooltipForDeleteButton(course) {
        return this.IsDeleteable(course) ? "" : "Delete Students, Teachers and Subjects associated to this Course first";
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"])); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], decls: 30, vars: 1, consts: [[1, "jumbotron", "py-3"], [1, "display-4", "text-center"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", "data-toggle", "tooltip", 1, "btn", "btn-danger", 3, "disabled", "title"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-course-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ttoal Credit Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Students Enrolled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Teachers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Average Grade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CourseComponent_tr_29_Template, 21, 9, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.courseList);
    } }, directives: [_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_5__["CourseFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course',
                templateUrl: './course.component.html',
                styles: []
            }]
    }], function () { return [{ type: _shared_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _shared_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"] }, { type: _shared_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"] }]; }, null); })();


/***/ }),

/***/ "kVKu":
/*!*****************************************!*\
  !*** ./src/app/shared/teacher.model.ts ***!
  \*****************************************/
/*! exports provided: Teacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
class Teacher {
    constructor() {
        this.Id = 0;
        this.Salary = 0;
        this.Birthday = '';
        this.Name = '';
    }
}


/***/ }),

/***/ "kgOV":
/*!**********************************************!*\
  !*** ./src/app/teacher/teacher.component.ts ***!
  \**********************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Constants */ "z9QB");
/* harmony import */ var _shared_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/subject.service */ "lLrn");
/* harmony import */ var _shared_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/teacher.service */ "sz4S");
/* harmony import */ var _shared_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/course.service */ "Pv0z");
/* harmony import */ var _teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher-form/teacher-form.component */ "/jXb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function TeacherComponent_tr_25_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    const counter_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", counter_r4 + 1, ":", ctx_r2.GetSubjectName(subject_r3), " ");
} }
function TeacherComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeacherComponent_tr_25_div_10_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_tr_25_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const teacher_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.PopulateForm(teacher_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_tr_25_Template_td_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const teacher_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.DeleteTeacher(teacher_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teacher_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r1.Birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", teacher_r1.Salary, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", teacher_r1.Subjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.GetTooltipForDeleteButton(teacher_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.IsDeleteable(teacher_r1));
} }
class TeacherComponent {
    constructor(subjectService, service, courseService, ngZone) {
        this.subjectService = subjectService;
        this.service = service;
        this.courseService = courseService;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.service.refreshList();
        window[_shared_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].teacherComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
    }
    GetSubjectName(subjectId) {
        var _a, _b;
        return (_b = (_a = this.subjectService.getList()) === null || _a === void 0 ? void 0 : _a.find(x => x.Id == subjectId)) === null || _b === void 0 ? void 0 : _b.Name;
    }
    PopulateForm(record) {
        this.service.formData = Object.assign({}, record);
        this.service.selectedSubjects = this.getSelctedSubjectListWithAllDetails();
        this.service.selectedCourses = this.getSelctedCourseListWithAllDetails();
        this.service.subjectsForSelectedCourses = this.getSubjectsForSelectedCourses();
    }
    getSubjectsForSelectedCourses() {
        let list = [];
        var subjects = this.service.subjectService.getList();
        var selectedCourses = this.service.selectedCourses;
        subjects === null || subjects === void 0 ? void 0 : subjects.filter(function (x) {
            if (selectedCourses.filter(y => y.Id == x.Course.Id).length > 0) {
                list.push(x);
            }
        });
        return list;
    }
    getSelctedSubjectListWithAllDetails() {
        let list = [];
        let form = this.service.formData;
        this.service.subjectService.getList().filter(function (x) {
            var _a;
            if ((_a = form === null || form === void 0 ? void 0 : form.Subjects) === null || _a === void 0 ? void 0 : _a.includes(x.Id)) {
                list.push(x);
            }
        });
        return list;
    }
    getSelctedCourseListWithAllDetails() {
        let list = [];
        let form = this.service.formData;
        this.courseService.getList().filter(function (x) {
            var _a;
            if ((_a = form === null || form === void 0 ? void 0 : form.Courses) === null || _a === void 0 ? void 0 : _a.includes(x.Id)) {
                list.push(x);
            }
        });
        return list;
    }
    DeleteTeacher(record) {
        this.service.deleteTeacher(record.Id).subscribe(result => {
        }, error => {
            console.log(error);
        });
        if (record.Id == this.service.formData.Id) {
            this.service.resetFormData();
        }
    }
    IsDeleteable(record) {
        var _a;
        return ((_a = record.Subjects) === null || _a === void 0 ? void 0 : _a.length) <= 0;
    }
    GetTooltipForDeleteButton(std) {
        return this.IsDeleteable(std) ? "" : "Delete Subjects associated to this Teacher first";
    }
}
TeacherComponent.ɵfac = function TeacherComponent_Factory(t) { return new (t || TeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
TeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherComponent, selectors: [["app-teacher"]], decls: 26, vars: 1, consts: [[1, "jumbotron", "py-3"], [1, "display-4", "text-center"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", "data-toggle", "tooltip", 1, "btn", "btn-danger", 3, "disabled", "title"]], template: function TeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Teachers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-teacher-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Birthday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Salary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Assigned Subjects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TeacherComponent_tr_25_Template, 17, 7, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.teacherList);
    } }, directives: [_teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_5__["TeacherFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher',
                templateUrl: './teacher.component.html',
                styleUrls: ['./teacher.component.css']
            }]
    }], function () { return [{ type: _shared_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] }, { type: _shared_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"] }, { type: _shared_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "lLrn":
/*!*******************************************!*\
  !*** ./src/app/shared/subject.service.ts ***!
  \*******************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _subject_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject.model */ "f3Tx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "z9QB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SubjectService {
    constructor(http) {
        this.http = http;
        this.formData = new _subject_model__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectList = null;
        this.courseDropDownCelectedValue = 'Select Course';
        this.CourseSelcetValidationMesage = ': Required';
        this.refreshList();
    }
    resetFormData() {
        this.formData = new _subject_model__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.courseDropDownCelectedValue = 'Select Course';
        this.CourseSelcetValidationMesage = '';
    }
    selectCourse(course) {
        this.courseDropDownCelectedValue = course.Name;
        this.formData.Course = course;
        this.CourseSelcetValidationMesage = '';
    }
    populateForm(subject) {
        this.courseDropDownCelectedValue = subject.Course.Name;
        this.formData = Object.assign({}, subject);
    }
    postSubject() {
        return this.http.post(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].subjectsBase, this.formData);
    }
    putSubject() {
        return this.http.put(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].subjectsBase + '/' + this.formData.Id, this.formData);
    }
    deleteSubject(id) {
        return this.http.delete(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].subjectsBase + '/' + id);
    }
    refreshList() {
        this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].subjectsBase)
            .toPromise()
            .then(res => this.subjectList = res);
    }
    getList() {
        return this.subjectList;
    }
}
SubjectService.ɵfac = function SubjectService_Factory(t) { return new (t || SubjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SubjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubjectService, factory: SubjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mj4c":
/*!*****************************************!*\
  !*** ./src/app/shared/student.model.ts ***!
  \*****************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
class Student {
    constructor() {
        this.Id = 0;
        this.RegisterationNumber = '';
        this.Name = '';
        this.Course = null;
        this.Birthday = '';
    }
}


/***/ }),

/***/ "mugH":
/*!****************************************************************!*\
  !*** ./src/app/subject/subject-form/subject-form.component.ts ***!
  \****************************************************************/
/*! exports provided: SubjectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectFormComponent", function() { return SubjectFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/subject.service */ "lLrn");
/* harmony import */ var src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/course.service */ "Pv0z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SubjectFormComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectFormComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const course_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.service.selectCourse(course_r6); })("click", function SubjectFormComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const course_r6 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r1.value = course_r6; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.Name + " " + course_r6.Code);
} }
class SubjectFormComponent {
    constructor(service, courseService) {
        this.service = service;
        this.courseService = courseService;
    }
    ngOnInit() {
        this.resetFormData();
    }
    onSubmit(form) {
        if (this.IsFormInvalid()) {
            this.SetValidationMessages();
        }
        else {
            if (this.service.formData.Id == 0) {
                this.inserRecord(form);
            }
            else {
                this.updateRecord(form);
            }
        }
    }
    IsFormInvalid() {
        return this.service.formData.Course == null;
    }
    SetValidationMessages() {
        this.service.CourseSelcetValidationMesage = ": Required";
    }
    inserRecord(form) {
        this.service.postSubject().subscribe(result => {
            this.resetForm(form);
            this.service.refreshList();
        }, error => {
            console.log(error);
        });
    }
    updateRecord(form) {
        this.service.putSubject().subscribe(result => {
            this.resetForm(form);
            this.service.refreshList();
        }, error => {
            console.log(error);
        });
    }
    resetForm(form) {
        form.form.reset();
        this.resetFormData();
    }
    resetFormData() {
        this.service.resetFormData();
    }
}
SubjectFormComponent.ɵfac = function SubjectFormComponent_Factory(t) { return new (t || SubjectFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"])); };
SubjectFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubjectFormComponent, selectors: [["app-subject-form"]], decls: 44, vars: 8, consts: [["ngNativeValidate", "", 3, "submit"], ["form", "ngForm"], ["type", "hidden", "name", "id", 3, "value"], [1, "label", "label-default"], [1, "lbl-required"], [1, "label", "label-default", "text-danger"], [1, "form-group"], [1, "dropdown"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", "required", "", 1, "btn", "btn-secondary", "dropdown-toggle", "drp-dwn"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["courseSelected", ""], ["type", "button", "class", "dropdown-item", "required", "", 3, "click", 4, "ngFor", "ngForOf"], ["placeholder", "Subject Name", "name", "name", "required", "", "maxlength", "100", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["subjectName", "ngModel"], ["placeholder", "Subject Code", "name", "code", "required", "", "maxlength", "100", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["subjectCode", "ngModel"], ["placeholder", "Credit Hours", "name", "creditHours", "required", "", "type", "number", "max", "3", "min", "1", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["creditHours", "ngModel"], [1, "row"], [1, "form-group", "col-md-6"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block", 3, "click"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block"], ["type", "button", "required", "", 1, "dropdown-item", 3, "click"]], template: function SubjectFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SubjectFormComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SubjectFormComponent_button_15_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubjectFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.service.formData.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubjectFormComponent_Template_input_ngModelChange_28_listener($event) { return ctx.service.formData.Code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Credit Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubjectFormComponent_Template_input_ngModelChange_35_listener($event) { return ctx.service.formData.CreditHours = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectFormComponent_Template_button_click_39_listener() { return ctx.resetFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.CourseSelcetValidationMesage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.courseDropDownCelectedValue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courseService.courseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.CreditHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.Id != 0 ? "Update" : "Add", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: [".drp-dwn[_ngcontent-%COMP%] {\n  width: 260px;\n  max-width: 100%;\n  height: 48px;\n    max-height: 100%;\n}\n.lbl-required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3ViamVjdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJwLWR3biB7XG4gIHdpZHRoOiAyNjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5sYmwtcmVxdWlyZWQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subject-form',
                templateUrl: './subject-form.component.html',
                styleUrls: ['./subject-form.component.css'],
                styles: []
            }]
    }], function () { return [{ type: _shared_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"] }, { type: src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] }]; }, null); })();


/***/ }),

/***/ "nA50":
/*!******************************************!*\
  !*** ./src/app/grade/grade.component.ts ***!
  \******************************************/
/*! exports provided: GradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeComponent", function() { return GradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Constants */ "z9QB");
/* harmony import */ var _shared_grade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/grade.service */ "uab5");
/* harmony import */ var _shared_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/result.service */ "CLH5");
/* harmony import */ var _grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grade-form/grade-form.component */ "0pn7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function GradeComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_tr_25_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const grade_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.PopulateForm(grade_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_tr_25_Template_td_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const grade_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.DeleteGrade(grade_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grade_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.StartingMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.EndingMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.Course == null ? null : grade_r1.Course.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.GetTooltipForDeleteButton(grade_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.IsDeleteable(grade_r1));
} }
class GradeComponent {
    constructor(service, resultService, ngZone) {
        this.service = service;
        this.resultService = resultService;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.service.refreshList();
        window[_shared_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].gradeComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
    }
    PopulateForm(grade) {
        //assign the object copy and not the original object
        this.service.formData = Object.assign({}, grade);
    }
    DeleteGrade(grade) {
        this.service.deleteGrade(grade.Id).subscribe(result => {
        }, error => {
            console.log(error);
        });
    }
    IsDeleteable(grade) {
        var _a, _b;
        return ((_b = (_a = this.resultService.getList()) === null || _a === void 0 ? void 0 : _a.filter(x => { var _a; return ((_a = x.Grade) === null || _a === void 0 ? void 0 : _a.Id) == grade.Id; })) === null || _b === void 0 ? void 0 : _b.length) <= 0;
    }
    GetTooltipForDeleteButton(grade) {
        return this.IsDeleteable(grade) ? "" : "Delete Results associated to this Grade first";
    }
}
GradeComponent.ɵfac = function GradeComponent_Factory(t) { return new (t || GradeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
GradeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeComponent, selectors: [["app-grade"]], decls: 26, vars: 1, consts: [[1, "jumbotron", "py-3"], [1, "display-4", "text-center"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", "data-toggle", "tooltip", 1, "btn", "btn-danger", 3, "disabled", "title"]], template: function GradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Grades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-grade-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Starting Marks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ending Marks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GradeComponent_tr_25_Template, 17, 7, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.gradesList);
    } }, directives: [_grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_4__["GradeFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grade',
                templateUrl: './grade.component.html',
                styles: []
            }]
    }], function () { return [{ type: _shared_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"] }, { type: _shared_result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "nNT0":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Constants */ "z9QB");
/* harmony import */ var _shared_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/result.service */ "CLH5");
/* harmony import */ var _shared_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/subject.service */ "lLrn");
/* harmony import */ var _result_form_result_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result-form/result-form.component */ "uBW2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ResultComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_tr_25_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const result_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.UpdateResult(result_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_tr_25_Template_td_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const result_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.DeleteResult(result_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.Student == null ? null : result_r1.Student.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.Student == null ? null : result_r1.Student.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.Subject == null ? null : result_r1.Subject.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.ObtainedMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.Grade == null ? null : result_r1.Grade.Title);
} }
class ResultComponent {
    constructor(service, subjectService, ngZone) {
        this.service = service;
        this.subjectService = subjectService;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.service.refreshList();
        window[_shared_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].resultComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
    }
    UpdateResult(record) {
        this.service.populateForm(record);
    }
    DeleteResult(record) {
        this.service.deleteResult(record.Id).subscribe(result => {
        }, error => {
            console.log(error);
        });
        if (record.Id == this.service.formData.Id) {
            this.service.resetFormData();
        }
    }
    GetSubjectName(subjectId) {
        var _a, _b;
        let subject = (_b = (_a = this.subjectService) === null || _a === void 0 ? void 0 : _a.subjectList) === null || _b === void 0 ? void 0 : _b.find(x => x.Id == subjectId);
        return subject === null || subject === void 0 ? void 0 : subject.Name;
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_result_service__WEBPACK_IMPORTED_MODULE_2__["ResultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], decls: 26, vars: 1, consts: [[1, "jumbotron", "py-3"], [1, "display-4", "text-center"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-danger"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-result-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Student ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Subject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Obtained Marks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Grade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ResultComponent_tr_25_Template, 17, 5, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.resultsList);
    } }, directives: [_result_form_result_form_component__WEBPACK_IMPORTED_MODULE_4__["ResultFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.css']
            }]
    }], function () { return [{ type: _shared_result_service__WEBPACK_IMPORTED_MODULE_2__["ResultService"] }, { type: _shared_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "sz4S":
/*!*******************************************!*\
  !*** ./src/app/shared/teacher.service.ts ***!
  \*******************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _teacher_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher.model */ "kVKu");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "z9QB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject.service */ "lLrn");






class TeacherService {
    constructor(http, subjectService) {
        this.http = http;
        this.subjectService = subjectService;
        this.formData = new _teacher_model__WEBPACK_IMPORTED_MODULE_1__["Teacher"]();
        this.teacherList = [];
        this.genderOptions = ['Male', 'Female', 'Other'];
        this.selectedCourses = [];
        this.selectedSubjects = [];
        this.subjectsForSelectedCourses = [];
        subjectService.refreshList();
    }
    resetFormData() {
        this.formData = new _teacher_model__WEBPACK_IMPORTED_MODULE_1__["Teacher"]();
        this.selectedSubjects = [];
        this.selectedCourses = [];
        this.subjectsForSelectedCourses = [];
    }
    onCourseSelect(item) {
        var list = this.subjectService.getList().filter(x => x.Course.Id == item.Id);
        this.subjectsForSelectedCourses = this.subjectsForSelectedCourses.concat(list);
    }
    onCourseDeselect(course) {
        var _a, _b;
        let subjectsInSelectedCourse = this.subjectService.getList().filter(x => x.Course.Id == course.Id);
        this.selectedSubjects = (_a = this.selectedSubjects) === null || _a === void 0 ? void 0 : _a.filter(function (x) {
            var shouldInclude = true;
            subjectsInSelectedCourse.forEach(element => {
                if (element.Id == x.Id) {
                    shouldInclude = false;
                }
            });
            return shouldInclude;
        });
        this.subjectsForSelectedCourses = (_b = this.subjectsForSelectedCourses) === null || _b === void 0 ? void 0 : _b.filter(function (x) {
            var shouldInclude = true;
            subjectsInSelectedCourse.forEach(element => {
                if (element.Id == x.Id) {
                    shouldInclude = false;
                }
            });
            return shouldInclude;
        });
    }
    postTeacher() {
        return this.http.post(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].teachersBase, this.formData);
    }
    putTeacher() {
        return this.http.put(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].teachersBase + '/' + this.formData.Id, this.formData);
    }
    deleteTeacher(id) {
        return this.http.delete(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].teachersBase + '/' + id);
    }
    refreshList() {
        this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].teachersBase)
            .toPromise()
            .then(res => this.teacherList = res);
    }
}
TeacherService.ɵfac = function TeacherService_Factory(t) { return new (t || TeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"])); };
TeacherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeacherService, factory: TeacherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] }]; }, null); })();


/***/ }),

/***/ "u4XX":
/*!****************************************************************!*\
  !*** ./src/app/student/student-form/student-form.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFormComponent", function() { return StudentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/student.service */ "VVDR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");






function StudentFormComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentFormComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const course_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.service.onSelectCourse(course_r5); })("click", function StudentFormComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const course_r5 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return _r3.value = course_r5; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r5.Name + " " + course_r5.Code, " ");
} }
class StudentFormComponent {
    constructor(service) {
        this.service = service;
        this.subjectsDropdownSettings = {};
        this.isFormValid = true;
        this.subjectsSelectionClass = 'text-success';
        this.courseSelectionClass = 'text-success';
        this.subjectsDropdownSettings = {
            singleSelection: false,
            idField: 'Id',
            textField: 'Name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            noDataAvailablePlaceholderText: 'Select a course first',
            limitSelection: 6,
            itemsShowLimit: 6,
            allowSearchFilter: true
        };
    }
    ngOnInit() {
        this.resetFormData();
    }
    onSubmit(form) {
        if (this.isCourseSelectionValid()) {
            this.courseSelectionClass = 'text-danger';
            this.service.CourseSelcetValidationMesage = ' :Required';
        }
        else if (this.isFormValid) {
            this.service.formData.Subjects = this.service.selectedSubjectsByStudent.map(a => a.Id);
            if (this.service.formData.Id == 0) {
                this.inserRecord(form);
            }
            else {
                this.updateRecord(form);
            }
        }
    }
    inserRecord(form) {
        this.service.postStudent().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    updateRecord(form) {
        this.service.putStudent().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    resetForm(form) {
        form.form.reset();
        this.resetFormData();
    }
    resetFormData() {
        this.service.resetFormData();
    }
    onSubjectSelect(item) {
        this.validateSubjectSelection();
    }
    onSelectAllSubjects(items) {
        this.validateSubjectSelection();
    }
    onSubjectDeselect(item) {
        this.validateSubjectSelection();
    }
    validateSubjectSelection() {
        var _a, _b;
        let allowed = (_a = this.service.formData.Course) === null || _a === void 0 ? void 0 : _a.TotalCreditHours;
        let availed = 0;
        (_b = this.service.subjectsInselcetedCourse) === null || _b === void 0 ? void 0 : _b.forEach(course => {
            var _a;
            if (((_a = this.service.selectedSubjectsByStudent) === null || _a === void 0 ? void 0 : _a.find(x => x.Id == course.Id)) != undefined) {
                availed += course.CreditHours;
            }
        });
        let difference = allowed - availed;
        if (availed < allowed) {
            this.subjectsSelectionClass = 'text-info';
            this.isFormValid = true;
            this.service.SubjectsSelcetValidationMesage = ': ' + difference + ' Credit hour(s) left';
        }
        else if (availed > allowed) {
            this.subjectsSelectionClass = 'text-danger';
            this.isFormValid = false;
            this.service.SubjectsSelcetValidationMesage = +(availed - allowed) + ' Extra credit hour(s), remove subject(s)';
        }
        else if (availed == allowed) {
            this.subjectsSelectionClass = 'text-info';
            this.service.SubjectsSelcetValidationMesage = ' : All credit hours availed';
            this.isFormValid = true;
        }
    }
    isCourseSelectionValid() {
        return this.service.selectedCourseByStudent == this.service.courseDropDownDefaultValue;
    }
}
StudentFormComponent.ɵfac = function StudentFormComponent_Factory(t) { return new (t || StudentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"])); };
StudentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentFormComponent, selectors: [["app-student-form"]], decls: 45, vars: 18, consts: [[1, "row"], ["ngNativeValidate", "", 3, "submit"], ["form", "ngForm"], [1, "col", "col-lg-12"], ["type", "hidden", "name", "id", 3, "value"], [1, "form-group"], [1, "label", "label-default"], [1, "lbl-required"], ["placeholder", "Name", "name", "name", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["Name", "ngModel"], ["type", "date", "placeholder", "Pick Date Of Birth", "name", "dob", "max", "2010-12-31", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["dob", "ngModel"], [1, "dropdown"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", 1, "btn", "btn-secondary", "dropdown-toggle", "drp-dwn"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["courseSelected", ""], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["name", "subjectSelect", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onSelectAll", "onDeSelect"], [1, "form-group", "col-md-6"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block", 3, "click"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block"], ["type", "button", 1, "dropdown-item", 3, "click"]], template: function StudentFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function StudentFormComponent_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.service.formData.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentFormComponent_Template_input_ngModelChange_17_listener($event) { return ctx.service.formData.Birthday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, StudentFormComponent_button_31_Template, 2, 1, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ng-multiselect-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentFormComponent_Template_ng_multiselect_dropdown_ngModelChange_37_listener($event) { return ctx.service.selectedSubjectsByStudent = $event; })("onSelect", function StudentFormComponent_Template_ng_multiselect_dropdown_onSelect_37_listener($event) { return ctx.onSubjectSelect($event); })("onSelectAll", function StudentFormComponent_Template_ng_multiselect_dropdown_onSelectAll_37_listener($event) { return ctx.onSelectAllSubjects($event); })("onDeSelect", function StudentFormComponent_Template_ng_multiselect_dropdown_onDeSelect_37_listener($event) { return ctx.onSubjectDeselect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentFormComponent_Template_button_click_40_listener() { return ctx.resetFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-default ", ctx.courseSelectionClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.CourseSelcetValidationMesage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.selectedCourseByStudent, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.courseService.courseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-default ", ctx.subjectsSelectionClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.SubjectsSelcetValidationMesage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Subject(s)")("settings", ctx.subjectsDropdownSettings)("data", ctx.service.subjectsInselcetedCourse)("ngModel", ctx.service.selectedSubjectsByStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.Id != 0 ? "Update" : "Add", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]], styles: [".drp-dwn[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n    max-width: 100%;\r\n    height: 48px;\r\n    max-height: 100%;\r\n}\r\n.lbl-required[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3R1ZGVudC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJwLWR3biB7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sYmwtcmVxdWlyZWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-form',
                templateUrl: './student-form.component.html',
                styleUrls: ['./student-form.component.css'],
                styles: [],
            }]
    }], function () { return [{ type: _shared_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"] }]; }, null); })();


/***/ }),

/***/ "u9X8":
/*!****************************************!*\
  !*** ./src/app/shared/result.model.ts ***!
  \****************************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
class Result {
    constructor() {
        this.Id = 0;
        this.Course = null;
        this.Student = null;
        this.Subject = null;
        this.ObtainedMarks = 0;
        this.Grade = null;
    }
}


/***/ }),

/***/ "uBW2":
/*!*************************************************************!*\
  !*** ./src/app/result/result-form/result-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ResultFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultFormComponent", function() { return ResultFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_result_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/result.service */ "CLH5");
/* harmony import */ var src_app_shared_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/student.service */ "VVDR");
/* harmony import */ var src_app_shared_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/subject.service */ "lLrn");
/* harmony import */ var src_app_shared_grade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/grade.service */ "uab5");
/* harmony import */ var src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/course.service */ "Pv0z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["selectedSubject"];
function ResultFormComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultFormComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.calculateGrade(); })("click", function ResultFormComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const course_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onCourseSelect(course_r8); })("click", function ResultFormComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const course_r8 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r1.value = course_r8.Name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r8.Name, " ");
} }
function ResultFormComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultFormComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.calculateGrade(); })("click", function ResultFormComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const subject_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onSubjectSelect(subject_r13); })("click", function ResultFormComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const subject_r13 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return _r3.value = subject_r13.Name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r13.Name, " ");
} }
function ResultFormComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultFormComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const student_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onStudentSelect(student_r18); })("click", function ResultFormComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const student_r18 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return _r5.value = student_r18.Name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", student_r18.Name, " ");
} }
class ResultFormComponent {
    constructor(service, studentService, subjectService, gradeService, courseService) {
        this.service = service;
        this.studentService = studentService;
        this.subjectService = subjectService;
        this.gradeService = gradeService;
        this.courseService = courseService;
        this.gradeLabelText = 'Enter obtained marks to calculate grade';
        this.gradeLabelTextClass = "text-info";
        this.studentService.refreshList();
        this.subjectService.refreshList();
        this.gradeService.refreshList();
        this.courseService.refreshList();
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (this.service.IsFormInvalid()) {
            this.service.SetValidationMessages();
        }
        else {
            if (this.service.formData.Id == 0) {
                this.inserRecord(form);
            }
            else {
                this.updateRecord(form);
            }
        }
    }
    calculateGrade() {
        let obMarks = this.service.formData.ObtainedMarks;
        let course = this.service.formData.Course;
        if (course == null) {
            this.gradeLabelText = "Select a Course, and a subject first";
            this.gradeLabelTextClass = "text-danger";
            return;
        }
        let grades = this.gradeService.gradesList.filter(x => x.Course.Id == course.Id);
        if (grades == null) {
            this.gradeLabelText = "No grades available for the selected subject";
            this.gradeLabelTextClass = "text-info";
            return;
        }
        let grade = grades === null || grades === void 0 ? void 0 : grades.find(x => x.StartingMarks <= obMarks && x.EndingMarks >= obMarks);
        if (grade == null) {
            this.gradeLabelText = "No grade available for given marks range ";
            this.gradeLabelTextClass = "text-info";
            return;
        }
        this.service.formData.Grade = grade;
        this.gradeLabelText = grade === null || grade === void 0 ? void 0 : grade.Title;
    }
    onCourseSelect(course) {
        this.service.formData.Course = course;
        this.subjectsInSelectedCourse = this.subjectService.subjectList.filter(x => x.Course.Id == course.Id);
        this.gradesInSelectedCourse = this.gradeService.gradesList.filter(x => { var _a; return ((_a = x.Course) === null || _a === void 0 ? void 0 : _a.Id) == course.Id; });
        this.service.formData.Student = null;
        this.service.formData.Subject = null;
        this.selectedSubject.value = '';
        this.service.CourseSelcetValidationMesage = '';
    }
    onStudentSelect(student) {
        this.service.formData.Student = student;
        this.service.StudentSelcetValidationMesage = '';
    }
    onSubjectSelect(subject) {
        this.service.formData.Subject = subject;
        this.studentsInSelectedSubject = this.studentService.studentsList.filter(x => x.Subjects.includes(subject.Id));
        this.service.SubjectSelcetValidationMesage = '';
    }
    inserRecord(form) {
        this.service.postResult().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    updateRecord(form) {
        this.service.putResult().subscribe(result => {
            this.resetForm(form);
        }, error => {
            console.log(error);
        });
    }
    resetForm(form) {
        form.form.reset();
        this.service.resetFormData();
        this.gradeLabelText = 'Enter obtained marks to calculate grade';
        this.gradeLabelTextClass = "text-info";
    }
    SetValidationMessages() {
        this.service.CourseSelcetValidationMesage = ": Required";
    }
}
ResultFormComponent.ɵfac = function ResultFormComponent_Factory(t) { return new (t || ResultFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_result_service__WEBPACK_IMPORTED_MODULE_1__["ResultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"])); };
ResultFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultFormComponent, selectors: [["app-result-form"]], viewQuery: function ResultFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectedSubject = _t.first);
    } }, decls: 62, vars: 16, consts: [["ngNativeValidate", "", 3, "submit"], ["form", "ngForm"], ["type", "hidden", "name", "id", 3, "value"], [1, "form-group"], [1, "label", "label-default"], [1, "lbl-required"], [1, "label", "label-default", "text-danger"], [1, "dropdown"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", 1, "btn", "btn-secondary", "dropdown-toggle", "drp-dwn"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["selectedCourse", ""], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", 1, "btn", "btn-secondary", "dropdown-toggle", "drp-dwn", 2, "width", "250px", "max-width", "100%"], ["selectedSubject", ""], ["selectedStudent", ""], ["type", "number", "min", "0", "max", "100", "placeholder", "Marks", "name", "marks", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "change", "ngModelChange"], ["Marks", "ngModel"], [1, "row"], [1, "form-group", "col-md-6"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block", 3, "click"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block"], ["type", "button", 1, "dropdown-item", 3, "click"]], template: function ResultFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ResultFormComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResultFormComponent_button_15_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResultFormComponent_button_28_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ResultFormComponent_button_41_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Obtained Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ResultFormComponent_Template_input_change_47_listener() { return ctx.calculateGrade(); })("ngModelChange", function ResultFormComponent_Template_input_ngModelChange_47_listener($event) { return ctx.service.formData.ObtainedMarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Grade:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultFormComponent_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.resetForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.CourseSelcetValidationMesage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.service.formData == null ? null : ctx.service.formData.Course == null ? null : ctx.service.formData.Course.Name) ? ctx.service.formData == null ? null : ctx.service.formData.Course == null ? null : ctx.service.formData.Course.Name : "Select Course", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courseService.courseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.SubjectSelcetValidationMesage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.service.formData == null ? null : ctx.service.formData.Subject == null ? null : ctx.service.formData.Subject.Name) ? ctx.service.formData == null ? null : ctx.service.formData.Subject == null ? null : ctx.service.formData.Subject.Name : "Select Subject", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjectsInSelectedCourse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.StudentSelcetValidationMesage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.service.formData == null ? null : ctx.service.formData.Student == null ? null : ctx.service.formData.Student.Name) ? ctx.service.formData == null ? null : ctx.service.formData.Student == null ? null : ctx.service.formData.Student.Name : "Select Student", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentsInSelectedSubject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.ObtainedMarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-default ", ctx.gradeLabelTextClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.gradeLabelText, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.Id != 0 ? "Update" : "Add", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".drp-dwn[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n    max-width: 100%;\r\n    height: 48px;\r\n    max-height: 100%;\r\n}\r\n.lbl-required[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJyZXN1bHQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRycC1kd24ge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG4ubGJsLXJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result-form',
                templateUrl: './result-form.component.html',
                styleUrls: ['./result-form.component.css']
            }]
    }], function () { return [{ type: src_app_shared_result_service__WEBPACK_IMPORTED_MODULE_1__["ResultService"] }, { type: src_app_shared_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] }, { type: src_app_shared_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] }, { type: src_app_shared_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"] }, { type: src_app_shared_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"] }]; }, { selectedSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectedSubject']
        }] }); })();


/***/ }),

/***/ "uab5":
/*!*****************************************!*\
  !*** ./src/app/shared/grade.service.ts ***!
  \*****************************************/
/*! exports provided: GradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeService", function() { return GradeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _grade_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grade.model */ "/naD");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "z9QB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class GradeService {
    constructor(http) {
        this.http = http;
        this.CourseSelcetValidationMesage = '';
        this.formData = new _grade_model__WEBPACK_IMPORTED_MODULE_1__["Grade"]();
        this.refreshList();
    }
    resetFormData() {
        this.formData = new _grade_model__WEBPACK_IMPORTED_MODULE_1__["Grade"]();
        this.CourseSelcetValidationMesage = '';
    }
    postGrade() {
        return this.http.post(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].gradesBase, this.formData);
    }
    putGrade() {
        return this.http.put(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].gradesBase + '/' + this.formData.Id, this.formData);
    }
    deleteGrade(id) {
        return this.http.delete(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].gradesBase + '/' + id);
    }
    refreshList() {
        this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].gradesBase)
            .toPromise()
            .then(res => this.gradesList = res);
    }
    getList() {
        return this.gradesList;
    }
}
GradeService.ɵfac = function GradeService_Factory(t) { return new (t || GradeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GradeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GradeService, factory: GradeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vQy0":
/*!****************************************!*\
  !*** ./src/app/shared/course.model.ts ***!
  \****************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
class Course {
    constructor() {
        this.Id = 0;
        this.Name = '';
        this.Code = '';
        this.TotalCreditHours = 0;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student/student.component */ "hLTS");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher/teacher.component */ "kgOV");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject/subject.component */ "0EBP");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course/course.component */ "ioW2");
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grade/grade.component */ "nA50");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result/result.component */ "nNT0");










const routes = [
    { path: 'Student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_2__["StudentComponent"] },
    { path: 'Teacher', component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_3__["TeacherComponent"] },
    { path: 'Subject', component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_4__["SubjectComponent"] },
    { path: 'Course', component: _course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"] },
    { path: 'Results', component: _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"] },
    { path: 'Grade', component: _grade_grade_component__WEBPACK_IMPORTED_MODULE_6__["GradeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "z9QB":
/*!*************************************!*\
  !*** ./src/app/shared/Constants.ts ***!
  \*************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
// ComponentReferences Start
Constants.studentComponentReference = 'studentComponentReference';
Constants.courseComponentReference = 'courseComponentReference';
Constants.subjectComponentReference = 'subjectComponentReference';
Constants.teacherComponentReference = 'teacherComponentReference';
Constants.resultComponentReference = 'resultComponentReference';
Constants.gradeComponentReference = 'gradeComponentReference';
// ComponentReferences End
// Endpoints Start
Constants.coursesBase = '/api/courses';
Constants.subjectsBase = '/api/subjects';
Constants.teachersBase = '/api/teachers';
Constants.studentsBase = '/api/students';
Constants.resultsBase = '/api/results';
Constants.gradesBase = '/api/grades';


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map