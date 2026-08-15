# Copyright 2024 OpenSynergy Indonesia
# Copyright 2024 PT. Simetri Sinergi Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

from odoo_yaml_test import YamlTransactionCase

from odoo.tests import tagged


@tagged("post_install", "-at_install")
class TestEmployeeOtherDutiesAssignmentType(YamlTransactionCase):
    """Cover CRUD of the ``employee_other_duties_assignment_type`` model."""

    def test_employee_other_duties_assignment_type(self):
        """Run the assignment type create/edit/delete scenario suite."""
        self.run_yaml_scenario("test_data_employee_other_duties_assignment_type.yaml")
