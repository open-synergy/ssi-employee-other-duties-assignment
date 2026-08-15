odoo.define(
    "ssi_employee_other_duties_assignment_operating_unit" +
        ".employee_other_duties_assignment_tour",
    function (require) {
        "use strict";

        var tour = require("web_tour.tour");

        // IK: docs/employee_other_duties_assignment/01-create.md (delta)
        // Extends: ssi_employee_other_duties_assignment --
        // docs/employee_other_duties_assignment/01-create.md
        //
        // Delta-only tour (E1 -- additional user-facing field): navigation
        // steps below are sourced from the BASE IK's Flow (open menu, click
        // New), the assertion step is sourced from THIS module's delta IK
        // ("## Additional Fields" -- Operating Unit). Per the E1 tour
        // pattern (odoo-development-ui-test, scope-and-boundaries.md §3),
        // the tour stops after asserting the field is rendered -- it does
        // NOT continue into Confirm/Approve, and it does NOT assert the
        // field's onchange-filled VALUE (that is a YAML unit test concern,
        // already covered by test_data_employee_other_duties_assignment_
        // operating_unit.yaml).
        tour.register(
            "ssi_employee_other_duties_assignment_operating_unit_create",
            {
                test: true,
                url: "/web",
            },
            [
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

                // ── Base Flow step 2 — Click the New button. (14.0: "Create")
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

                // ── Delta "## Additional Fields" — the Operating Unit
                // field is rendered on the create form for users in the
                // Multiple Operating Unit group. Only its PRESENCE is
                // asserted here; the value it receives from the Employee
                // onchange is verified by the YAML unit test, not by this
                // tour.
                {
                    content: "The Operating Unit field is displayed",
                    trigger: ".o_field_many2one[name='operating_unit_id']",
                    run: function () {
                        // Assertion only; do not trigger the default click action.
                    },
                },
            ]
        );
    }
);
