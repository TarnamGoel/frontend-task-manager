import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./core/auth.service";
import * as i2 from "./core/api.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
const _c0 = () => ({ standalone: true });
function AppComponent_section_1_label_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementStart(2, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_1_label_12_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.authForm.name, $event) || (ctx_r1.authForm.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.authForm.name);
} }
function AppComponent_section_1_p_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.message());
} }
function AppComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 3)(1, "div")(2, "p", 4);
    i0.ɵɵtext(3, "Team Task Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Plan projects, assign work, and track delivery.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "form", 5);
    i0.ɵɵlistener("ngSubmit", function AppComponent_section_1_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitAuth()); });
    i0.ɵɵelementStart(7, "div", 6)(8, "button", 7);
    i0.ɵɵlistener("click", function AppComponent_section_1_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.authMode.set("login")); });
    i0.ɵɵtext(9, "Login");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 7);
    i0.ɵɵlistener("click", function AppComponent_section_1_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.authMode.set("signup")); });
    i0.ɵɵtext(11, "Signup");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, AppComponent_section_1_label_12_Template, 3, 1, "label", 8);
    i0.ɵɵelementStart(13, "label");
    i0.ɵɵtext(14, " Email ");
    i0.ɵɵelementStart(15, "input", 9);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_1_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.authForm.email, $event) || (ctx_r1.authForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label");
    i0.ɵɵtext(17, " Password ");
    i0.ɵɵelementStart(18, "input", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_1_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.authForm.password, $event) || (ctx_r1.authForm.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(19, AppComponent_section_1_p_19_Template, 2, 1, "p", 11);
    i0.ɵɵelementStart(20, "button", 12);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵclassProp("active", ctx_r1.authMode() === "login");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.authMode() === "signup");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.authMode() === "signup");
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.authForm.email);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.authForm.password);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.message());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.authMode() === "login" ? "Login" : "Create account");
} }
function AppComponent_section_2_section_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 28)(1, "div")(2, "span");
    i0.ɵɵtext(3, "Total tasks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "span");
    i0.ɵɵtext(8, "To Do");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "span");
    i0.ɵɵtext(13, "In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "span");
    i0.ɵɵtext(18, "Overdue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const summary_r5 = ctx.ngIf;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r5.totalTasks);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r5.tasksByStatus.TODO || 0);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r5.tasksByStatus.IN_PROGRESS || 0);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r5.overdueTasks);
} }
function AppComponent_section_2_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function AppComponent_section_2_button_23_Template_button_click_0_listener() { const project_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectProject(project_r7.id)); });
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const project_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", project_r7.id === ctx_r1.selectedProjectId());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", project_r7.members.length, " members");
} }
function AppComponent_section_2_section_24_form_13_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const candidate_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", candidate_r9.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", candidate_r9.name, " \u00B7 ", candidate_r9.email, "");
} }
function AppComponent_section_2_section_24_form_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 39);
    i0.ɵɵlistener("ngSubmit", function AppComponent_section_2_section_24_form_13_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addMember()); });
    i0.ɵɵelementStart(1, "select", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_2_section_24_form_13_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.memberForm.userId, $event) || (ctx_r1.memberForm.userId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(2, "option", 41);
    i0.ɵɵtext(3, "Add member");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AppComponent_section_2_section_24_form_13_option_4_Template, 2, 3, "option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 43);
    i0.ɵɵtext(6, "Add");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.memberForm.userId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.users());
} }
function AppComponent_section_2_section_24_span_15_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function AppComponent_section_2_section_24_span_15_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const member_r11 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.removeMember(member_r11.id)); });
    i0.ɵɵtext(1, "x");
    i0.ɵɵelementEnd();
} }
function AppComponent_section_2_section_24_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, AppComponent_section_2_section_24_span_15_button_2_Template, 2, 0, "button", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const member_r11 = ctx.$implicit;
    const project_r12 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", member_r11.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isAdmin() && member_r11.id !== project_r12.adminId);
} }
function AppComponent_section_2_section_24_form_16_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const priority_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", priority_r14);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(priority_r14);
} }
function AppComponent_section_2_section_24_form_16_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const member_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", member_r15.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(member_r15.name);
} }
function AppComponent_section_2_section_24_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 46);
    i0.ɵɵlistener("ngSubmit", function AppComponent_section_2_section_24_form_16_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.createTask()); });
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, "Create task");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 47);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_2_section_24_form_16_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.taskForm.title, $event) || (ctx_r1.taskForm.title = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "textarea", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_2_section_24_form_16_Template_textarea_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.taskForm.description, $event) || (ctx_r1.taskForm.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 49);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_2_section_24_form_16_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.taskForm.dueDate, $event) || (ctx_r1.taskForm.dueDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_2_section_24_form_16_Template_select_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.taskForm.priority, $event) || (ctx_r1.taskForm.priority = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(7, AppComponent_section_2_section_24_form_16_option_7_Template, 2, 2, "option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_2_section_24_form_16_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.taskForm.assigneeId, $event) || (ctx_r1.taskForm.assigneeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(9, "option", 41);
    i0.ɵɵtext(10, "Unassigned");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, AppComponent_section_2_section_24_form_16_option_11_Template, 2, 2, "option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 12);
    i0.ɵɵtext(13, "Create task");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const project_r12 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.taskForm.title);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.taskForm.description);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.taskForm.dueDate);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.taskForm.priority);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.priorities);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.taskForm.assigneeId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", project_r12.members);
} }
function AppComponent_section_2_section_24_div_18_article_3_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("value", option_r18);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(option_r18));
} }
function AppComponent_section_2_section_24_div_18_article_3_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function AppComponent_section_2_section_24_div_18_article_3_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const task_r17 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.deleteTask(task_r17.id)); });
    i0.ɵɵtext(1, "Delete");
    i0.ɵɵelementEnd();
} }
function AppComponent_section_2_section_24_div_18_article_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 54)(1, "div", 55)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 56)(11, "select", 57);
    i0.ɵɵlistener("ngModelChange", function AppComponent_section_2_section_24_div_18_article_3_Template_select_ngModelChange_11_listener($event) { const task_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.updateStatus(task_r17, $event)); });
    i0.ɵɵtemplate(12, AppComponent_section_2_section_24_div_18_article_3_option_12_Template, 2, 2, "option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AppComponent_section_2_section_24_div_18_article_3_button_13_Template, 2, 0, "button", 45);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const task_r17 = ctx.$implicit;
    const status_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("hidden", task_r17.status !== status_r20);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(task_r17.title);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("priority " + task_r17.priority.toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(task_r17.priority);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r17.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Due ", task_r17.dueDate, " \u00B7 ", (task_r17.assignee == null ? null : task_r17.assignee.name) || "Unassigned", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", task_r17.status)("ngModelOptions", i0.ɵɵpureFunction0(12, _c0));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.statuses);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isAdmin());
} }
function AppComponent_section_2_section_24_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AppComponent_section_2_section_24_div_18_article_3_Template, 14, 13, "article", 53);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r20 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(status_r20));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 2, ctx_r1.tasks(), 0, 100));
} }
function AppComponent_section_2_section_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 29)(1, "div", 30)(2, "div")(3, "p", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "section", 31)(10, "div", 32)(11, "h3");
    i0.ɵɵtext(12, "Members");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AppComponent_section_2_section_24_form_13_Template, 7, 2, "form", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 34);
    i0.ɵɵtemplate(15, AppComponent_section_2_section_24_span_15_Template, 3, 2, "span", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, AppComponent_section_2_section_24_form_16_Template, 14, 7, "form", 36);
    i0.ɵɵelementStart(17, "section", 37);
    i0.ɵɵtemplate(18, AppComponent_section_2_section_24_div_18_Template, 5, 6, "div", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const project_r12 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.isAdmin() ? "Admin access" : "Member access");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r12.description);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.isAdmin());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", project_r12.members);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isAdmin());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.statuses);
} }
function AppComponent_section_2_section_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 58)(1, "h2");
    i0.ɵɵtext(2, "Create your first project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Project creators become admins and can invite members immediately.");
    i0.ɵɵelementEnd()();
} }
function AppComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 15)(1, "header", 16)(2, "div")(3, "p", 4);
    i0.ɵɵtext(4, "Workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1");
    i0.ɵɵtext(6, "Team Task Manager");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 17)(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 7);
    i0.ɵɵlistener("click", function AppComponent_section_2_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(11, "Logout");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, AppComponent_section_2_section_12_Template, 21, 4, "section", 18);
    i0.ɵɵelementStart(13, "div", 19)(14, "aside", 20)(15, "form", 21);
    i0.ɵɵlistener("ngSubmit", function AppComponent_section_2_Template_form_ngSubmit_15_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.createProject()); });
    i0.ɵɵelementStart(16, "h2");
    i0.ɵɵtext(17, "Create project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "input", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_2_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.projectForm.name, $event) || (ctx_r1.projectForm.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "textarea", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_section_2_Template_textarea_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.projectForm.description, $event) || (ctx_r1.projectForm.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 12);
    i0.ɵɵtext(21, "Create");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "nav", 24);
    i0.ɵɵtemplate(23, AppComponent_section_2_button_23_Template, 5, 4, "button", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(24, AppComponent_section_2_section_24_Template, 19, 7, "section", 26)(25, AppComponent_section_2_section_25_Template, 5, 0, "section", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r1.user()) == null ? null : tmp_1_0.name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.dashboard());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.projectForm.name);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.projectForm.description);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.projects());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedProject());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.projects().length === 0);
} }
export class AppComponent {
    constructor(auth, api) {
        this.auth = auth;
        this.api = api;
        this.user = this.auth.user;
        this.projects = signal([]);
        this.tasks = signal([]);
        this.users = signal([]);
        this.dashboard = signal(null);
        this.selectedProjectId = signal('');
        this.authMode = signal('login');
        this.message = signal('');
        this.selectedProject = computed(() => this.projects().find((project) => project.id === this.selectedProjectId()) ?? null);
        this.isAdmin = computed(() => this.selectedProject()?.adminId === this.user()?.id);
        this.authForm = { name: '', email: '', password: '' };
        this.projectForm = { name: '', description: '' };
        this.memberForm = { userId: '' };
        this.taskForm = { title: '', description: '', dueDate: '', priority: 'MEDIUM', assigneeId: '' };
        this.statuses = ['TODO', 'IN_PROGRESS', 'DONE'];
        this.priorities = ['LOW', 'MEDIUM', 'HIGH'];
    }
    ngOnInit() {
        if (this.user()) {
            this.loadWorkspace();
        }
    }
    submitAuth() {
        const request = this.authMode() === 'login'
            ? this.auth.login({ email: this.authForm.email, password: this.authForm.password })
            : this.auth.signup(this.authForm);
        request.subscribe({
            next: () => {
                this.message.set('');
                this.loadWorkspace();
            },
            error: (error) => this.message.set(error.error?.message ?? 'Authentication failed')
        });
    }
    logout() {
        this.auth.logout();
        this.projects.set([]);
        this.tasks.set([]);
        this.dashboard.set(null);
    }
    loadWorkspace() {
        this.api.projects().subscribe((projects) => {
            this.projects.set(projects);
            if (!this.selectedProjectId() && projects.length) {
                this.selectProject(projects[0].id);
            }
        });
        this.api.users().subscribe((users) => this.users.set(users));
        this.refreshDashboard();
    }
    refreshDashboard() {
        this.api.dashboard().subscribe((dashboard) => this.dashboard.set(dashboard));
    }
    selectProject(projectId) {
        this.selectedProjectId.set(projectId);
        this.api.tasks(projectId).subscribe((tasks) => this.tasks.set(tasks));
    }
    createProject() {
        this.api.createProject(this.projectForm).subscribe((project) => {
            this.projectForm.name = '';
            this.projectForm.description = '';
            this.projects.update((projects) => [project, ...projects]);
            this.selectProject(project.id);
            this.refreshDashboard();
        });
    }
    addMember() {
        const project = this.selectedProject();
        if (!project || !this.memberForm.userId) {
            return;
        }
        this.api.addMember(project.id, this.memberForm.userId).subscribe((updated) => {
            this.memberForm.userId = '';
            this.replaceProject(updated);
        });
    }
    removeMember(userId) {
        const project = this.selectedProject();
        if (!project) {
            return;
        }
        this.api.removeMember(project.id, userId).subscribe((updated) => this.replaceProject(updated));
    }
    createTask() {
        const project = this.selectedProject();
        if (!project) {
            return;
        }
        this.api.createTask(project.id, {
            ...this.taskForm,
            assigneeId: this.taskForm.assigneeId || null
        }).subscribe((task) => {
            this.taskForm.title = '';
            this.taskForm.description = '';
            this.taskForm.dueDate = '';
            this.taskForm.priority = 'MEDIUM';
            this.taskForm.assigneeId = '';
            this.tasks.update((tasks) => [task, ...tasks]);
            this.refreshDashboard();
        });
    }
    updateStatus(task, status) {
        this.api.updateStatus(task.id, status).subscribe((updated) => {
            this.replaceTask(updated);
            this.refreshDashboard();
        });
    }
    deleteTask(taskId) {
        this.api.deleteTask(taskId).subscribe(() => {
            this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
            this.refreshDashboard();
        });
    }
    statusLabel(status) {
        return status.replace('_', ' ');
    }
    replaceProject(project) {
        this.projects.update((projects) => projects.map((item) => item.id === project.id ? project : item));
    }
    replaceTask(task) {
        this.tasks.update((tasks) => tasks.map((item) => item.id === task.id ? task : item));
    }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ApiService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[1, "shell"], ["class", "auth", 4, "ngIf"], ["class", "workspace", 4, "ngIf"], [1, "auth"], [1, "eyebrow"], [1, "panel", "auth-panel", 3, "ngSubmit"], [1, "segmented"], ["type", "button", 3, "click"], [4, "ngIf"], ["type", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "6", 3, "ngModelChange", "ngModel"], ["class", "error", 4, "ngIf"], ["type", "submit", 1, "primary"], ["name", "name", "required", "", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "workspace"], [1, "topbar"], [1, "profile"], ["class", "metrics", 4, "ngIf"], [1, "layout"], [1, "sidebar"], [1, "panel", 3, "ngSubmit"], ["name", "projectName", "placeholder", "Project name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "projectDescription", "placeholder", "Description", 3, "ngModelChange", "ngModel"], [1, "project-list"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "content", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "metrics"], [1, "content"], [1, "section-head"], [1, "panel", "members"], [1, "section-head", "compact"], ["class", "inline-form", 3, "ngSubmit", 4, "ngIf"], [1, "chips"], [4, "ngFor", "ngForOf"], ["class", "panel task-form", 3, "ngSubmit", 4, "ngIf"], [1, "board"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "inline-form", 3, "ngSubmit"], ["name", "member", "required", "", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"], ["type", "button", 3, "click", 4, "ngIf"], [1, "panel", "task-form", 3, "ngSubmit"], ["name", "taskTitle", "placeholder", "Title", "required", "", 3, "ngModelChange", "ngModel"], ["name", "taskDescription", "placeholder", "Description", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dueDate", "required", "", 3, "ngModelChange", "ngModel"], ["name", "priority", 3, "ngModelChange", "ngModel"], ["name", "assignee", 3, "ngModelChange", "ngModel"], [1, "column"], ["class", "task-card", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "task-card", 3, "hidden"], [1, "task-head"], [1, "actions"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "empty"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0);
            i0.ɵɵtemplate(1, AppComponent_section_1_Template, 22, 9, "section", 1)(2, AppComponent_section_2_Template, 26, 7, "section", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.user());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.user());
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, i3.SlicePipe, FormsModule, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.MinLengthValidator, i4.NgModel, i4.NgForm], styles: [".shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.auth[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 390px;\n  gap: 56px;\n  align-items: center;\n  min-height: 100vh;\n  padding: 48px clamp(20px, 6vw, 96px);\n  background: linear-gradient(135deg, #0f2d2e 0%, #174c47 46%, #f0b45b 100%);\n  color: #ffffff;\n}\n\n.auth[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 740px;\n  margin: 0;\n  font-size: clamp(40px, 6vw, 84px);\n  line-height: 1;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #5d7880;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.auth[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #f9ddb4;\n}\n\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dbe2e8;\n  border-radius: 8px;\n  box-shadow: 0 16px 48px rgba(31, 41, 51, 0.08);\n  color: #1f2933;\n  padding: 18px;\n}\n\n.auth-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.segmented[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px;\n  padding: 4px;\n  background: #e9eef2;\n  border-radius: 8px;\n}\n\n.segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 6px;\n  background: transparent;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.segmented[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  font-weight: 800;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  color: #53616d;\n  font-size: 13px;\n  font-weight: 700;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cad4dd;\n  border-radius: 6px;\n  background: #ffffff;\n  color: #1f2933;\n  min-height: 42px;\n  padding: 10px 12px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  min-height: 76px;\n  resize: vertical;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #bfccd6;\n  border-radius: 6px;\n  background: #ffffff;\n  color: #1f2933;\n  min-height: 38px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n\n.primary[_ngcontent-%COMP%] {\n  border-color: #116466;\n  background: #116466;\n  color: #ffffff;\n  font-weight: 800;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #b42318;\n  margin: 0;\n}\n\n.workspace[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.topbar[_ngcontent-%COMP%], \n.section-head[_ngcontent-%COMP%], \n.metrics[_ngcontent-%COMP%], \n.layout[_ngcontent-%COMP%], \n.task-head[_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%], \n.profile[_ngcontent-%COMP%], \n.inline-form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.topbar[_ngcontent-%COMP%], \n.section-head[_ngcontent-%COMP%], \n.task-head[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-bottom: 20px;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 34px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 26px;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.profile[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 10px;\n}\n\n.metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-left: 4px solid #2f7d6d;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 16px;\n}\n\n.metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #667784;\n  font-size: 13px;\n}\n\n.metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  font-size: 28px;\n}\n\n.layout[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  gap: 20px;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 16px;\n  flex: 0 0 310px;\n  display: grid;\n  gap: 14px;\n}\n\n.sidebar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], \n.task-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.project-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n\n.project-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: start;\n  gap: 4px;\n  min-height: 64px;\n  text-align: left;\n}\n\n.project-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-color: #116466;\n  background: #e7f4f2;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: grid;\n  gap: 16px;\n}\n\n.compact[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.inline-form[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #cfd9e2;\n  border-radius: 999px;\n  padding: 7px 10px;\n  background: #f7fafc;\n}\n\n.chips[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  min-height: 22px;\n  padding: 0 4px;\n  background: transparent;\n}\n\n.task-form[_ngcontent-%COMP%] {\n  grid-template-columns: 1.2fr 1.5fr 150px 130px 170px auto;\n  align-items: end;\n}\n\n.task-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(220px, 1fr));\n  gap: 14px;\n}\n\n.column[_ngcontent-%COMP%] {\n  min-height: 360px;\n  border: 1px solid #dbe2e8;\n  border-radius: 8px;\n  background: #eef3f6;\n  padding: 12px;\n}\n\n.task-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  border: 1px solid #d4dde5;\n  border-radius: 8px;\n  background: #ffffff;\n  padding: 14px;\n  margin-bottom: 10px;\n}\n\n.task-card[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.task-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #52606d;\n  margin-bottom: 0;\n}\n\n.task-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #667784;\n}\n\n.priority[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 4px 8px;\n  font-size: 11px;\n  font-weight: 900;\n}\n\n.priority.low[_ngcontent-%COMP%] {\n  background: #e9f7ef;\n  color: #146c43;\n}\n\n.priority.medium[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #8a5a00;\n}\n\n.priority.high[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #b42318;\n}\n\n.actions[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n\n.empty[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px dashed #aab7c2;\n  border-radius: 8px;\n  padding: 40px;\n  text-align: center;\n}\n\n@media (max-width: 980px) {\n  .auth[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n    flex-basis: auto;\n  }\n\n  .metrics[_ngcontent-%COMP%], \n   .board[_ngcontent-%COMP%], \n   .task-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule], template: "<main class=\"shell\">\n  <section *ngIf=\"!user()\" class=\"auth\">\n    <div>\n      <p class=\"eyebrow\">Team Task Manager</p>\n      <h1>Plan projects, assign work, and track delivery.</h1>\n    </div>\n\n    <form class=\"panel auth-panel\" (ngSubmit)=\"submitAuth()\">\n      <div class=\"segmented\">\n        <button type=\"button\" [class.active]=\"authMode() === 'login'\" (click)=\"authMode.set('login')\">Login</button>\n        <button type=\"button\" [class.active]=\"authMode() === 'signup'\" (click)=\"authMode.set('signup')\">Signup</button>\n      </div>\n      <label *ngIf=\"authMode() === 'signup'\">\n        Name\n        <input name=\"name\" [(ngModel)]=\"authForm.name\" required>\n      </label>\n      <label>\n        Email\n        <input type=\"email\" name=\"email\" [(ngModel)]=\"authForm.email\" required>\n      </label>\n      <label>\n        Password\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"authForm.password\" required minlength=\"6\">\n      </label>\n      <p class=\"error\" *ngIf=\"message()\">{{ message() }}</p>\n      <button class=\"primary\" type=\"submit\">{{ authMode() === 'login' ? 'Login' : 'Create account' }}</button>\n    </form>\n  </section>\n\n  <section *ngIf=\"user()\" class=\"workspace\">\n    <header class=\"topbar\">\n      <div>\n        <p class=\"eyebrow\">Workspace</p>\n        <h1>Team Task Manager</h1>\n      </div>\n      <div class=\"profile\">\n        <span>{{ user()?.name }}</span>\n        <button type=\"button\" (click)=\"logout()\">Logout</button>\n      </div>\n    </header>\n\n    <section class=\"metrics\" *ngIf=\"dashboard() as summary\">\n      <div>\n        <span>Total tasks</span>\n        <strong>{{ summary.totalTasks }}</strong>\n      </div>\n      <div>\n        <span>To Do</span>\n        <strong>{{ summary.tasksByStatus.TODO || 0 }}</strong>\n      </div>\n      <div>\n        <span>In Progress</span>\n        <strong>{{ summary.tasksByStatus.IN_PROGRESS || 0 }}</strong>\n      </div>\n      <div>\n        <span>Overdue</span>\n        <strong>{{ summary.overdueTasks }}</strong>\n      </div>\n    </section>\n\n    <div class=\"layout\">\n      <aside class=\"sidebar\">\n        <form class=\"panel\" (ngSubmit)=\"createProject()\">\n          <h2>Create project</h2>\n          <input name=\"projectName\" placeholder=\"Project name\" [(ngModel)]=\"projectForm.name\" required>\n          <textarea name=\"projectDescription\" placeholder=\"Description\" [(ngModel)]=\"projectForm.description\"></textarea>\n          <button class=\"primary\" type=\"submit\">Create</button>\n        </form>\n\n        <nav class=\"project-list\">\n          <button\n            type=\"button\"\n            *ngFor=\"let project of projects()\"\n            [class.active]=\"project.id === selectedProjectId()\"\n            (click)=\"selectProject(project.id)\">\n            <strong>{{ project.name }}</strong>\n            <small>{{ project.members.length }} members</small>\n          </button>\n        </nav>\n      </aside>\n\n      <section class=\"content\" *ngIf=\"selectedProject() as project\">\n        <div class=\"section-head\">\n          <div>\n            <p class=\"eyebrow\">{{ isAdmin() ? 'Admin access' : 'Member access' }}</p>\n            <h2>{{ project.name }}</h2>\n            <p>{{ project.description }}</p>\n          </div>\n        </div>\n\n        <section class=\"panel members\">\n          <div class=\"section-head compact\">\n            <h3>Members</h3>\n            <form *ngIf=\"isAdmin()\" class=\"inline-form\" (ngSubmit)=\"addMember()\">\n              <select name=\"member\" [(ngModel)]=\"memberForm.userId\" required>\n                <option value=\"\">Add member</option>\n                <option *ngFor=\"let candidate of users()\" [value]=\"candidate.id\">{{ candidate.name }} \u00B7 {{ candidate.email }}</option>\n              </select>\n              <button type=\"submit\">Add</button>\n            </form>\n          </div>\n          <div class=\"chips\">\n            <span *ngFor=\"let member of project.members\">\n              {{ member.name }}\n              <button *ngIf=\"isAdmin() && member.id !== project.adminId\" type=\"button\" (click)=\"removeMember(member.id)\">x</button>\n            </span>\n          </div>\n        </section>\n\n        <form *ngIf=\"isAdmin()\" class=\"panel task-form\" (ngSubmit)=\"createTask()\">\n          <h3>Create task</h3>\n          <input name=\"taskTitle\" placeholder=\"Title\" [(ngModel)]=\"taskForm.title\" required>\n          <textarea name=\"taskDescription\" placeholder=\"Description\" [(ngModel)]=\"taskForm.description\"></textarea>\n          <input type=\"date\" name=\"dueDate\" [(ngModel)]=\"taskForm.dueDate\" required>\n          <select name=\"priority\" [(ngModel)]=\"taskForm.priority\">\n            <option *ngFor=\"let priority of priorities\" [value]=\"priority\">{{ priority }}</option>\n          </select>\n          <select name=\"assignee\" [(ngModel)]=\"taskForm.assigneeId\">\n            <option value=\"\">Unassigned</option>\n            <option *ngFor=\"let member of project.members\" [value]=\"member.id\">{{ member.name }}</option>\n          </select>\n          <button class=\"primary\" type=\"submit\">Create task</button>\n        </form>\n\n        <section class=\"board\">\n          <div class=\"column\" *ngFor=\"let status of statuses\">\n            <h3>{{ statusLabel(status) }}</h3>\n            <article class=\"task-card\" *ngFor=\"let task of tasks() | slice:0:100\" [hidden]=\"task.status !== status\">\n              <div class=\"task-head\">\n                <strong>{{ task.title }}</strong>\n                <span [class]=\"'priority ' + task.priority.toLowerCase()\">{{ task.priority }}</span>\n              </div>\n              <p>{{ task.description }}</p>\n              <small>Due {{ task.dueDate }} \u00B7 {{ task.assignee?.name || 'Unassigned' }}</small>\n              <div class=\"actions\">\n                <select [ngModel]=\"task.status\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"updateStatus(task, $event)\">\n                  <option *ngFor=\"let option of statuses\" [value]=\"option\">{{ statusLabel(option) }}</option>\n                </select>\n                <button *ngIf=\"isAdmin()\" type=\"button\" (click)=\"deleteTask(task.id)\">Delete</button>\n              </div>\n            </article>\n          </div>\n        </section>\n      </section>\n\n      <section class=\"empty\" *ngIf=\"projects().length === 0\">\n        <h2>Create your first project</h2>\n        <p>Project creators become admins and can invite members immediately.</p>\n      </section>\n    </div>\n  </section>\n</main>\n", styles: [".shell {\n  min-height: 100vh;\n}\n\n.auth {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 390px;\n  gap: 56px;\n  align-items: center;\n  min-height: 100vh;\n  padding: 48px clamp(20px, 6vw, 96px);\n  background: linear-gradient(135deg, #0f2d2e 0%, #174c47 46%, #f0b45b 100%);\n  color: #ffffff;\n}\n\n.auth h1 {\n  max-width: 740px;\n  margin: 0;\n  font-size: clamp(40px, 6vw, 84px);\n  line-height: 1;\n}\n\n.eyebrow {\n  margin: 0 0 8px;\n  color: #5d7880;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.auth .eyebrow {\n  color: #f9ddb4;\n}\n\n.panel {\n  background: #ffffff;\n  border: 1px solid #dbe2e8;\n  border-radius: 8px;\n  box-shadow: 0 16px 48px rgba(31, 41, 51, 0.08);\n  color: #1f2933;\n  padding: 18px;\n}\n\n.auth-panel {\n  display: grid;\n  gap: 14px;\n}\n\n.segmented {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px;\n  padding: 4px;\n  background: #e9eef2;\n  border-radius: 8px;\n}\n\n.segmented button {\n  border: 0;\n  border-radius: 6px;\n  background: transparent;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.segmented .active {\n  background: #ffffff;\n  font-weight: 800;\n}\n\nlabel {\n  display: grid;\n  gap: 6px;\n  color: #53616d;\n  font-size: 13px;\n  font-weight: 700;\n}\n\ninput,\nselect,\ntextarea {\n  width: 100%;\n  border: 1px solid #cad4dd;\n  border-radius: 6px;\n  background: #ffffff;\n  color: #1f2933;\n  min-height: 42px;\n  padding: 10px 12px;\n}\n\ntextarea {\n  min-height: 76px;\n  resize: vertical;\n}\n\nbutton {\n  border: 1px solid #bfccd6;\n  border-radius: 6px;\n  background: #ffffff;\n  color: #1f2933;\n  min-height: 38px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n\n.primary {\n  border-color: #116466;\n  background: #116466;\n  color: #ffffff;\n  font-weight: 800;\n}\n\n.error {\n  color: #b42318;\n  margin: 0;\n}\n\n.workspace {\n  padding: 24px;\n}\n\n.topbar,\n.section-head,\n.metrics,\n.layout,\n.task-head,\n.actions,\n.profile,\n.inline-form {\n  display: flex;\n}\n\n.topbar,\n.section-head,\n.task-head {\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.topbar {\n  align-items: center;\n  margin-bottom: 20px;\n}\n\nh1,\nh2,\nh3,\np {\n  margin-top: 0;\n}\n\nh1 {\n  margin-bottom: 0;\n  font-size: 34px;\n}\n\nh2 {\n  margin-bottom: 8px;\n  font-size: 26px;\n}\n\nh3 {\n  margin-bottom: 12px;\n}\n\n.profile {\n  align-items: center;\n  gap: 10px;\n}\n\n.metrics {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.metrics div {\n  border-left: 4px solid #2f7d6d;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 16px;\n}\n\n.metrics span {\n  display: block;\n  color: #667784;\n  font-size: 13px;\n}\n\n.metrics strong {\n  display: block;\n  margin-top: 8px;\n  font-size: 28px;\n}\n\n.layout {\n  align-items: flex-start;\n  gap: 20px;\n}\n\n.sidebar {\n  position: sticky;\n  top: 16px;\n  flex: 0 0 310px;\n  display: grid;\n  gap: 14px;\n}\n\n.sidebar form,\n.task-form {\n  display: grid;\n  gap: 10px;\n}\n\n.project-list {\n  display: grid;\n  gap: 8px;\n}\n\n.project-list button {\n  display: grid;\n  justify-items: start;\n  gap: 4px;\n  min-height: 64px;\n  text-align: left;\n}\n\n.project-list .active {\n  border-color: #116466;\n  background: #e7f4f2;\n}\n\n.content {\n  flex: 1;\n  min-width: 0;\n  display: grid;\n  gap: 16px;\n}\n\n.compact {\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.inline-form {\n  gap: 8px;\n}\n\n.chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.chips span {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #cfd9e2;\n  border-radius: 999px;\n  padding: 7px 10px;\n  background: #f7fafc;\n}\n\n.chips button {\n  border: 0;\n  min-height: 22px;\n  padding: 0 4px;\n  background: transparent;\n}\n\n.task-form {\n  grid-template-columns: 1.2fr 1.5fr 150px 130px 170px auto;\n  align-items: end;\n}\n\n.task-form h3 {\n  grid-column: 1 / -1;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(220px, 1fr));\n  gap: 14px;\n}\n\n.column {\n  min-height: 360px;\n  border: 1px solid #dbe2e8;\n  border-radius: 8px;\n  background: #eef3f6;\n  padding: 12px;\n}\n\n.task-card {\n  display: grid;\n  gap: 10px;\n  border: 1px solid #d4dde5;\n  border-radius: 8px;\n  background: #ffffff;\n  padding: 14px;\n  margin-bottom: 10px;\n}\n\n.task-card[hidden] {\n  display: none;\n}\n\n.task-card p {\n  color: #52606d;\n  margin-bottom: 0;\n}\n\n.task-card small {\n  color: #667784;\n}\n\n.priority {\n  border-radius: 999px;\n  padding: 4px 8px;\n  font-size: 11px;\n  font-weight: 900;\n}\n\n.priority.low {\n  background: #e9f7ef;\n  color: #146c43;\n}\n\n.priority.medium {\n  background: #fff3cd;\n  color: #8a5a00;\n}\n\n.priority.high {\n  background: #fdecea;\n  color: #b42318;\n}\n\n.actions {\n  gap: 8px;\n}\n\n.empty {\n  flex: 1;\n  border: 1px dashed #aab7c2;\n  border-radius: 8px;\n  padding: 40px;\n  text-align: center;\n}\n\n@media (max-width: 980px) {\n  .auth,\n  .layout {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n\n  .sidebar {\n    position: static;\n    flex-basis: auto;\n  }\n\n  .metrics,\n  .board,\n  .task-form {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.ApiService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent" }); })();
//# sourceMappingURL=app.component.js.map