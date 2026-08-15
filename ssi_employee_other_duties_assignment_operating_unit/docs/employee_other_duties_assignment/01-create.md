# Create Employee Other Duties Assignment

> **Module:** ssi_employee_other_duties_assignment_operating_unit\
> **Extends:** ssi_employee_other_duties_assignment — model `employee_other_duties_assignment`,
> aksi `01-create`

## Additional Fields

When this module is installed, the create form gains one field, visible to users in the
**Multiple Operating Unit** group:

- **Operating Unit**: Automatically filled from the selected **Employee**'s operating
  unit. Not required, but editable. Clearing **Employee** clears this field; picking a
  different **Employee** replaces the value with that employee's operating unit. Used as
  the basis for the `employee_other_duties_assignment_rule_ou` record rule (see
  **Modified — Record Visibility** below), and carries over unchanged through the
  confirm / approve / done workflow.

## Modified — Record Visibility

- The list is now filtered by operating unit for users in the **Operating Unit**
  responsibility group (`employee_other_duties_assignment_ou_group`): such a user only
  sees assignments whose **Operating Unit** is one of their assigned operating units.
  This is not a Flow step.
