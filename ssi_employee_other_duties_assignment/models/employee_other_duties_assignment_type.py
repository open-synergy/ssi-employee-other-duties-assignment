# Copyright 2022 OpenSynergy Indonesia
# Copyright 2022 PT. Simetri Sinergi Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

from odoo import models


class EmployeeOtherDutiesAssignmentType(models.Model):
    """
    Master data classifying the kind of other duties assignment given to
    an employee (e.g. committee membership, temporary task force).

    Referenced by ``employee_other_duties_assignment.type_id``; deleting
    a type still in use by an assignment is blocked (``ondelete``
    restriction on that field).
    """

    _name = "employee_other_duties_assignment_type"
    _description = "Employee Other Duties Assignment Types"
    _inherit = [
        "mixin.master_data",
    ]
