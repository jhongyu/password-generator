import { ReactNode } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check as CheckIcon } from 'react-feather';
import classes from './ConditionItem.module.scss';

interface ConditionItemProps {
  id: string;
  children: ReactNode;
  selected: boolean;
  onChange: (value: boolean) => void;
}

function ConditionItem({
  id,
  children,
  selected,
  onChange,
}: ConditionItemProps) {
  return (
    <div className={classes.conditionItem}>
      <Checkbox.Root
        className={classes.checkboxRoot}
        id={id}
        checked={selected}
        onCheckedChange={onChange}
      >
        <Checkbox.Indicator className={classes.checkboxIndicator}>
          <CheckIcon className={classes.checkboxIcon} size={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={classes.label} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

export default ConditionItem;
