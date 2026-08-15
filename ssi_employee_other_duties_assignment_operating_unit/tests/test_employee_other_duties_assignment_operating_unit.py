# Copyright 2026 OpenSynergy Indonesia
# Copyright 2026 PT. Simetri Sinergi Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

from odoo_yaml_test import YamlTransactionCase

from odoo.tests import tagged


@tagged("post_install", "-at_install")
class TestEmployeeOtherDutiesAssignmentOperatingUnit(YamlTransactionCase):
    """Cover the operating unit glue on ``employee_other_duties_assignment``.

    Exercises how ``operating_unit_id`` is derived from ``employee_id``
    on the form, changes when the employee changes, clears when the
    employee is cleared, and persists through the confirm/approve/done
    workflow.
    """

    def test_employee_other_duties_assignment_operating_unit(self):
        """Run the operating unit YAML scenarios."""
        self.run_yaml_scenario(
            "test_data_employee_other_duties_assignment_operating_unit.yaml"
        )
