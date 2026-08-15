# Delete Employee Other Duties Assignment Type

> **Module:** ssi_employee_other_duties_assignment\
> **Model:** `employee_other_duties_assignment_type`\
> **Menu:** Human Resource > Configuration > Other Duties Assignment > Types\
> **Actor:** user in group `Human Resource - Configurator / Employee Other Duties Assignment Type`\
> **Requires:** `01-create`

## Pre-Condition

- **Record:** The record is not referenced by any Employee Other Duties Assignment
  record (the field is protected by `ondelete="restrict"`).

## Flow

1. Open the **Human Resource > Configuration > Other Duties Assignment > Types** menu.
2. Open the record to delete.
3. Click **Action** > **Delete**.
4. Click **OK** to confirm.
5. Click the **Types** breadcrumb to return to the list.

## Post-Condition

- The record is permanently removed from the system.
- The list view no longer shows the deleted record.
