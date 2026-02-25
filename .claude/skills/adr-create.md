# Skill: adr-create

disable-model-invocation: true

## Description
Create a new Architecture Decision Record following the canonical template.

## Inputs Required
- `title`: Short title for the decision.
- `context`: Description of the problem or decision needed.
- `decision`: What was decided.
- `alternatives`: List of alternatives considered.

## Steps
1. Read the ADR index at `project-standards/.claude/adrs/README.md`.
2. Determine the next ADR number (increment from highest existing).
3. Copy `project-standards/.claude/shared/ADR_TEMPLATE.md`.
4. Fill in: title, status (Proposed), date, context, decision, consequences, alternatives.
5. Save as `project-standards/.claude/adrs/NNNN-slug.md`.
6. Update the index table in `project-standards/.claude/adrs/README.md`.

## Outputs
- New ADR file at the correct path.
- Updated index in README.md.
- Summary of the decision for review.

## Quality Gates
- ADR number is unique and sequential.
- All template sections are filled.
- At least one alternative is documented.
- Consequences include both positive and negative.

## DoD Checklist
- [ ] ADR file created with correct number.
- [ ] All sections populated.
- [ ] Index updated.
- [ ] Ready for team review.
