# Skill: refactor-plan

disable-model-invocation: true

## Description
Create a structured refactoring plan before making significant code changes.

## Inputs Required
- `scope`: Files/modules to refactor.
- `goal`: What the refactoring achieves (e.g., "extract service layer", "reduce duplication").
- `repo`: Which repository.

## Steps
1. **Inventory**: List all files in scope with line counts and dependencies.
2. **Impact analysis**: Identify callers/consumers of the code being refactored.
3. **Risk assessment**: Classify as low/medium/high risk based on test coverage and blast radius.
4. **Plan phases**: Break refactoring into atomic, independently deployable steps.
5. **Test strategy**: Define what tests need to exist before, during, and after.
6. **Rollback plan**: Document how to revert if issues arise.
7. **Write plan**: Create a numbered step-by-step plan.

## Outputs
- Refactoring plan document with phases, risk assessment, and test strategy.
- File-by-file change list.
- Estimated number of PRs needed.

## Quality Gates
- No phase introduces breaking changes without a migration path.
- Each phase is independently deployable.
- Test coverage requirements defined for each phase.

## DoD Checklist
- [ ] All files in scope inventoried.
- [ ] Impact analysis completed.
- [ ] Risk classified per phase.
- [ ] Test strategy documented.
- [ ] Rollback plan documented.
- [ ] Plan reviewed before execution begins.
