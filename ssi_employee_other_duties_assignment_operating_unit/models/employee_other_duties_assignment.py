# Copyright 2026 OpenSynergy Indonesia
# Copyright 2026 PT. Simetri Sinergi Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

from odoo import api, models


class EmployeeOtherDutiesAssignment(models.Model):
    _name = "employee_other_duties_assignment"
    _inherit = [
        "employee_other_duties_assignment",
        "mixin.single_operating_unit",
    ]

    @api.onchange(
        "employee_id",
    )
    def onchange_operating_unit_id(self):
        self.operating_unit_id = False
        if self.employee_id:
            self.operating_unit_id = self.employee_id.operating_unit_id
