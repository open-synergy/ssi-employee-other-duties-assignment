# Confirm Employee Other Duties Assignment

> **Module:** ssi_employee_other_duties_assignment\
> **Model:** `employee_other_duties_assignment`\
> **Menu:** Human Resource > Career Management > Employee Other Duties Assignments\
> **Actor:** user in group `Employee Other Duties Assignment / User`\
> **State:** `draft` → `confirm`\
> **Requires:** `01-create`

## Pre-Condition

- **Record:** Status is **Draft**.
- **Config:** An active `policy.template` for this model grants `confirm_ok` for state
  `draft` to the actor's group.
- **Config:** An active `approval.template` for this model matches this record.
- **Config:** An active `sequence.template` exists for this model.
- **Access:** User has _Can Confirm_ access right.

## Flow

1. Open the **Human Resource > Career Management > Employee Other Duties Assignments**
   menu.
2. Open the record to confirm.
3. Click the **Confirm** button.
4. Click **OK** on the confirmation dialog.

## Post-Condition

- Status changes to **Waiting for Approval**.
- An approval record is created for the approver group defined by the approval template.
