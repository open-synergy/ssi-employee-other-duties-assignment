# Copyright 2026 OpenSynergy Indonesia
# Copyright 2026 PT. Simetri Sinergi Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

# HttpSavepointCase -- NOT HttpCase. 14.0 HttpCase has no cls.env in
# setUpClass; only HttpSavepointCase does.
from odoo.tests import HttpSavepointCase, tagged


@tagged("post_install", "-at_install")
class TestUiEmployeeOtherDutiesAssignment(HttpSavepointCase):
    """Tour tests for the ``employee_other_duties_assignment`` work
    instructions.
    """

    @classmethod
    def setUpClass(cls):
        """Create the master data and per-tour fixtures the tours need.

        Every fixture is owned by ``admin`` (``user_id``) so that the
        ``employee_other_duties_assignment_internal_user_rule`` record
        rule does not hide it from the tour session, which also runs as
        ``admin``.
        """
        super().setUpClass()
        cls.admin = cls.env.ref("base.user_admin")

        cls.eoda_job = cls.env["hr.job"].create({"name": "Tour EODA Job"})
        cls.eoda_department = cls.env["hr.department"].create(
            {"name": "Tour EODA Department"}
        )
        cls.eoda_type = cls.env["employee_other_duties_assignment_type"].create(
            {"name": "Tour EODA Type", "code": "TOUREODATYPE"}
        )
        cls.eoda_type_2 = cls.env["employee_other_duties_assignment_type"].create(
            {"name": "Tour EODA Type Two", "code": "TOUREODATYPE2"}
        )
        cls.eoda_job_description = cls.env["job_description"].create(
            {"name": "Tour EODA Job Description", "code": "TOUREODAJD"}
        )
        cls.eoda_cancel_reason = cls.env["base.cancel_reason"].create(
            {
                "name": "Tour EODA Cancel Reason",
                "code": "TOUREODACR",
                "global_use": True,
            }
        )

        cls.eoda_employee_create = cls.env["hr.employee"].create(
            {"name": "Tour EODA Employee Create"}
        )
        cls.eoda_employee_edit = cls.env["hr.employee"].create(
            {"name": "Tour EODA Employee Edit"}
        )
        cls.eoda_employee_delete = cls.env["hr.employee"].create(
            {"name": "Tour EODA Employee Delete"}
        )
        cls.eoda_employee_confirm = cls.env["hr.employee"].create(
            {"name": "Tour EODA Employee Confirm"}
        )
        cls.eoda_employee_approve = cls.env["hr.employee"].create(
            {"name": "Tour EODA Employee Approve"}
        )
        cls.eoda_employee_reject = cls.env["hr.employee"].create(
            {"name": "Tour EODA Employee Reject"}
        )
        cls.eoda_employee_cancel = cls.env["hr.employee"].create(
            {"name": "Tour EODA Employee Cancel"}
        )
        cls.eoda_employee_restart = cls.env["hr.employee"].create(
            {"name": "Tour EODA Employee Restart"}
        )

        cls.assignment_edit = cls._create_assignment(cls.eoda_employee_edit)
        cls.assignment_delete = cls._create_assignment(cls.eoda_employee_delete)
        cls.assignment_confirm = cls._create_assignment(cls.eoda_employee_confirm)
        cls.assignment_cancel = cls._create_assignment(cls.eoda_employee_cancel)

        cls.assignment_approve = cls._create_assignment(cls.eoda_employee_approve)
        cls.assignment_approve.with_user(cls.admin).action_confirm()

        cls.assignment_reject = cls._create_assignment(cls.eoda_employee_reject)
        cls.assignment_reject.with_user(cls.admin).action_confirm()

        cls.assignment_restart = cls._create_assignment(cls.eoda_employee_restart)
        cls.assignment_restart.with_user(cls.admin).action_confirm()
        cls.assignment_restart.with_user(cls.admin).action_reject_approval()

    @classmethod
    def _create_assignment(cls, employee):
        """Create a draft assignment for ``employee``, owned by ``admin``.

        :param employee: ``hr.employee`` record the assignment is for
        :return: a single ``employee_other_duties_assignment`` record
        """
        return cls.env["employee_other_duties_assignment"].create(
            {
                "employee_id": employee.id,
                "type_id": cls.eoda_type.id,
                "date": "2026-01-15",
                "date_start": "2026-01-15",
                "job_description_ids": [(6, 0, [cls.eoda_job_description.id])],
                "user_id": cls.admin.id,
            }
        )

    def test_create(self):
        """Run the create tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/01-create.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_create", login="admin"
        )

    def test_edit(self):
        """Run the edit tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/02-edit.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_edit", login="admin"
        )

    def test_delete(self):
        """Run the delete tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/03-delete.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_delete", login="admin"
        )

    def test_confirm(self):
        """Run the confirm tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/04-confirm.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_confirm", login="admin"
        )

    def test_approve(self):
        """Run the approve tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/05-approve.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_approve", login="admin"
        )

    def test_reject(self):
        """Run the reject tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/06-reject.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_reject", login="admin"
        )

    def test_cancel(self):
        """Run the cancel tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/10-cancel.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_cancel", login="admin"
        )

    def test_restart(self):
        """Run the restart tour for ``employee_other_duties_assignment``.

        IK: docs/employee_other_duties_assignment/12-restart.md
        """
        self.start_tour(
            "/web", "ssi_employee_other_duties_assignment_restart", login="admin"
        )
