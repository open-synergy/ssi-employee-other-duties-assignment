# Copyright 2024 OpenSynergy Indonesia
# Copyright 2024 PT. Simetri Sinergi Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

from odoo_yaml_test import YamlTransactionCase

from odoo.tests import tagged


@tagged("post_install", "-at_install")
class TestEmployeeOtherDutiesAssignment(YamlTransactionCase):
    """Cover the ``employee_other_duties_assignment`` transaction flow.

    Exercises the full draft-confirm-open-done lifecycle, the
    reject/restart negative path, the ``extra_job_description_ids``
    compute on ``hr.employee.base``, and basic type CRUD.
    """

    def test_employee_other_duties_assignment(self):
        """Run the assignment scenario suite."""
        self.run_yaml_scenario("test_data_employee_other_duties_assignment.yaml")
