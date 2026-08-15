odoo.define("ssi_employee_other_duties_assignment.employee_other_duties_assignment_type_tour", function (require) {
    "use strict";

    var tour = require("web_tour.tour");

    // Shared "Flow 1 -- Open the menu" block, reused by every tour in this
    // file. "Other Duties Assignment" (menu_eoda_configuration) has no
    // action of its own and has children, so 14.0 renders it as a
    // non-clickable "<div class='dropdown-header'>" grouping heading inside
    // the Configuration dropdown -- there is no step for it. "Types" is a
    // direct, clickable entry inside that same dropdown. The action's
    // (and therefore the breadcrumb's) title is "Employe Other Duties
    // Assignment Type" -- matching the literal `name` field of
    // employee_other_duties_assignment_type_action, typo included.
    function openTypeListSteps() {
        return [
            tour.stepUtils.showAppsMenuItem(),
            {
                content: "Open the Human Resource app",
                trigger: '.o_app[data-menu-xmlid="ssi_hr.menu_root_human_resource"]',
            },
            {
                content: "Open the Configuration menu",
                trigger:
                    '.o_menu_sections [data-menu-xmlid="ssi_hr.menu_human_resource_configuration"]',
            },
            {
                content: "Open the Types menu",
                trigger:
                    ".o_menu_sections [data-menu-xmlid=" +
                    '"ssi_employee_other_duties_assignment.employee_other_duties_assignment_type_menu"]',
            },
            {
                content: "Employe Other Duties Assignment Type list is displayed",
                trigger:
                    ".o_control_panel .breadcrumb-item.active:contains(" +
                    "Employe Other Duties Assignment Type)",
                extra_trigger: ".o_list_view",
                run: function () {
                    // Assertion only; do not trigger the default click action.
                },
            },
        ];
    }

    // IK: docs/employee_other_duties_assignment_type/01-create.md
    tour.register(
        "ssi_employee_other_duties_assignment_type_create",
        {
            test: true,
            url: "/web",
        },
        [].concat(openTypeListSteps(), [
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

            // ── Flow 3 — Fill in the required fields.
            {
                content: "Fill in the Name",
                trigger: ".o_field_widget[name='name']",
                extra_trigger: ".o_form_view.o_form_editable",
                run: "text Tour EODA Type Create",
            },
            {
                content: "Fill in the Code",
                trigger: ".o_field_widget[name='code']",
                run: "text /",
            },

            // ── Flow 4 — Click Save.
            {
                content: "Save the record",
                trigger: ".o_form_button_save",
            },

            // ── Post-Condition — A new record is created.
            {
                content: "Record is saved",
                trigger: ".o_form_view.o_form_readonly",
                run: function () {},
            },
        ])
    );

    // IK: docs/employee_other_duties_assignment_type/02-edit.md
    tour.register(
        "ssi_employee_other_duties_assignment_type_edit",
        {
            test: true,
            url: "/web",
        },
        [].concat(openTypeListSteps(), [
            // ── Flow 2 — Find and open the record to edit.
            {
                content: "Open the record",
                trigger:
                    ".o_data_row:contains(Tour EODA Type Edit) .o_data_cell:first",
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
                content: "Change the Name",
                trigger: ".o_field_widget[name='name']",
                run: "text Tour EODA Type Edit Changed",
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
                run: function () {},
            },
        ])
    );

    // IK: docs/employee_other_duties_assignment_type/03-delete.md
    tour.register(
        "ssi_employee_other_duties_assignment_type_delete",
        {
            test: true,
            url: "/web",
        },
        [].concat(openTypeListSteps(), [
            // ── Flow 2 — Open the record to delete.
            {
                content: "Open the record",
                trigger:
                    ".o_data_row:contains(Tour EODA Type Delete) .o_data_cell:first",
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

            // ── Flow 5 — Click the Types breadcrumb to return to the list.
            {
                content: "Click the Employe Other Duties Assignment Type breadcrumb",
                trigger:
                    ".breadcrumb-item.o_back_button a:contains(" +
                    "Employe Other Duties Assignment Type)",
            },

            // ── Post-Condition — The record is permanently removed.
            {
                content: "Back to the list",
                trigger: ".o_list_view",
                run: function () {},
            },
        ])
    );

    // IK: docs/employee_other_duties_assignment_type/04-deactivate.md
    tour.register(
        "ssi_employee_other_duties_assignment_type_deactivate",
        {
            test: true,
            url: "/web",
        },
        [].concat(openTypeListSteps(), [
            // ── Flow 2 — Open the record to deactivate.
            {
                content: "Open the record",
                trigger:
                    ".o_data_row:contains(Tour EODA Type Deactivate) .o_data_cell:first",
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

            // ── Flow 4 — Toggle the Active field off.
            {
                content: "Toggle the Active field off",
                trigger: ".o_field_widget[name='active'] input",
                run: "click",
            },

            // ── Flow 5 — Click Save.
            {
                content: "Save the record",
                trigger: ".o_form_button_save",
            },

            // ── Post-Condition — Archived ribbon appears on the form.
            {
                content: "Archived ribbon is displayed",
                trigger: ".o_form_view .ribbon:visible:contains(Archived)",
                run: function () {},
            },
        ])
    );

    // IK: docs/employee_other_duties_assignment_type/05-activate.md
    tour.register(
        "ssi_employee_other_duties_assignment_type_activate",
        {
            test: true,
            url: "/web",
        },
        [].concat(openTypeListSteps(), [
            // ── Flow 2 — Enable the Archived filter in the search bar.
            {
                content: "Wait for the list data to finish loading",
                trigger: ".o_list_view .o_data_row",
                run: function () {
                    // Assertion only; do not trigger the default click action.
                },
            },
            {
                content: "Open the Filters menu",
                trigger: ".o_filter_menu .o_dropdown_toggler_btn",
                run: function () {
                    // Dropdown Owl 14.0 does not always open on a synthetic
                    // click -- use a native browser click.
                    this.$anchor[0].click();
                },
            },
            {
                content: "Enable the Archived filter",
                trigger: ".o_filter_menu .o_menu_item:contains(Archived) a",
                run: function () {
                    this.$anchor[0].click();
                },
            },

            // ── Flow 3 — Open the archived record to reactivate.
            {
                content: "Open the archived record",
                trigger:
                    ".o_data_row:contains(Tour EODA Type Activate) .o_data_cell:first",
                extra_trigger: ".o_list_view",
            },
            {
                trigger: ".o_form_view",
                run: function () {
                    // Assertion only; do not trigger the default click action.
                },
            },

            // ── Flow 4 — Click the Edit button.
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

            // ── Flow 5 — Toggle the Active field on.
            {
                content: "Toggle the Active field on",
                trigger: ".o_field_widget[name='active'] input",
                run: "click",
            },

            // ── Flow 6 — Click Save.
            {
                content: "Save the record",
                trigger: ".o_form_button_save",
            },

            // ── Post-Condition — The Archived ribbon no longer appears.
            {
                content: "Archived ribbon is no longer displayed",
                trigger:
                    ".o_form_view:not(:has(.ribbon:visible:contains(Archived)))",
                run: function () {},
            },
        ])
    );
});
