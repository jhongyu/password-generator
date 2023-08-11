import { useState } from 'react';
import { Copy as CopyIcon, Check as CheckIcon } from 'react-feather';
import classes from './Copy.module.scss';

interface CopyProps {
  password: string;
}

function Copy({ password }: CopyProps) {
  const [passwordCopied, setPasswordCopied] = useState(false);
  const Tag = passwordCopied ? CheckIcon : CopyIcon;

  const handleCopyPassword = () => {
    try {
      navigator.clipboard.writeText(password);
      setPasswordCopied(true);

      setTimeout(() => {
        setPasswordCopied(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.copyWrapper}>
      {passwordCopied && <span className={classes.info}>COPIED</span>}
      <button
        className={`${classes.copy} ${passwordCopied ? classes.success : ''}`}
        onClick={() => handleCopyPassword()}
      >
        <Tag />
      </button>
    </div>
  );
}

export default Copy;
