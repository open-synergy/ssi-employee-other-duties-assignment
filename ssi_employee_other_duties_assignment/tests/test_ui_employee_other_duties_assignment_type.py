# Copyright 2026 OpenSynergy Indonesia
# Copyright 2026 PT. Simetri Sinergi Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

# HttpSavepointCase -- NOT HttpCase. 14.0 HttpCase has no cls.env in
# setUpClass; only HttpSavepointCase does.
from odoo.tests import HttpSavepointCase, tagged


@tagged("post_install", "-at_install")
class TestUiEmployeeOtherDutiesAssignmentType(HttpSavepointCase):
    """Tour tests for the ``employee_other_duties_assignment_type`` work
    instructions.
    """

    @classmethod
    def setUpClass(cls):
        """Create the per-tour type fixtures the tours need."""
        super().setUpClass()
        cls.admin = cls.env.ref("base.user_admin")

        cls.eoda_type_edit = cls.env["employee_other_duties_assignment_type"].create(
            {"name": "Tour EODA Type Edit", "code": "TOUREODATYPEED"}
        )
        cls.eoda_type_delete = cls.env["employee_other_duties_assignment_type"].create(
            {"name": "Tour EODA Type Delete", "code": "TOUREODATYPEDEL"}
        )
        cls.eoda_type_deactivate = cls.env[
            "employee_other_duties_assignment_type"
        ].create({"name": "Tour EODA Type Deactivate", "code": "TOUREODATYPEDEA"})
        cls.eoda_type_activate = cls.env[
            "employee_other_duties_assignment_type"
        ].create({"name": "Tour EODA Type Activate", "code": "TOUREODATYPEACT"})
        cls.eoda_type_activate.write({"active": False})

    def test_create(self):
        """Run the create tour for ``employee_other_duties_assignment_type``.

        IK: docs/employee_other_duties_assignment_type/01-create.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_type_create", login="admin"
        )

    def test_edit(self):
        """Run the edit tour for ``employee_other_duties_assignment_type``.

        IK: docs/employee_other_duties_assignment_type/02-edit.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_type_edit", login="admin"
        )

    def test_delete(self):
        """Run the delete tour for ``employee_other_duties_assignment_type``.

        IK: docs/employee_other_duties_assignment_type/03-delete.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_type_delete", login="admin"
        )

    def test_deactivate(self):
        """Run the deactivate tour for
        ``employee_other_duties_assignment_type``.

        IK: docs/employee_other_duties_assignment_type/04-deactivate.md
        """
        self.start_tour(
            "/web",
            "ssi_employee_other_duties_assignment_type_deactivate",
            login="admin",
        )

    def test_activate(self):
        """Run the activate tour for
        ``employee_other_duties_assignment_type``.

        IK: docs/employee_other_duties_assignment_type/05-activate.md
        """
        self.start_tour(
            "/web",
            "ssi_employee_other_duties_assignment_type_activate",
            login="admin",
        )
