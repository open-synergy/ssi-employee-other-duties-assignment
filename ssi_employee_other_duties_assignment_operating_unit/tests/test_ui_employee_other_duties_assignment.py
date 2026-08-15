# Copyright 2026 OpenSynergy Indonesia
# Copyright 2026 PT. Simetri Sinergi Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

# HttpSavepointCase -- NOT HttpCase. 14.0 HttpCase has no cls.env in
# setUpClass; only HttpSavepointCase does.
from odoo.tests import HttpSavepointCase, tagged


@tagged("post_install", "-at_install")
class TestUiEmployeeOtherDutiesAssignmentOperatingUnit(HttpSavepointCase):
    """Tour test for the Operating Unit delta on the create work
    instruction.
    """

    @classmethod
    def setUpClass(cls):
        """Grant ``admin`` the Multiple Operating Unit group.

        The Operating Unit field added by this module is only rendered
        for users in ``operating_unit.group_multi_operating_unit``.
        ``base.user_admin`` already holds it via
        ``group_manager_operating_unit``, so no explicit grant is
        required here -- kept as a no-op ``super()`` call for symmetry
        with other tour test files and as the place future fixtures
        would be added.
        """
        super().setUpClass()

    def test_create(self):
        """Run the delta create tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/01-create.md
        """
        self.start_tour(
            "/web",
            "ssi_employee_other_duties_assignment_operating_unit_create",
            login="admin",
        )
