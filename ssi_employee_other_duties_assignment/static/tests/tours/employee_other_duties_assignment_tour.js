odoo.define(
    "ssi_employee_other_duties_assignment.employee_other_duties_assignment_tour",
    function (require) {
        "use strict";

        var tour = require("web_tour.tour");

        // Shared "Flow 1 -- Open the menu" block, reused by every tour in this
        // file. Career Management is a level-2 section (has children but is
        // still a clickable dropdown-toggle); Employee Other Duties Assignments
        // is the leaf under it.
        function openEodaListSteps() {
            return [
                tour.stepUtils.showAppsMenuItem(),
                {
                    content: "Open the Human Resource app",
                    trigger:
                        '.o_app[data-menu-xmlid="ssi_hr.menu_root_human_resource"]',
                },
                {
                    content: "Open the Career Management menu",
                    trigger:
                        '.o_menu_sections [data-menu-xmlid="ssi_hr.hr_career_management_menu"]',
                },
                {
                    content: "Open the Employee Other Duties Assignments menu",
                    trigger:
                        ".o_menu_sections [data-menu-xmlid=" +
                        '"ssi_employee_other_duties_assignment.employee_other_duties_assignment_menu"]',
                },
                {
                    content: "Employee Other Duties Assignments list is displayed",
                    trigger:
                        ".o_control_panel .breadcrumb-item.active:contains(" +
                        "Employee Other Duties Assignments)",
                    extra_trigger: ".o_list_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ];
        }

        // IK: docs/employee_other_duties_assignment/01-create.md
        tour.register(
            "ssi_employee_other_duties_assignment_create",
            {
                test: true,
                url: "/web",
            },
            [].concat(openEodaListSteps(), [
                // ── Flow 2 — Click the New button. (14.0: "Create")
                {
                    content: "Click Create",
                    trigger: ".o_list_button_add",
                    extra_trigger: ".o_list_view",
                },
                {
                    content: "Form is open in edit mode",
                    trigger: ".o_form_view.o_form_editable",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 3 — Fill in the required fields (Employee, Type,
                // Date, Date Start). Department/Manager/Job Position are
                // auto-filled from Employee and are not editable.
                {
                    content: "Select the Employee",
                    trigger: ".o_field_many2one[name='employee_id'] input",
                    extra_trigger: ".o_form_view.o_form_editable",
                    run: "text Tour EODA Employee Create",
                },
                {
                    content: "Pick the Employee from the dropdown",
                    trigger:
                        ".ui-autocomplete .ui-menu-item a:contains(Tour EODA Employee Create)",
                    in_modal: false,
                },
                {
                    content: "Select the Type",
                    trigger: ".o_field_many2one[name='type_id'] input",
                    run: "text Tour EODA Type",
                },
                {
                    content: "Pick the Type from the dropdown",
                    trigger:
                        ".ui-autocomplete .ui-menu-item a:contains(Tour EODA Type)",
                    in_modal: false,
                },
                {
                    content: "Fill in the Date field",
                    trigger: ".o_field_widget[name='date'] input",
                    run: "text 01/15/2026",
                },
                {
                    content: "Fill in the Date Start field",
                    trigger: ".o_field_widget[name='date_start'] input",
                    run: "text 01/15/2026",
                },

                // ── Flow 4 — On the Job Description tab, select the Extra
                // Job Descriptions.
                {
                    content: "Open the Job Description tab",
                    trigger: ".o_notebook .nav-link:contains(Job Description)",
                },
                {
                    content: "Click Add for Extra Job Descriptions",
                    trigger:
                        ".o_field_widget[name='job_description_ids'] " +
                        ".o_field_x2many_list_row_add a",
                },
                {
                    content: "The job description search dialog is open",
                    trigger: ".modal .o_list_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
                {
                    content: "Select the job description",
                    trigger: ".modal .o_data_row:contains(Tour EODA Job Description)",
                },

                // ── Flow 5 — Click Save.
                {
                    content: "Save the record",
                    trigger: ".o_form_button_save",
                },
                {
                    content: "Record is saved",
                    trigger: ".o_form_view.o_form_readonly",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Post-Condition — A new record is created in Draft status.
                {
                    content: "Status is Draft",
                    trigger:
                        ".o_statusbar_status .o_arrow_button[data-value='draft'].btn-primary",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ])
        );

        // IK: docs/employee_other_duties_assignment/02-edit.md
        tour.register(
            "ssi_employee_other_duties_assignment_edit",
            {
                test: true,
                url: "/web",
            },
            [].concat(openEodaListSteps(), [
                // ── Flow 2 — Find and open the record to edit.
                {
                    content: "Open the record",
                    trigger:
                        ".o_data_row:contains(Tour EODA Employee Edit) .o_data_cell:first",
                    extra_trigger: ".o_list_view",
                },
                {
                    trigger: ".o_form_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 3 — Click the Edit button.
                {
                    content: "Click the Edit button",
                    trigger: ".o_form_button_edit",
                },
                {
                    content: "Form is now editable",
                    trigger: ".o_form_view.o_form_editable",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 4 — Change the required fields.
                {
                    content: "Change the Type",
                    trigger: ".o_field_many2one[name='type_id'] input",
                    run: "text Tour EODA Type Two",
                },
                {
                    content: "Pick the new Type from the dropdown",
                    trigger:
                        ".ui-autocomplete .ui-menu-item a:contains(Tour EODA Type Two)",
                    in_modal: false,
                },

                // ── Flow 5 — Click Save.
                {
                    content: "Save the record",
                    trigger: ".o_form_button_save",
                },

                // ── Post-Condition — The record is updated with the new values.
                {
                    content: "Record is saved",
                    trigger: ".o_form_view.o_form_readonly",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ])
        );

        // IK: docs/employee_other_duties_assignment/03-delete.md
        tour.register(
            "ssi_employee_other_duties_assignment_delete",
            {
                test: true,
                url: "/web",
            },
            [].concat(openEodaListSteps(), [
                // ── Flow 2 — Open the record to delete.
                {
                    content: "Open the record",
                    trigger:
                        ".o_data_row:contains(Tour EODA Employee Delete) .o_data_cell:first",
                    extra_trigger: ".o_list_view",
                },
                {
                    trigger: ".o_form_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 3 — Click Action > Delete.
                {
                    content: "Open the Action menu",
                    trigger: ".o_cp_action_menus button:contains(Action)",
                },
                {
                    content: "Click Delete",
                    trigger: ".o_cp_action_menus .o_menu_item a",
                    run: function () {
                        var $delete = $(".o_cp_action_menus .o_menu_item a").filter(
                            function () {
                                return $(this).text().trim() === "Delete";
                            }
                        );
                        $delete[0].click();
                    },
                },

                // ── Flow 4 — Click OK to confirm.
                {
                    content: "Confirm deletion",
                    trigger: ".modal-footer button.btn-primary",
                    in_modal: true,
                },

                // ── Flow 5 — Click the Employee Other Duties Assignments
                // breadcrumb to return to the list.
                {
                    content: "Click the Employee Other Duties Assignments breadcrumb",
                    trigger:
                        ".breadcrumb-item.o_back_button a:contains(" +
                        "Employee Other Duties Assignments)",
                },

                // ── Post-Condition — The record is permanently removed.
                {
                    content: "Back to the list",
                    trigger: ".o_list_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ])
        );

        // IK: docs/employee_other_duties_assignment/04-confirm.md
        tour.register(
            "ssi_employee_other_duties_assignment_confirm",
            {
                test: true,
                url: "/web",
            },
            [].concat(openEodaListSteps(), [
                // ── Flow 2 — Open the record to confirm.
                {
                    content: "Open the record",
                    trigger:
                        ".o_data_row:contains(Tour EODA Employee Confirm) .o_data_cell:first",
                    extra_trigger: ".o_list_view",
                },
                {
                    trigger: ".o_form_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 3 — Click the Confirm button.
                {
                    content: "Click the Confirm button",
                    trigger: ".o_statusbar_buttons button[name='action_confirm']",
                    extra_trigger: ".o_form_view",
                },

                // ── Flow 4 — Click OK on the confirmation dialog.
                {
                    content: "Confirm the dialog",
                    trigger: ".modal-footer button.btn-primary",
                    in_modal: true,
                },

                // ── Post-Condition — Status changes to Waiting for Approval.
                {
                    content: "Status is Waiting for Approval",
                    trigger:
                        ".o_statusbar_status .o_arrow_button[data-value='confirm'].btn-primary",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ])
        );

        // IK: docs/employee_other_duties_assignment/05-approve.md
        tour.register(
            "ssi_employee_other_duties_assignment_approve",
            {
                test: true,
                url: "/web",
            },
            [].concat(openEodaListSteps(), [
                // ── Flow 2 — Open the record to approve.
                {
                    content: "Open the record",
                    trigger:
                        ".o_data_row:contains(Tour EODA Employee Approve) .o_data_cell:first",
                    extra_trigger: ".o_list_view",
                },
                {
                    trigger: ".o_form_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 3 — Click the Approve button.
                {
                    content: "Click the Approve button",
                    trigger:
                        ".o_statusbar_buttons button[name='action_approve_approval']",
                    extra_trigger: ".o_form_view",
                },

                // ── Flow 4 — Click OK on the confirmation dialog.
                {
                    content: "Confirm the dialog",
                    trigger: ".modal-footer button.btn-primary",
                    in_modal: true,
                },

                // ── Post-Condition — Status automatically changes to On
                // Progress once approved.
                {
                    content: "Status is On Progress",
                    trigger:
                        ".o_statusbar_status .o_arrow_button[data-value='open'].btn-primary",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ])
        );

        // IK: docs/employee_other_duties_assignment/06-reject.md
        tour.register(
            "ssi_employee_other_duties_assignment_reject",
            {
                test: true,
                url: "/web",
            },
            [].concat(openEodaListSteps(), [
                // ── Flow 2 — Open the record to reject.
                {
                    content: "Open the record",
                    trigger:
                        ".o_data_row:contains(Tour EODA Employee Reject) .o_data_cell:first",
                    extra_trigger: ".o_list_view",
                },
                {
                    trigger: ".o_form_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 3 — Click the Reject button.
                {
                    content: "Click the Reject button",
                    trigger:
                        ".o_statusbar_buttons button[name='action_reject_approval']",
                    extra_trigger: ".o_form_view",
                },

                // ── Flow 4 — Click OK on the confirmation dialog.
                {
                    content: "Confirm the dialog",
                    trigger: ".modal-footer button.btn-primary",
                    in_modal: true,
                },

                // ── Post-Condition — Status changes to Rejected.
                {
                    content: "Status is Rejected",
                    trigger:
                        ".o_statusbar_status .o_arrow_button[data-value='reject'].btn-primary",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ])
        );

        // IK: docs/employee_other_duties_assignment/10-cancel.md
        tour.register(
            "ssi_employee_other_duties_assignment_cancel",
            {
                test: true,
                url: "/web",
            },
            [].concat(openEodaListSteps(), [
                // ── Flow 2 — Open the record to cancel.
                {
                    content: "Open the record",
                    trigger:
                        ".o_data_row:contains(Tour EODA Employee Cancel) .o_data_cell:first",
                    extra_trigger: ".o_list_view",
                },
                {
                    trigger: ".o_form_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 3 — Click the Cancel button. This is a type="action"
                // button (its name is a numeric window action id resolved at
                // render time), so it must be targeted by label, not by name.
                {
                    content: "Click the Cancel button",
                    trigger: ".o_statusbar_buttons button:enabled:contains('Cancel')",
                    extra_trigger: ".o_form_view",
                },

                // ── Flow 4 — In the wizard that appears, select the Cancel
                // Reason.
                {
                    content: "Wizard is open",
                    trigger: ".o_form_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
                {
                    content: "Select the Cancel Reason",
                    trigger: ".o_field_many2one[name='cancel_reason_id'] input",
                    run: "text Tour EODA Cancel Reason",
                },
                {
                    content: "Pick the reason",
                    trigger:
                        ".ui-autocomplete .ui-menu-item a:contains(Tour EODA Cancel Reason)",
                    in_modal: false,
                },

                // ── Flow 5 — Click Confirm.
                {
                    content: "Confirm the wizard",
                    trigger: ".modal-footer button[name='action_confirm']",
                },

                // ── Flow 6 — Click OK on the confirmation dialog.
                {
                    content: "Confirm the dialog",
                    trigger: ".modal-footer button.btn-primary",
                    in_modal: true,
                },

                // ── Post-Condition — Status changes to Cancelled.
                {
                    content: "Status is Cancelled",
                    trigger:
                        ".o_statusbar_status .o_arrow_button[data-value='cancel'].btn-primary",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ])
        );

        // IK: docs/employee_other_duties_assignment/12-restart.md
        tour.register(
            "ssi_employee_other_duties_assignment_restart",
            {
                test: true,
                url: "/web",
            },
            [].concat(openEodaListSteps(), [
                // ── Flow 2 — Open the record to restart.
                {
                    content: "Open the record",
                    trigger:
                        ".o_data_row:contains(Tour EODA Employee Restart) .o_data_cell:first",
                    extra_trigger: ".o_list_view",
                },
                {
                    trigger: ".o_form_view",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },

                // ── Flow 3 — Click the Restart button.
                {
                    content: "Click the Restart button",
                    trigger: ".o_statusbar_buttons button[name='action_restart']",
                    extra_trigger: ".o_form_view",
                },

                // ── Flow 4 — Click OK on the confirmation dialog.
                {
                    content: "Confirm the dialog",
                    trigger: ".modal-footer button.btn-primary",
                    in_modal: true,
                },

                // ── Post-Condition — Status returns to Draft.
                {
                    content: "Status is Draft",
                    trigger:
                        ".o_statusbar_status .o_arrow_button[data-value='draft'].btn-primary",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ])
        );
    }
);
