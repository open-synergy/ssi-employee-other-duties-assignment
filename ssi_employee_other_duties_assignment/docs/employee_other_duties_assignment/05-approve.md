# Approve Employee Other Duties Assignment

> **Module:** ssi_employee_other_duties_assignment\
> **Model:** `employee_other_duties_assignment`\
> **Menu:** Human Resource > Career Management > Employee Other Duties Assignments\
> **Actor:** user registered as an approver on the active `approval.template`\
> **State:** `confirm` → `open`\
> **Requires:** `04-confirm`

## Pre-Condition

- **Record:** Status is **Waiting for Approval**.
- **Config:** An active `policy.template` grants `approve_ok` to the actor's group.
- **Access:** User is registered as an approver on the active approval template.
- **Access:** User has _Can Approve_ access right.

## Flow

1. Open the **Human Resource > Career Management > Employee Other Duties Assignments**
   menu.
2. Open the record to approve.
3. Click the **Approve** button.
4. Click **OK** on the confirmation dialog.

## Post-Condition

- The approval is fulfilled and status automatically changes to **On Progress** (the
  `confirm → open` transition happens automatically once the assignment is approved).
- A document number is assigned from the sequence template, replacing **/**.
- While the record stays **On Progress**, its **Extra Job Descriptions** are added to
  the assigned employee's own **Extra** job description list on the Employee form.
