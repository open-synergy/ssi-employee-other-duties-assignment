# Reject Employee Other Duties Assignment

> **Module:** ssi_employee_other_duties_assignment\
> **Model:** `employee_other_duties_assignment`\
> **Menu:** Human Resource > Career Management > Employee Other Duties Assignments\
> **Actor:** user registered as an approver on the active `approval.template`\
> **State:** `confirm` → `reject`\
> **Requires:** `04-confirm`

## Pre-Condition

- **Record:** Status is **Waiting for Approval**.
- **Config:** An active `policy.template` grants `reject_ok` to the actor's group.
- **Access:** User is registered as an approver on the active approval template.
- **Access:** User has _Can Reject_ access right.

## Flow

1. Open the **Human Resource > Career Management > Employee Other Duties Assignments**
   menu.
2. Open the record to reject.
3. Click the **Reject** button.
4. Click **OK** on the confirmation dialog.

## Post-Condition

- Status changes to **Rejected**.
- No document number is assigned.
